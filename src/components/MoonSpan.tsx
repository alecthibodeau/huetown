import { useState } from 'react';

/* Components */
import MoonSpanClouds from './MoonSpanClouds';
import MoonSpanSkyLines from './MoonSpanSkyLines';

/* Interfaces */
import LunarCalendar from '../interfaces/LunarCalendar'

/* Constants */
import lunarCalendarsInformation from '../constants/lunar-calendars-information';
import svgPaths from '../constants/svg-paths';

/* Helpers */
import digitalLunarCalendar from '../helpers/digital-lunar-calendar';
import formatDateAndTime from '../helpers/format-date-and-time';

/* Styles */
import '../styles/moon-span.css';

function MoonSpan(): JSX.Element {
  const {
    getLunarPhase,
    getLunarPhaseCategory
  } = digitalLunarCalendar;
  const { getEasternTimeZoneDate } = formatDateAndTime;
  const { lunarPhasesSVGPaths } = svgPaths;
  const colorWhite: string = '#fff';
  const textSkyStar: string = 'sky-star';
  const localDate: Date = new Date();
  const easternTimeZoneDate: Date = getEasternTimeZoneDate(localDate);
  const selectedCalendar: LunarCalendar = lunarCalendarsInformation[easternTimeZoneDate.getFullYear()];

  const [isCloudsAnimationVisible, setIsCloudsAnimationVisible] = useState<boolean>(false);
  const [selectedPhaseDate, setSelectedPhaseDate] = useState<Date>(getEasternTimeZoneDate(localDate));

  function onClickClouds(): void {
    setIsCloudsAnimationVisible(!isCloudsAnimationVisible);
  }

  function onClickStars(): void {
    const stars: NodeListOf<Element> = document.querySelectorAll(`.${textSkyStar}`);
    stars.forEach(star => {
      star.classList.toggle('twinkle');
    });
  }

  return (
    <div className="moon-span">
      <div className="moon-span-scene">
        <MoonSpanSkyLines />
        <div className="moon-span-phase-container">
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
        <MoonSpanClouds calendar={selectedCalendar} isVisible={isCloudsAnimationVisible} />
      </div>
      <button
        {...({ popovertarget: 'infoPopup' } as React.HTMLAttributes<HTMLButtonElement>)}
      >
        Info
      </button>
      <button onClick={onClickClouds}>Clouds</button>
      <button onClick={onClickStars}>Stars</button>
      <div
        id="infoPopup"
        {...({ popover: 'auto' } as React.HTMLAttributes<HTMLDivElement>)}
      >
        INFO POPOVER
      </div>
    </div>
  );
}

export default MoonSpan;
