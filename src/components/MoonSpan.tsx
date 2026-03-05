import { useState } from 'react';

/* Components */
import MoonSpanClouds from './MoonSpanClouds';
import MoonSpanSkyLines from './MoonSpanSkyLines';

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
  const textSkyStar: string = 'sky-star';
  const localDate: Date = new Date();
  const easternTimeZoneDate: Date = formatDateAndTime.getEasternTimeZoneDate(localDate);
  const selectedCalendar: LunarCalendar = lunarCalendarsInformation[easternTimeZoneDate.getFullYear()];

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
