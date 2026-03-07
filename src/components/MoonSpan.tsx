import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

/* Components */
import MoonSpanClouds from './MoonSpanClouds';
import MoonSpanPhaseWrapper from './MoonSpanPhaseWrapper';
import MoonSpanSkyLines from './MoonSpanSkyLines';

/* Interfaces */
import LunarCalendar from '../interfaces/LunarCalendar'

/* Constants */
import items from '../constants/items';
import lunarCalendarsInformation from '../constants/lunar-calendars-information';
import svgPaths from '../constants/svg-paths';
import text from '../constants/text-moon-span';

/* Helpers */
import digitalLunarCalendar from '../helpers/digital-lunar-calendar';
import formatDateAndTime from '../helpers/format-date-and-time';
import formatText from '../helpers/format-text';

/* Styles */
import '../styles/moon-span.css';

function MoonSpan(): JSX.Element {
  const {
    monthJanuary,
    monthDecember,
    dateFirst,
    dateThirtyFirst,
    years,
    phasesInfoForUser,
    getLunarPhase
  } = digitalLunarCalendar;
  const { formatDayMonthAndDate, isSameDate, getEasternTimeZoneDate } = formatDateAndTime;

  const localDate: Date = new Date();
  const easternTimeZoneDate: Date = getEasternTimeZoneDate(localDate);
  const selectedCalendar: LunarCalendar = lunarCalendarsInformation[easternTimeZoneDate.getFullYear()];
  const millisecondsCount: number = 10;

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [incrementClicks, setIncrementClicks] = useState<number>(0);
  const [selectedPhaseDate, setSelectedPhaseDate] = useState<Date>(easternTimeZoneDate);

  const selectedYear: number = selectedPhaseDate.getFullYear();

  const [isCloudsAnimationVisible, setIsCloudsAnimationVisible] = useState<boolean>(false);
  const [isNewYearsDay, setIsNewYearsDay] = useState<boolean>(isSameDate(easternTimeZoneDate, new Date(selectedYear, monthJanuary, dateFirst)));
  const [isNewYearsEve, setIsNewYearsEve] = useState<boolean>(isSameDate(easternTimeZoneDate, new Date(selectedYear, monthDecember, dateThirtyFirst)));
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isStarsAnimationVisible, setIsStarsAnimationVisible] = useState<boolean>(false);

  const dateNewYearsDay: Date = new Date(selectedYear, monthJanuary, dateFirst);
  const dateNewYearsEve: Date = new Date(selectedYear, monthDecember, dateThirtyFirst);

  function renderIncrementorButton(direction: string): JSX.Element {
    const selectDirection: string = `Select ${direction} direction`;
    const isTerminalDate: boolean = (
      direction === text.backDirection && isNewYearsDay ||
      direction === text.forwardDirection && isNewYearsEve
    );
    return (
      <button
        title={selectDirection}
        aria-label={selectDirection}
        className={`moon-span-increment-button ${isPlaying || isTerminalDate ? 'is-not-visible' : ''}`}
        onClick={() => incrementDate(direction === text.forwardDirection)}>
        <svg
          viewBox="0 0 80 80"
          xmlns="http://www.w3.org/2000/svg"
          className={direction}
        >
          <polygon fill={text.colorSeventyPercentGray} points={svgPaths.arrowDirectional}/>
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

  function onClickClouds(): void {
    setIsCloudsAnimationVisible(!isCloudsAnimationVisible);
  }

  function onClickStars(): void {
    setIsStarsAnimationVisible(!isStarsAnimationVisible);
    const stars: NodeListOf<Element> = document.querySelectorAll(`.${text.skyStar}`);
    stars.forEach(star => {
      star.classList.toggle(text.twinkle);
    });
  }

  function onClickSelectNewYearsDay(): void {
    setIsNewYearsDay(true);
    setIsNewYearsEve(false);
    setSelectedPhaseDate(dateNewYearsDay);
  }

  function onClickPlayYear(): void {
    setIsPlaying(!isPlaying);
    startAnnualPhasesAnimation();
    closePopover();
  }

  function onClickToday(): void {
    setSelectedPhaseDate(easternTimeZoneDate);
    setIsNewYearsDay(isSameDate(easternTimeZoneDate, dateNewYearsDay));
    setIsNewYearsEve(isSameDate(easternTimeZoneDate, dateNewYearsEve));
  }

  function closePopover(): void {
    const popover = document.getElementById('infoPopup');
    popover?.hidePopover();
  }

  const startAnnualPhasesAnimation = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setSelectedPhaseDate((previousDate: Date) => {
        const nextDay = new Date(previousDate);
        nextDay.setDate(nextDay.getDate() + 1);
        if (nextDay.getFullYear() > previousDate.getFullYear()) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
          setIsPlaying(false);
          setIsNewYearsDay(false);
          setIsNewYearsEve(true);
          return previousDate;
        }
        return nextDay;
      });
    }, millisecondsCount);
  };

  const stopAnnualPhasesAnimation = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <div className="moon-span">

      <div className="moon-span-scene">
        <MoonSpanSkyLines />
        <MoonSpanPhaseWrapper selectedPhaseDate={selectedPhaseDate} selectedCalendar={selectedCalendar} />
        <MoonSpanClouds calendar={selectedCalendar} isVisible={isCloudsAnimationVisible} />
      </div>

      <div className="moon-span-info">
        <div className="moon-span-date-incrementor">
          {renderIncrementorButton(text.backDirection)}
          <div className="moon-span-selected-phase-date">
            <div className="moon-span-day-month-date">
              {formatDayMonthAndDate(selectedPhaseDate)}
            </div>
            <div className="moon-span-time-zone">
              (Eastern Time Zone)
            </div>
          </div>
          {renderIncrementorButton(text.forwardDirection)}
        </div>
        <div className="moon-span-info-for-display">
          {`It's a ${phasesInfoForUser[getLunarPhase(selectedPhaseDate).slice(0, 2)]} moon.`}
        </div>
        {!isPlaying ?
          <div className="moon-span-lunar-feature-buttons-container">
            <button
              {...({ popovertarget: 'infoPopup' } as React.HTMLAttributes<HTMLButtonElement>)}
              title={text.openInfoModal}
              aria-label={text.openInfoModal}
              className={text.lunarFeatureButton}
            >
              Info
            </button>
            <button
              title={text.selectCloudsAnimation}
              aria-label={text.selectCloudsAnimation}
              className={`${years[selectedYear]} ${text.lunarFeatureButton}${isCloudsAnimationVisible ? ` ${text.selectedActive}` : ''}`}
              onClick={onClickClouds}>
              Clouds
            </button>
            <button
              title={text.selectStarsAnimation}
              aria-label={text.selectStarsAnimation}
              className={`${years[selectedYear]} ${text.lunarFeatureButton}${isStarsAnimationVisible ? ` ${text.selectedActive}` : ''}`}
              onClick={onClickStars}>
              Stars
            </button>
            <NavLink
              title={text.goToPrintEdition}
              aria-label={text.goToPrintEdition}
              className={text.lunarFeatureButton}
              to={formatText.formatItemRoutePath(items.lunarCalendar2026.category, items.lunarCalendar2026.title)}
            >
              Chart
            </NavLink>
          </div>
        : null}
      </div>

      <div
        id="infoPopup"
        className="info-popover"
        {...({ popover: 'auto' } as React.HTMLAttributes<HTMLDivElement>)}
      >
        <div className="info-popover-header">
          <button
            name="close"
            className="info-popover-close"
            onClick={closePopover}>
            <svg
              viewBox="30 0 96 96"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon fill={text.colorSeventyPercentGray} points={svgPaths.closingX}/>
            </svg>
          </button>
        </div>
        <div className="info-popover-body">
          {isNewYearsDay ?
            <div className="info-popover-text">
              Play all the moon phases for {selectedYear} as an animated sequence.
            </div> :
            <div className="info-popover-text">
              <span className ="ital">Moon Space</span> is a {selectedYear} digital lunar calendar.
              Select New Year's Day for the option to play all the year's moon phases.
            </div>
          }
          <div className="info-popover-button-container">
            {isNewYearsDay ?
              <button
                className={text.lunarFeatureButton}
                onClick={onClickPlayYear}
              >
                Play {selectedYear}'s phases
              </button> :
              <button
                className={text.lunarFeatureButton}
                onClick={onClickSelectNewYearsDay}
              >
                Select New Year's Day
              </button>
            }
            <button
              title={text.selectToday}
              aria-label={text.selectToday}
              className={text.lunarFeatureButton}
              onClick={onClickToday}
            >
              Select Today
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default MoonSpan;
