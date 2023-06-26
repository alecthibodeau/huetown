import { useEffect, useState } from 'react';

/* Constants */
import lunarCalendarsInformation from '../constants/digital-lunar-calendar/lunar-calendars-information';
import lunarPhasesInformation from '../constants/digital-lunar-calendar/lunar-phases-information';

/* Helpers */
import digitalLunarCalendar from '../helpers/digital-lunar-calendar';
import formatDateAndTime from '../helpers/format-date-and-time';
import phasesSVGPaths from '../constants/digital-lunar-calendar/lunar-phases-svg-paths';

function MoonSpace(props: { date: Date }): JSX.Element {

  const {
    waningCrescentPrefix,
    waningGibbousPrefix,
    waxingGibbousPrefix,
    waxingCrescentPrefix
  } = lunarPhasesInformation;

  const {
    oneRandomNumber,
    getLunarPhase,
    getBackgroundColor,
    getRandomOrnamentLiveChange
  } = digitalLunarCalendar;

  const { formatDayMonthAndDate, formatFullDateAndTime, formatTwentyFourHourTime } = formatDateAndTime;

  const [selectedPhaseDate, setSelectedPhaseDate] = useState<Date>(props.date);

  const colorWhite: string = '#fff';

  // useEffect(() => {
  //   const midnight: string = '00:00:00'
  //   if (formatTwentyFourHourTime(props.date).slice(-1) === '5') {
  //     console.log(`%c${formatTwentyFourHourTime(props.date)}`, 'font-size: 20px; background: #0ff; color: #fff');
  //     console.log(`%c${props.date}`, 'font-size: 20px; background: #00f; color: #fff');
  //   }
  // }, [props.date]);

  function incrementDate(next?: boolean): void {
    const incrementor: number = next ? 1 : -1;
    selectedPhaseDate.setDate(selectedPhaseDate.getDate() + incrementor);
    setSelectedPhaseDate(selectedPhaseDate);
    console.log('selectedPhaseDate: ', selectedPhaseDate)
  }

  function getPhaseCategory(phase: string): string {
    const phasePrefix: string = phase.slice(0, 2);
    const intermediate: string = 'intermediate'
    const isWaning: boolean = phasePrefix === waningCrescentPrefix || phasePrefix === waningGibbousPrefix;
    const isWaxing: boolean = phasePrefix === waxingCrescentPrefix || phasePrefix === waxingGibbousPrefix;
    let phaseCategory: string = 'principal';
    if (isWaning) phaseCategory = `${intermediate} waning`;
    if (isWaxing) phaseCategory = `${intermediate} waxing`;
    return phaseCategory;
  }

  return (
    <div>
      <div className="date-container">
        <div className="phase-container">
          <svg
            viewBox="0 0 24 24"
            width="120px"
            height="120px"
            className={getPhaseCategory(getLunarPhase(selectedPhaseDate))}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <circle
              fill="#f00" // to be set dynamically
              cx="12"
              cy="12"
              r="12"
            />
            <path
              d={phasesSVGPaths[getLunarPhase(selectedPhaseDate)]}
              fill={colorWhite}
              fillOpacity="70%"
            />
          </svg>
        </div>
        {/* <div className="moon-disc"></div> */}
      </div>
      <div className="date-picker">
        <button onClick={() => incrementDate()}>&lt;</button>
        <span>{formatDayMonthAndDate(selectedPhaseDate)}</span>
        <button onClick={() => incrementDate(true)}>&gt;</button>
      </div>
      {/* <div>
        {`Raw Date is ${props.date}`}
      </div> */}
      <div>
        {`Today is ${formatFullDateAndTime(props.date)}`}
      </div>
      <div>
        {`Current phase is ${getLunarPhase(props.date)}`}
      </div>
      <div>
        {`Selected phase is ${getLunarPhase(selectedPhaseDate)}`}
      </div>
      <div>
        {`Current color is ${getBackgroundColor(props.date)}`}
      </div>
      {/* <div>
        {`Random ornament updating live is: ${getRandomOrnamentLiveChange(props.date)}`}
      </div> */}
      <div>
        {`Random ornament fixed is: ${lunarCalendarsInformation[props.date.getFullYear()].ornaments[oneRandomNumber]}`}
      </div>
    </div>
  );
}

export default MoonSpace;
