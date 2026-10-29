import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

/* Components */
import MoonSpanClouds from './MoonSpanClouds';
import MoonSpanPhaseWrapper from './MoonSpanPhaseWrapper';
import MoonSpanSkyLines from './MoonSpanSkyLines';

/* Interfaces */
import LunarCalendar from '../interfaces/LunarCalendar'

/* Constants */
import lunarCalendarsInformation from '../constants/lunar-calendars-information';
import svgPaths from '../constants/svg-paths';
import text from '../constants/text-moon-span';
import images from '../constants/images';

/* Helpers */
import digitalLunarCalendar from '../helpers/digital-lunar-calendar';
import formatDateAndTime from '../helpers/format-date-and-time';

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

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [incrementClicks, setIncrementClicks] = useState<number>(0);
  const [selectedPhaseDate, setSelectedPhaseDate] = useState<Date>(easternTimeZoneDate);

  const selectedYear: number = selectedPhaseDate.getFullYear();

  const [isCloudsAnimationVisible, setIsCloudsAnimationVisible] = useState<boolean>(false);
  const [isCrittersAnimationVisible, setIsCrittersAnimationVisible] = useState<boolean>(false);
  const [isRisenOnce, setIsRisenOnce] = useState<boolean>(false);
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

  function onClickCritters(): void {
    setIsCrittersAnimationVisible(!isCrittersAnimationVisible);
    if (!isRisenOnce) {
      setIsRisenOnce(true);
    }
  }

  function onClickStars(): void {
    setIsStarsAnimationVisible(!isStarsAnimationVisible);
    const stars: NodeListOf<Element> = document.querySelectorAll(`.${text.skyStar}`);
    stars.forEach(star => {
      star.classList.toggle(text.twinkle);
    });
  }

  function onClickAnimateCurrentYearPhases(): void {
    setIsNewYearsDay(true);
    setIsNewYearsEve(false);
    setSelectedPhaseDate(dateNewYearsDay);
    playYear();
  }

  function playYear(): void {
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
    const popover = document.getElementById('datesPopover');
    popover?.hidePopover();
  }

  function handleDateChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const dateAsHTMLString: string = event.target.value;
    if (!dateAsHTMLString) return;
    const [year, month, day]: number[] = dateAsHTMLString.split('-').map(Number);
    const dateFormattedAsDate: Date = new Date(year, month - 1, day);
    setSelectedPhaseDate(dateFormattedAsDate);
  };

  function formatDateAsStringForHTMLInput(date: Date): string {
    const month: string = String(date.getMonth() + 1).padStart(2, '0');
    const day: string = String(date.getDate()).padStart(2, '0');
    return `${selectedYear}-${month}-${day}`;
  };

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
        <div className="critters-wrapper">
          <img
            src={images.moonSpace.hippo2026}
            alt="hippopotamus illustration"
            className={`hippo-2026${isCrittersAnimationVisible ? ' is-rising' : ''}${isRisenOnce ? ' is-risen-once' : ''}`}
          />
        </div>
      </div>

      <div className="moon-span-info">
        <div className="moon-span-date-incrementor">
          {renderIncrementorButton(text.backDirection)}
          <div className="moon-span-selected-phase-date">
            <button
              {...({ popovertarget: 'datesPopover' } as React.HTMLAttributes<HTMLButtonElement>)}
              title={text.openDatesPopover}
              aria-label={text.openDatesPopover}
              className={text.lunarFeatureButton}
            >
              {formatDayMonthAndDate(selectedPhaseDate)}
            </button>
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
        <div className="moon-span-animation-controls-wrapper">
          <div className="moon-span-animation-controls">
            <div className="moon-span-animation-controls-title">animation controls</div>
            <div className="moon-span-lunar-feature-buttons-wrapper">
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
              <button
                title={text.selectCrittersAnimation}
                aria-label={text.selectCrittersAnimation}
                className={`${years[selectedYear]} ${text.lunarFeatureButton}${isCrittersAnimationVisible ? ` ${text.selectedActive}` : ''}`}
                onClick={onClickCritters}>
                Critters
              </button>
            </div>
          </div>
        </div>
        : null}
      </div>

      <div
        id="datesPopover"
        className="dates-popover"
        {...({ popover: 'auto' } as React.HTMLAttributes<HTMLDivElement>)}
      >
        <div className="dates-popover-header">
          <button
            name="close"
            className="dates-popover-close"
            onClick={closePopover}>
            <svg
              viewBox="30 0 96 96"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon fill={text.colorSeventyPercentGray} points={svgPaths.closingX}/>
            </svg>
          </button>
        </div>
        <div className="dates-popover-body">
          <div className="date-picker-wrapper">
            <label htmlFor="moon-phase-date-picker" className="bold">Choose a date:</label>
            <input
              type="date"
              id="moon-phase-date-picker"
              min={`${selectedYear}-01-01`}
              max={`${selectedYear}-12-31`}
              value={formatDateAsStringForHTMLInput(selectedPhaseDate)}
              onChange={handleDateChange}
            />
            <button className={text.lunarFeatureButton} onClick={closePopover}>
              Okay
            </button>
          </div>
          <div className="animate-moons-wrapper">
            <span className="bold">
              {selectedYear}'s moons:&nbsp;
            </span>
            <button onClick={onClickAnimateCurrentYearPhases}>
              play now
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default MoonSpan;
