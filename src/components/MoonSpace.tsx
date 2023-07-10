import { useEffect, useState } from 'react';

/* Constants */
import lunarCalendarsInformation from '../constants/digital-lunar-calendar/lunar-calendars-information';
import phasesSVGPaths from '../constants/digital-lunar-calendar/lunar-phases-svg-paths';

/* Helpers */
import digitalLunarCalendar from '../helpers/digital-lunar-calendar';
import formatDateAndTime from '../helpers/format-date-and-time';

function MoonSpace(): JSX.Element {

  const {
    commonYearLength,
    leapYearLength,
    oneRandomNumber,
    isLeapYear,
    getLunarPhase,
    getLunarPhaseCategory,
    getBackgroundColor,
    getRandomOrnamentLiveChange
  } = digitalLunarCalendar;

  const {
    formatDayMonthAndDate,
    formatFullDateAndTime,
    formatTwentyFourHourTime
  } = formatDateAndTime;

  const [todayDate, setTodayDate] = useState<Date>(new Date());
  const [selectedPhaseDate, setSelectedPhaseDate] = useState<Date>(new Date());
  const [incrementClicks, setIncrementClicks] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentYear, setCurrentYear] = useState<number>(selectedPhaseDate.getFullYear());
  const [isNewYearsDay, setIsNewYearsDay] = useState<boolean>(todayDate === (new Date(currentYear, 0, 1)));
  const [isNewYearsEve, setIsNewYearsEve] = useState<boolean>(todayDate === (new Date(currentYear, 12, 31)));

  const newYearsDay = new Date(currentYear, 0, 1);
  const newYearsEve = new Date(currentYear, 12, 31);

  const colorWhite: string = '#fff';
  const milliseconds: number = 10;
  const randomOrnamentFixed = lunarCalendarsInformation[selectedPhaseDate.getFullYear()].ornaments[oneRandomNumber];

  useEffect(() => {
    const interval = setInterval(() => setTodayDate(new Date()), milliseconds);
    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   // const midnight: string = '00:00:00'
  //   if (formatTwentyFourHourTime(todayDate).slice(-1) === '5') {
  //     console.log(`%c${formatTwentyFourHourTime(todayDate)}`, 'font-size: 20px; background: #0ff; color: #fff');
  //     console.log(`%c${todayDate}`, 'font-size: 20px; background: #00f; color: #fff');
  //   }
  // }, [todayDate]);

  function incrementDate(next?: boolean): void {
    const incrementor: number = next ? 1 : -1;
    selectedPhaseDate.setDate(selectedPhaseDate.getDate() + incrementor);
    setSelectedPhaseDate(selectedPhaseDate);
    setIncrementClicks(incrementClicks + 1);
    setIsNewYearsDay(selectedPhaseDate === newYearsDay ? true : false);
    setIsNewYearsEve(selectedPhaseDate === newYearsEve ? true : false);
    console.log('selectedPhaseDate: ', selectedPhaseDate);
  }

  function setDateToNewYearsDay(): void {
    setIsNewYearsDay(true);
    setIsNewYearsEve(false);
    setSelectedPhaseDate(newYearsDay);
  }

  function renderSkyLine(skyLine: string, index: number): JSX.Element {
    return (
      <div key={`${skyLine}-${index}`}></div>
    )
  }

  function delayTime(millisecondsDelay: number): Promise<number> {
    return new Promise((resolve) => setTimeout(resolve, millisecondsDelay));
  }

  async function animateAnnualPhases(daysInTheYear: number) {
    for (let i = 0; i < daysInTheYear - 1; i++) {
      await delayTime(milliseconds);
      // if (!isPlaying) break;
      incrementDate(true);
    }
    setIsPlaying(false);
    setIsNewYearsDay(false);
    setIsNewYearsEve(true);
  }

  function onClickPlayButton(): void {
    const daysInTheYear = isLeapYear(currentYear) ? leapYearLength : commonYearLength;
    setIsPlaying(isPlaying ? false : true);
    animateAnnualPhases(daysInTheYear);
  }

  function onClickToday(): void {
    setSelectedPhaseDate(todayDate);
    setIsNewYearsDay(todayDate === (new Date(currentYear, 0, 1)) ? true : false);
  }

  return (
    <div className="moon-space">
      <div className="moon-image-container">
        <div className="phase-container">
          <svg
            viewBox="0 0 24 24"
            width="120px"
            height="120px"
            className={getLunarPhaseCategory(getLunarPhase(selectedPhaseDate))}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <circle
              fill="#008eb2" // to be set dynamically
              cx="12"
              cy="12"
              r="12"
            />
            <path
              d={phasesSVGPaths[getLunarPhase(selectedPhaseDate)]}
              fill={colorWhite}
              fillOpacity="80%"
            />
          </svg>
        </div>
        {/* <div className="moon-disc"></div> */}
      </div>
      <div className="sky-lines">
        {Array(76).fill('sky-line').map(renderSkyLine)}
      </div>
      <div className="moon-info">

        <div className="date-picker">
          <button
            className={`increment-button ${isPlaying || isNewYearsDay ? 'is-not-visible' : ''}`}
            onClick={() => incrementDate()}>
            &lt;
          </button>
          <span>{formatDayMonthAndDate(selectedPhaseDate)}</span>
          <button
            className={`increment-button ${isPlaying || isNewYearsEve ? 'is-not-visible' : ''}`}
            onClick={() => incrementDate(true)}>
            &gt;
          </button>
        </div>

        {!isPlaying ?
          <div className="buttons-container">
            <button onClick={() => (isNewYearsDay && !isPlaying ? onClickToday() : setDateToNewYearsDay())}>
              {`Choose ${isNewYearsDay && !isPlaying ? 'Today' : 'New Year\'s Day'}`}
            </button>
            {formatDayMonthAndDate(selectedPhaseDate) === formatDayMonthAndDate(newYearsDay) ?
              <button onClick={() => onClickPlayButton()}>
                Play Year
              </button>
            : null}
          </div>
        : null}

        <div>
          {/* <div>
            {`Today is ${formatFullDateAndTime(todayDate)}`}
          </div>
          <div>
            {`Today's phase is ${getLunarPhase(todayDate)}`}
          </div>
          <div>
            {`Selected phase is ${getLunarPhase(selectedPhaseDate)}`}
          </div>
          <div>
            {`Selected color is ${getBackgroundColor(selectedPhaseDate)}`}
          </div> */}
          {/* <div>
            {`Random ornament updating live is: ${getRandomOrnamentLiveChange(selectedPhaseDate)}`}
          </div> */}
          {/* <div>
            {`Random ornament fixed is: ${randomOrnamentFixed}`}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default MoonSpace;
