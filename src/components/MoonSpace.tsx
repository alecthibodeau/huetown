import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

/* Interfaces */
import LunarCalendar from '../interfaces/LunarCalendar';

/* Constants */
import items from '../constants/items';
import lunarCalendarsInformation from '../constants/lunar-calendars-information';
import lunarPhasesSVGPaths from '../constants/lunar-phases-svg-paths';

/* Helpers */
import digitalLunarCalendar from '../helpers/digital-lunar-calendar';
import formatDateAndTime from '../helpers/format-date-and-time';
import formatText from '../helpers/format-text';

function MoonSpace(): JSX.Element {
  const {
    monthJanuary,
    monthDecember,
    dateFirst,
    dateThirtyFirst,
    commonYearLength,
    leapYearLength,
    phasesInfoForUser,
    isLeapYear,
    getLunarPhase,
    getLunarPhaseCategory,
  } = digitalLunarCalendar;

  const { formatDayMonthAndDate, isSameDate } = formatDateAndTime;
  const { formatItemRoutePath } = formatText;

  const [todayDate, setTodayDate] = useState<Date>(new Date());
  const [selectedCalendar, setSelectedCalendar] = useState<LunarCalendar>(lunarCalendarsInformation[todayDate.getFullYear()]);
  const [selectedPhaseDate, setSelectedPhaseDate] = useState<Date>(new Date());
  const [selectedYear, setSelectedYear] = useState<number>(0);
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

  useEffect(() => {
    const interval = setInterval(() => setTodayDate(new Date()), milliseconds);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setSelectedYear(selectedPhaseDate.getFullYear());
    setSelectedCalendar(lunarCalendarsInformation[selectedYear]);
  }, [selectedPhaseDate, selectedYear]);

  function renderSkyLine(skyLine: string, index: number): JSX.Element {
    return (
      <div key={`${skyLine}-${index}`}></div>
    )
  }

  function renderIncrementorButton(isTerminalDate: boolean, direction: string): JSX.Element {
    return (
      <button
        title={`Select ${direction}`}
        aria-label={`Select ${direction}`}
        className={`increment-button ${isPlaying || isTerminalDate ? 'is-not-visible' : ''}`}
        onClick={() => incrementDate(direction === forwardDirection)}>
        {direction === backDirection ? <span>&#8592;</span> : <span>&#8594;</span>}
      </button>
    )
  }

  function incrementDate(isForwardDirection?: boolean): void {
    const incrementor: number = isForwardDirection ? 1 : -1;
    selectedPhaseDate.setDate(selectedPhaseDate.getDate() + incrementor);
    setSelectedPhaseDate(selectedPhaseDate);
    setIncrementClicks(incrementClicks + 1);
    setIsNewYearsDay(isSameDate(selectedPhaseDate, dateNewYearsDay));
    setIsNewYearsEve(isSameDate(selectedPhaseDate, dateNewYearsEve));
  }

  function onClickStart(): void {
    setIsNewYearsDay(true);
    setIsNewYearsEve(false);
    setSelectedPhaseDate(dateNewYearsDay);
  }

  function onClickPlayYear(): void {
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
            viewBox="-13 -13 50 50"
            width="280px"
            height="280px"
            className={getLunarPhaseCategory(getLunarPhase(selectedPhaseDate))}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <circle
              fill={selectedCalendar?.backgroundColor}
              cx="12"
              cy="12"
              r="12.25"
            />
            <path
              d={lunarPhasesSVGPaths[getLunarPhase(selectedPhaseDate)]}
              fill={colorWhite}
              fillOpacity="80%"
            />
          </svg>
        </div>
        <div className="cloud"></div>
        <div className="border-ornament"></div>
      </div>
      <div className="sky-lines">
        {Array(76).fill('sky-line').map(renderSkyLine)}
      </div>
      <div className="moon-info">

        <div className="date-incrementor">
          {renderIncrementorButton(isNewYearsDay, backDirection)}
          <span className="selected-phase-date">
            {formatDayMonthAndDate(selectedPhaseDate)}
          </span>
          {renderIncrementorButton(isNewYearsEve, forwardDirection)}
        </div>

        {!isPlaying ?
          <div className="lunar-feature-buttons-container">
            <button
              title="Select start of year"
              aria-label="Select start of year"
              className="lunar-feature-button"
              onClick={() => onClickStart()}>
              Start
            </button>
            <button
              title="Select today"
              aria-label="Select today"
              className="lunar-feature-button"
              onClick={() => onClickToday()}>
              Today
            </button>
            <NavLink
              title="Go to the print edition"
              aria-label="Go to the print edition"
              to={formatItemRoutePath(items.lunarCalendar2023.category, items.lunarCalendar2023.title)}
              className="lunar-feature-link"
            >
              Print
            </NavLink>
          </div>
        : null}

        {!isPlaying && isSameDate(selectedPhaseDate, dateNewYearsDay) ?
          <div className="play-year-button-container">
            <button className="lunar-feature-button"
              onClick={() => onClickPlayYear()}>
              {`Play ${selectedYear}`}
            </button>
          </div>
        : null}
      </div>
    </div>
  );
}

export default MoonSpace;
