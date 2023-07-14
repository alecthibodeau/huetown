import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

/* Constants */
import items from '../constants/items';
import lunarCalendarsInformation from '../constants/digital-lunar-calendar/lunar-calendars-information';
import phasesSVGPaths from '../constants/digital-lunar-calendar/lunar-phases-svg-paths';

/* Helpers */
import digitalLunarCalendar from '../helpers/digital-lunar-calendar';
import formatDateAndTime from '../helpers/format-date-and-time';
import textFormatting from '../helpers/text-formatting';

function MoonSpace(): JSX.Element {
  const {
    monthJanuary,
    monthDecember,
    dateFirst,
    dateThirtyFirst,
    commonYearLength,
    leapYearLength,
    oneRandomNumber,
    phasesInfoForUser,
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

  const { formatItemRoutePath } = textFormatting;

  const [todayDate, setTodayDate] = useState<Date>(new Date());
  const [selectedPhaseDate, setSelectedPhaseDate] = useState<Date>(new Date());
  const [selectedYear, setSelectedYear] = useState<number>(selectedPhaseDate.getFullYear());
  const [incrementClicks, setIncrementClicks] = useState<number>(0);
  const [isNewYearsDay, setIsNewYearsDay] = useState<boolean>(todayDate === (new Date(selectedYear, monthJanuary, dateFirst)));
  const [isNewYearsEve, setIsNewYearsEve] = useState<boolean>(todayDate === (new Date(selectedYear, monthDecember, dateThirtyFirst)));
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const dateNewYearsDay = new Date(selectedYear, monthJanuary, dateFirst);
  const dateNewYearsEve = new Date(selectedYear, monthDecember, dateThirtyFirst);

  const colorWhite: string = '#fff';
  const milliseconds: number = 10;
  const backDirection: string = 'back';
  const forwardDirection: string = 'forward';
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

  function renderSkyLine(skyLine: string, index: number): JSX.Element {
    return (
      <div key={`${skyLine}-${index}`}></div>
    )
  }

  function renderIncrementButton(isTerminalDate: boolean, direction: string): JSX.Element {
    return (
      <button
        title={`Select ${direction}`}
        aria-label={`Select ${direction}`}
        className={`increment-button ${isPlaying || isTerminalDate ? 'is-not-visible' : ''}`}
        onClick={() => incrementDate(direction === forwardDirection)}>
        <span className={`material-symbols-outlined ${direction}-arrow`}>
          {`arrow_${direction}_ios`}
        </span>
      </button>
    )
  }

  function isSameDate(dateOne: Date, dateTwo: Date): boolean {
    return formatDayMonthAndDate(dateOne) === formatDayMonthAndDate(dateTwo);
  }

  function incrementDate(isForwardDirection?: boolean): void {
    const incrementor: number = isForwardDirection ? 1 : -1;
    selectedPhaseDate.setDate(selectedPhaseDate.getDate() + incrementor);
    setSelectedPhaseDate(selectedPhaseDate);
    setIncrementClicks(incrementClicks + 1);
    setIsNewYearsDay(isSameDate(selectedPhaseDate, dateNewYearsDay));
    setIsNewYearsEve(isSameDate(selectedPhaseDate, dateNewYearsEve));
  }

  function onClickNewYearsDay(): void {
    setIsNewYearsDay(true);
    setIsNewYearsEve(false);
    setSelectedPhaseDate(dateNewYearsDay);
  }

  function onClickPlay(): void {
    const daysInTheYear = isLeapYear(selectedYear) ? leapYearLength : commonYearLength;
    setIsPlaying(!isPlaying);
    animateAnnualPhases(daysInTheYear);
  }

  function onClickToday(): void {
    setSelectedPhaseDate(todayDate);
    setIsNewYearsDay(isSameDate(todayDate, dateNewYearsDay));
    setIsNewYearsEve(isSameDate(todayDate, dateNewYearsEve));
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
          {renderIncrementButton(isNewYearsDay, backDirection)}
          <span className="selected-phase-date">
            {formatDayMonthAndDate(selectedPhaseDate)}
          </span>
          {renderIncrementButton(isNewYearsEve, forwardDirection)}
        </div>

        {!isPlaying ?
          <div className="lunar-feature-buttons-container">
            <button
              title="Select New Year's Day"
              aria-label="Select New Year's Day"
              className="lunar-feature-button"
              onClick={() => onClickNewYearsDay()}>
              <span className="material-symbols-outlined">
                sentiment_satisfied
              </span>
            </button>
            <button
              title="Select today's date"
              aria-label="Select today's date"
              className="lunar-feature-button"
              onClick={() => onClickToday()}>
              <span className="material-symbols-outlined">
                sunny
              </span>
            </button>
            <NavLink
              title="Buy the print item"
              aria-label="Buy the print item"
              to={formatItemRoutePath(items.lunarCalendar2023.category, items.lunarCalendar2023.title)}
              className="lunar-feature-link"
            >
              <span className="material-symbols-outlined">
                deployed_code
              </span>
            </NavLink>
          </div>
        : null}

        {!isPlaying && isSameDate(selectedPhaseDate, dateNewYearsDay) ?
          <div className="play-year-button-container">
            <button
              onClick={() => onClickPlay()}>
              {`Play ${selectedYear}`}
            </button>
          </div>
        : null}

        <div>
          {/* <div>
            {`Today is ${formatFullDateAndTime(todayDate)}`}
          </div> */}
          {/* <div>
            {`Today's phase is ${getLunarPhase(todayDate)}`}
          </div> */}
          <div>
            {`This is a ${phasesInfoForUser[getLunarPhase(selectedPhaseDate).slice(0, 2)]} moon`}
          </div>
          {/* <div>
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
