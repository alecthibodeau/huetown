import { Link } from 'react-router-dom';

/* Interfaces */
import ItemProps from '../interfaces/ItemProps';
import LunarPhase from '../interfaces/LunarPhase';
import Thumbnail from '../interfaces/Thumbnail';
import ThumbnailsGroup from '../interfaces/ThumbnailsGroup';

/* Constants */
import images from '../constants/images';
import lunarCalendars from '../constants/lunar-calendars';
import textFormatting from '../helpers/text-formatting';

function LunarCalendarInfo(props: ItemProps): JSX.Element {
  const isCurrentLunarCalendar: boolean = props.lunarCalendarYear === 2023;
  const linkSpacePony: string = '/items/prints/space-pony';

  function renderlunarPhase(phase: LunarPhase, index: number): JSX.Element {
    const moonTextFormatted: string = `${phase.name} moon`;
    return (
      <div
        key={`${textFormatting.formatLettersAndNumbers(phase.name)}-moon-${index}`}
        className="phase-info"
      >
        <img src={phase.image} alt={moonTextFormatted}/>
        <div className="phase-text">
          {moonTextFormatted}
        </div>
      </div>
    )
  }

  function renderThumbnailImage(thumbnail: Thumbnail): JSX.Element {
    return <img src={thumbnail.image} alt={`${thumbnail.label} thumbnail`} />;
  }

  function renderThumbnail(thumbnail: Thumbnail, index: number): JSX.Element {
    return (
      <div
        key={`thumbnail${thumbnail.label.replace(textFormatting.allSpaces, '')}-${index}`}
        className="thumbnail"
      >
        {
          +thumbnail.label.slice(0, 4) > 2016
          ? <Link to={thumbnail.link}>{renderThumbnailImage(thumbnail)}</Link>
          : <a href={thumbnail.link}>{renderThumbnailImage(thumbnail)}</a>
        }
        <div className="label">{thumbnail.label}</div>
      </div>
    )
  }

  return (
    <>
      <div className="lunar-calendar-description">
        <div className="lunar-calendar-paragraph">
          <span className="lunar-calendar-title ital">{props.title}</span> is a letterpress-printed lunar calendar designed and drawn by Alec Thibodeau (me!),
          chronicling all phases of the moon for <span className="lunar-calendar-year">{props.lunarCalendarYear}</span>.
          From an edition of <span className="print-edition">{props.printEdition}</span> prints <span className="lunar-calendar-title ital">{props.title}</span> continues Alec's ongoing lunar calendar series,
          which features ornate illustrations framing an annual cycle of moon shapes.
          As with each of Alec's previous lunar calendars this piece measures 19" x 11.75" (a golden rectangle) and is expertly printed by Dan Wood
          and his team at <a className="text-link" href="https://www.dwriletterpress.net">DWRI&nbsp;Letterpress</a>.
        </div>
        <div className="lunar-calendar-paragraph">
          The <span className="lunar-calendar-year">{props.lunarCalendarYear}</span> lunar calendar comprises new drawings and year-specific lunar phase information.
          Each calendar is printed on <span className="lunar-calendar-paper-info">{props.lunarCalendarPaper}</span>, blind-debossed with Alec's name and the print shop's name &mdash; and hand numbered and signed by Alec. Each calendar ships with an accompanying information sheet inside a flat, sturdy box.
        </div>
        <div className="lunar-calendar-paragraph">
          The calendar's lunar phase chart is calibrated for any location in the Eastern Time Zone and is accurate to within a day for anywhere in the Northern Hemisphere. The chart also matches lunar cycles in the Southern Hemisphere: but with inverted shapes. <span className="lunar-calendar-location">{props.lunarCalendarLocation}</span>
        </div>
        <div className="lunar-calendar-paragraph">
          Custom moon illustrations portray all principal lunar phases (New Moon, First Quarter Moon, Full Moon and Third Quarter Moon) plus all intermediate crescent and gibbous phases. For months with less than 31 days, drawings of clouds occupy the extra spaces. <a className="text-link" href="#featureImage">Order now.</a>
        </div>
        <div className="lunar-phases" id="lunarPhases">
          {lunarCalendars.phases.map(renderlunarPhase)}
        </div>
      </div>
      {isCurrentLunarCalendar ?
        <div className="lunar-calendar-timely-info">
          <div>
            <p>
              Follow <a className="text-link" href="https://www.instagram.com/huetown/">@huetown</a> on Instagram to see this print's letterpress production in action.
              And join the <a className="text-link" href="about.html">email list</a> to learn when other works are available.
            </p>
            <p>
              Each lunar calendar preordered by November 25th, 2022 included a <Link className="text-link" to={linkSpacePony}><span className="ital">Space Pony</span></Link> letterpress print:
            </p>
          </div>
          <div className="lunar-calendar-accompanying-item">
            <Link to={linkSpacePony}>
              <img src={images.lunarCalendars.spacePonyPreorder} alt="Space Pony print" />
            </Link>
          </div>
        </div>
      : null}
      <div className="lunar-calendar-thumbnails">
        {lunarCalendars.thumbnails.map(
          (group: ThumbnailsGroup, index: number) => {
            return (
              <div key={`${group.status}-${index}`} className="thumbnails-group">
                <div className="thumbnails-title">
                  {group.status} alec thibodeau lunar&nbsp;calendars
                </div>
                <div className="thumbnails">
                  {group.thumbnails.map(renderThumbnail)}
                </div>
              </div>
            )
          }
        )}
      </div>
    </>
  );
}

export default LunarCalendarInfo;
