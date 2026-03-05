import { useState } from 'react';

/* Components */
import MoonSpanClouds from './MoonSpanClouds';

/* Interfaces */
import LunarCalendar from '../interfaces/LunarCalendar'

/* Constants */
import lunarCalendarsInformation from '../constants/lunar-calendars-information';

/* Helpers */
import formatDateAndTime from '../helpers/format-date-and-time';

/* Styles */
import '../styles/moon-span.css';

function MoonSpan(): JSX.Element {
  const [isCloudsAnimationVisible, setIsCloudsAnimationVisible] = useState<boolean>(false);
  const breakpointXl: number = 1400;
  const maxSkyLineWidth: number = Math.min(window.innerWidth, breakpointXl);
  const skySegmentsCount: number = Math.floor(maxSkyLineWidth/2 - 8);
  const textMoonSpanSkySegment: string = 'moon-span-sky-segment';
  const textSkyStar: string = 'sky-star';
  const localDate: Date = new Date();
  const easternTimeZoneDate: Date = formatDateAndTime.getEasternTimeZoneDate(localDate);
  const selectedCalendar: LunarCalendar = lunarCalendarsInformation[easternTimeZoneDate.getFullYear()];

  function renderSkySegment(skyLineIndex: number, skySegmentIndex: number): JSX.Element {
    let segmentClass: string = '';
    if (!Math.floor(Math.random() * 60)) {
      const starFadeFrequency: number = Math.floor(Math.random() * 5) + 1;
      segmentClass = `${textSkyStar} ${textSkyStar}-${starFadeFrequency} `;
    }
    return (
      <div
        key={`${textMoonSpanSkySegment}-${skyLineIndex}-${skySegmentIndex}`}
        className={`${segmentClass}${textMoonSpanSkySegment}`}
      >
      </div>
    );
  }

  function renderSkyLine(moonSpanSkyLine: string, index: number): JSX.Element {
    return (
      <div key={`${moonSpanSkyLine}-${index}`} className={moonSpanSkyLine}>
        {Array(skySegmentsCount).fill(index).map(renderSkySegment)}
      </div>
    );
  }

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
        <div className="moon-span-sky-lines">
          {Array(76).fill('moon-span-sky-line').map(renderSkyLine)}
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
