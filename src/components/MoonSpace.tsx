import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

/* Interfaces */
import LunarCalendar from '../interfaces/LunarCalendar';

/* Constants */
import clouds from '../constants/clouds-svg-paths';
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

  const { formatDayMonthAndDate, isSameDate, getEasternTimeZoneDate } = formatDateAndTime;
  const { formatItemRoutePath } = formatText;

  const [localDate, setLocalDate] = useState<Date>(new Date());
  const [easternTimeZoneDate, setEasternTimeZoneDate] = useState<Date>(getEasternTimeZoneDate(localDate));
  const [selectedCalendar, setSelectedCalendar] = useState<LunarCalendar>(lunarCalendarsInformation[easternTimeZoneDate.getFullYear()]);
  const [selectedPhaseDate, setSelectedPhaseDate] = useState<Date>(getEasternTimeZoneDate(localDate));
  const [selectedYear, setSelectedYear] = useState<number>(0);
  const [incrementClicks, setIncrementClicks] = useState<number>(0);
  const [isCloudsAnimationVisible, setIsCloudsAnimationVisible] = useState<boolean>(false);
  const [isNewYearsDay, setIsNewYearsDay] = useState<boolean>(easternTimeZoneDate === (new Date(selectedYear, monthJanuary, dateFirst)));
  const [isNewYearsEve, setIsNewYearsEve] = useState<boolean>(easternTimeZoneDate === (new Date(selectedYear, monthDecember, dateThirtyFirst)));
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const dateNewYearsDay = new Date(selectedYear, monthJanuary, dateFirst);
  const dateNewYearsEve = new Date(selectedYear, monthDecember, dateThirtyFirst);

  const colorWhite: string = '#fff';
  const milliseconds: number = 10;
  const backDirection: string = 'back';
  const forwardDirection: string = 'forward';
  const lunarFeatureButton: string = 'lunar-feature-button';

  useEffect(() => {
    const interval = setInterval(() => updateDates(), milliseconds);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setSelectedYear(selectedPhaseDate.getFullYear());
    setSelectedCalendar(lunarCalendarsInformation[selectedYear]);
  }, [selectedPhaseDate, selectedYear]);

  function updateDates(): void {
    setLocalDate(new Date());
    setEasternTimeZoneDate(getEasternTimeZoneDate(localDate));
  }

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
    setSelectedPhaseDate(easternTimeZoneDate);
    setIsNewYearsDay(isSameDate(easternTimeZoneDate, dateNewYearsDay));
    setIsNewYearsEve(isSameDate(easternTimeZoneDate, dateNewYearsEve));
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
        <svg
          className={`cloud cloud-one ${isCloudsAnimationVisible ? '' : 'is-not-visible'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64.36 23.07"
        >
          <path fill={selectedCalendar?.backgroundColor} d={clouds.one}/>
        </svg>
        <svg
          className={`cloud cloud-two ${isCloudsAnimationVisible ? '' : 'is-not-visible'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 69.47 26.19"
        >
          <path fill={selectedCalendar?.backgroundColor} d={clouds.two}/>
        </svg>
        <svg
          className={`cloud cloud-three ${isCloudsAnimationVisible ? '' : 'is-not-visible'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 79.76 40.49"
        >
          <path fill={selectedCalendar?.backgroundColor} d={clouds.three}/>
        </svg>
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
              className={lunarFeatureButton}
              onClick={() => onClickStart()}>
              Start
            </button>
            <button
              title="Select today"
              aria-label="Select today"
              className={lunarFeatureButton}
              onClick={() => onClickToday()}>
              Today
            </button>
            <button
              title="Select clouds animation"
              aria-label="Select clouds animation"
              className={`${lunarFeatureButton}${isCloudsAnimationVisible ? ' selected' : ''}`}
              onClick={() => setIsCloudsAnimationVisible(!isCloudsAnimationVisible)}>
              Clouds
            </button>
            <NavLink
              title="Go to the print edition"
              aria-label="Go to the print edition"
              to={formatItemRoutePath(items.lunarCalendar2023.category, items.lunarCalendar2023.title)}
              className={lunarFeatureButton}
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
