import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

/* Components */
import MoonCloud from './MoonCloud';
import News from './News';

/* Interfaces */
import LunarCalendar from '../interfaces/LunarCalendar';
import MoonCloudSVG from '../interfaces/MoonCloudSVG';

/* Constants */
import items from '../constants/items';
import lunarCalendarsInformation from '../constants/lunar-calendars-information';
import svgPaths from '../constants/svg-paths';

/* Helpers */
import digitalLunarCalendar from '../helpers/digital-lunar-calendar';
import formatDateAndTime from '../helpers/format-date-and-time';
import formatText from '../helpers/format-text';

function MoonSpace(props: { isShopActive: boolean }): JSX.Element {
  const {
    monthJanuary,
    monthDecember,
    dateFirst,
    dateThirtyFirst,
    commonYearLength,
    leapYearLength,
    years,
    phasesInfoForUser,
    isLeapYear,
    getLunarPhase,
    getLunarPhaseCategory
  } = digitalLunarCalendar;
  const { formatDayMonthAndDate, isSameDate, getEasternTimeZoneDate } = formatDateAndTime;
  const { formatItemRoutePath } = formatText;
  const { arrowDirectional, closingX, lunarPhasesSVGPaths, moonClouds } = svgPaths;

  const [localDate, setLocalDate] = useState<Date>(new Date());
  const [easternTimeZoneDate, setEasternTimeZoneDate] = useState<Date>(getEasternTimeZoneDate(localDate));
  const [selectedCalendar, setSelectedCalendar] = useState<LunarCalendar>(lunarCalendarsInformation[easternTimeZoneDate.getFullYear()]);
  const [selectedPhaseDate, setSelectedPhaseDate] = useState<Date>(getEasternTimeZoneDate(localDate));
  const [selectedYear, setSelectedYear] = useState<number>(selectedPhaseDate.getFullYear());
  const [incrementClicks, setIncrementClicks] = useState<number>(0);
  const [isCloudsAnimationVisible, setIsCloudsAnimationVisible] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isNewYearsDay, setIsNewYearsDay] = useState<boolean>(isSameDate(easternTimeZoneDate, new Date(selectedYear, monthJanuary, dateFirst)));
  const [isNewYearsEve, setIsNewYearsEve] = useState<boolean>(isSameDate(easternTimeZoneDate, new Date(selectedYear, monthDecember, dateThirtyFirst)));
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const buttonRef: React.MutableRefObject<HTMLButtonElement | null> = useRef<HTMLButtonElement | null>(null);

  const dateNewYearsDay: Date = new Date(selectedYear, monthJanuary, dateFirst);
  const dateNewYearsEve: Date = new Date(selectedYear, monthDecember, dateThirtyFirst);

  const isLatestReleaseCurrentYear: boolean = selectedYear === 2025;
  const isNewsInMoonSpace: boolean = false;
  const millisecondsCount: number = 10;

  const colorWhite: string = '#fff';
  const colorSeventyPercentGray: string = '#4d4d4d';
  const keydown = 'keydown';
  const backDirection: string = 'back';
  const forwardDirection: string = 'forward';
  const lunarFeatureButton: string = 'lunar-feature-button';
  const selectInfo: string = 'Select info';
  const selectToday: string = 'Select today';
  const selectCloudsAnimation: string = 'Select clouds animation';
  const goToPrintEdition: string = 'Go to the print edition of the lunar calendar chart';

  useEffect(() => {
    const interval = setInterval(() => {
      setLocalDate(new Date());
      setEasternTimeZoneDate(getEasternTimeZoneDate(localDate));
    }, millisecondsCount);
    return () => clearInterval(interval);
  }, [localDate, getEasternTimeZoneDate]);

  useEffect(() => {
    setSelectedYear(selectedPhaseDate.getFullYear());
    setSelectedCalendar(lunarCalendarsInformation[selectedYear]);
  }, [selectedPhaseDate, selectedYear]);

  useEffect(() => {
    function keyDownHandler({ key }: KeyboardEvent): void {
      if (key === 'Escape' && isModalVisible) setIsModalVisible(false);
    }
    window.addEventListener(keydown, keyDownHandler);
    return function cleanupEventListener() {
      window.removeEventListener(keydown, keyDownHandler);
    };
  }, [isModalVisible]);

  function renderSkyLine(skyLine: string, index: number): JSX.Element {
    return (
      <div key={`${skyLine}-${index}`} className={years[selectedYear]}></div>
    );
  }

  function renderMoonCloud(moonCloudSVG: MoonCloudSVG, index: number): JSX.Element {
    return (
      <MoonCloud
        key={`moon-cloud-${index}`}
        calendar={selectedCalendar}
        isVisible={isCloudsAnimationVisible}
        svg={moonCloudSVG}
      />
    );
  }

  function renderIncrementorButton(isTerminalDate: boolean, direction: string): JSX.Element {
    const selectDirection: string = `Select ${direction} direction`;
    return (
      <button
        title={selectDirection}
        aria-label={selectDirection}
        className={`increment-button ${isPlaying || isTerminalDate ? 'is-not-visible' : ''}`}
        onClick={() => incrementDate(direction === forwardDirection)}>
        <svg
          viewBox="0 0 80 80"
          xmlns="http://www.w3.org/2000/svg"
          className={direction}
        >
          <polygon fill={colorSeventyPercentGray} points={arrowDirectional}/>
        </svg>
      </button>
    );
  }

  function incrementDate(isForwardDirection?: boolean): void {
    const incrementor: number = isForwardDirection ? 1 : -1;
    selectedPhaseDate.setDate(selectedPhaseDate.getDate() + incrementor);
    setSelectedPhaseDate(selectedPhaseDate);
    setIncrementClicks(incrementClicks + 1);
    setIsNewYearsDay(isSameDate(selectedPhaseDate, dateNewYearsDay));
    setIsNewYearsEve(isSameDate(selectedPhaseDate, dateNewYearsEve));
  }

  function setButtonRef(element: HTMLButtonElement): void {
    if (element) {
      buttonRef.current = element;
      buttonRef.current.focus();
    }
  };

  function onClickInfo(): void {
    setIsModalVisible(!isModalVisible);
  }

  function onClickSelectNewYearsDay(): void {
    setIsNewYearsDay(true);
    setIsNewYearsEve(false);
    setSelectedPhaseDate(dateNewYearsDay);
  }

  function onClickPlayYear(): void {
    const daysInTheYear = isLeapYear(selectedYear) ? leapYearLength : commonYearLength;
    setIsModalVisible(false);
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
      await delayTime(millisecondsCount);
      incrementDate(true);
    }
    setIsPlaying(false);
    setIsNewYearsDay(false);
    setIsNewYearsEve(true);
  }

  return (
    <div className="moon-space">
      {isNewsInMoonSpace ?
        <div className="news-container">
          <News />
        </div> :
      null}
      <div className={`${years[selectedYear]} moon-image-container`}>
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
        {moonClouds.map(renderMoonCloud)}
      </div>
      <div className="sky-lines">
        {Array(76).fill('sky-line').map(renderSkyLine)}
      </div>
      <div className="moon-info">

        <div className="date-incrementor">
          {renderIncrementorButton(isNewYearsDay, backDirection)}
          <div className="selected-phase-date">
            <div className="day-month-date">
              {formatDayMonthAndDate(selectedPhaseDate)}
            </div>
            <div className="time-zone">
              (Eastern Time Zone)
            </div>
          </div>
          {renderIncrementorButton(isNewYearsEve, forwardDirection)}
        </div>

        <div className="info-for-display">
          {`It's a ${phasesInfoForUser[getLunarPhase(selectedPhaseDate).slice(0, 2)]} moon.`}
        </div>

        {!isPlaying ?
          <div className="lunar-feature-buttons-container">
            <button
              title={selectInfo}
              aria-label={selectInfo}
              className={lunarFeatureButton}
              onClick={onClickInfo}>
              Info
            </button>
            <button
              title={selectToday}
              aria-label={selectToday}
              className={lunarFeatureButton}
              onClick={onClickToday}>
              Today
            </button>
            <button
              title={selectCloudsAnimation}
              aria-label={selectCloudsAnimation}
              className={`${years[selectedYear]} ${lunarFeatureButton}${isCloudsAnimationVisible ? ' selected active' : ''}`}
              onClick={() => setIsCloudsAnimationVisible(!isCloudsAnimationVisible)}>
              Clouds
            </button>
            {isLatestReleaseCurrentYear && props.isShopActive ?
              <NavLink
                title={goToPrintEdition}
                aria-label={goToPrintEdition}
                to={formatItemRoutePath(items.lunarCalendar2024.category, items.lunarCalendar2024.title)}
                className={lunarFeatureButton}
              >
                Chart
              </NavLink>
            : null}
          </div>
        : null}
      </div>

      {isModalVisible ?
        <div className="info-modal-container">
          <div className="info-modal">
            <div className="info-modal-header">
              <button
                name="close"
                className="info-modal-close"
                onClick={() => setIsModalVisible(false)}>
                <svg
                  viewBox="30 0 96 96"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon fill={colorSeventyPercentGray} points={closingX}/>
                </svg>
              </button>
            </div>
            <div className="info-modal-body">
              {isNewYearsDay ?
                <div className="info-modal-play-year-text">
                  Play all the moon phases for {selectedYear} as an animated sequence.
                </div> :
                <div>
                  This is a {selectedYear} digital lunar calendar.
                  Select New Year's Day for the option to play all moon phases for {selectedYear}.
                </div>
              }
              <div className="info-modal-button-container">
                {isNewYearsDay ?
                  <button
                    ref={setButtonRef}
                    className={lunarFeatureButton}
                    onClick={onClickPlayYear}>
                    Play {selectedYear}'s phases
                  </button> :
                  <button
                    ref={setButtonRef}
                    className={lunarFeatureButton}
                    onClick={onClickSelectNewYearsDay}>
                    Select New Year's Day
                  </button>
                }
              </div>
            </div>
          </div>
        </div>
      : null}
    </div>
  );
}

export default MoonSpace;
