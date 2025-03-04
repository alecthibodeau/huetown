import { Link } from 'react-router-dom';

/* Interfaces */
import ItemProps from '../interfaces/ItemProps';
import LunarPhase from '../interfaces/ItemLunarPhaseKey';
import Thumbnail from '../interfaces/Thumbnail';
import ThumbnailsGroup from '../interfaces/ThumbnailsGroup';

/* Components */
import News from './News';

/* Constants */
import formatText from '../helpers/format-text';
import images from '../constants/images';
import itemsLunarCalendars from '../constants/items-lunar-calendars';
import itemsSpecificInfo from '../constants/items-specific-info';

function ItemLunarCalendarInfo(props: ItemProps): JSX.Element {
  const { title, lunarCalendarYear, printEdition, lunarCalendarPaper, lunarCalendarLocation } = props;
  const { latestLunarCalendarId, preorderId } = itemsSpecificInfo;
  const isNewsInInfo: boolean = false;
  const isExtraPrintDisplayed: boolean = false;
  const isPreorder: boolean = props.id === preorderId;
  const isLatestLunarCalendar: boolean = props.id === latestLunarCalendarId;
  const isThumbnailsGroupDisplayed: boolean = false;

  function renderlunarPhase(phase: LunarPhase, index: number): JSX.Element {
    const moonTextFormatted: string = `${phase.name} moon`;
    return (
      <div
        key={`${formatText.formatLettersAndNumbers(phase.name)}-moon-${index}`}
        className="phase-info"
      >
        <img src={phase.image} alt={moonTextFormatted}/>
        <div className="phase-text">
          {moonTextFormatted}
        </div>
      </div>
    )
  }

  function scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  function renderThumbnailImage(thumbnail: Thumbnail): JSX.Element {
    return <img src={thumbnail.image} alt={`${thumbnail.label} thumbnail`} />;
  }

  function renderThumbnailLink(
    thumbnail: Thumbnail,
    isAvailable: boolean,
    isPreorderThumbnail: boolean
  ): JSX.Element {
    return (
      isAvailable
      ? <Link
          to={isPreorderThumbnail ? '/' : thumbnail.link}
          onClick={isPreorder && isPreorderThumbnail ? scrollToTop : () => {}}
        >
          {renderThumbnailImage(thumbnail)}
        </Link>
      : <a href={thumbnail.link}>{renderThumbnailImage(thumbnail)}</a>
    )
  }

  function renderThumbnail(thumbnail: Thumbnail, index: number): JSX.Element {
    const isPreorderThumbnail: boolean = !!thumbnail.isPreorder;
    return (
      <div
        key={`thumbnail${thumbnail.label.replace(formatText.allSpaces, '')}-${index}`}
        className="thumbnail"
      >
        {renderThumbnailLink(thumbnail, +thumbnail.label.slice(0, 4) > 2016, isPreorderThumbnail)}
        <div className={`label${isPreorderThumbnail ? ' item-preorder-text' : ''}`}>
          {thumbnail.label}
        </div>
      </div>
    )
  }

  function renderSpan(content: string | number | undefined, isTitle?: boolean): JSX.Element {
    return (
      <span className={isTitle ? 'ital' : undefined}>{content}</span>
    );
  }

  return (
    <>
      <div className="lunar-calendar-description">
        <p>
          {renderSpan(title, true)} is a letterpress-printed lunar calendar
          designed and drawn by Alec Thibodeau (me!), chronicling all phases of
          the moon for {renderSpan(lunarCalendarYear)}. From an edition
          of {renderSpan(printEdition)} prints {renderSpan(title, true)} continues
          Alec's ongoing lunar calendar series, which features ornate illustrations
          framing an annual cycle of moon shapes. As with each of Alec's previous
          lunar calendars this piece measures 19" x 11.75" (a golden rectangle)
          and is expertly printed by Dan Wood and his team
          at <a className="text-link" href="https://www.dwriletterpress.net">
          DWRI&nbsp;Letterpress</a>.
        </p>
        <p>
          The {renderSpan(lunarCalendarYear)} lunar calendar comprises new drawings
          and year-specific lunar phase information. Each calendar is printed
          on {renderSpan(lunarCalendarPaper)}, blind-debossed with Alec's name and
          the print shop's name &mdash; and hand numbered and signed by Alec. Each
          calendar <Link className="text-link" to="/about#shipping">ships</Link> with
          an accompanying information sheet inside a flat, sturdy box.
        </p>
        <p>
          The calendar's lunar phase chart is calibrated for any location in the
          Eastern Time Zone and is accurate to within a day for anywhere in the
          Northern Hemisphere. The chart also matches lunar cycles in the Southern
          Hemisphere: but with inverted shapes. {renderSpan(lunarCalendarLocation)}
        </p>
        <p>
          Custom moon illustrations portray all principal lunar phases (New Moon,
          First Quarter Moon, Full Moon and Third Quarter Moon) plus all
          intermediate crescent and gibbous phases. For months with less than
          31 days, drawings of clouds occupy the extra
          spaces. <a className="text-link" href="#featureImageNavigation">Order now</a>.
        </p>
        <div className="lunar-phases">
          {itemsLunarCalendars.phases.map(renderlunarPhase)}
        </div>
        <ul>
          {isNewsInInfo ?
            <li>
              <News />
            </li>
          : null}
          <li>
            <span className="bold">Play</span>: Interact with the current year's
            accompanying <Link className="text-link" to="/moon-space">digital
            lunar calendar</Link>
          </li>
          {isLatestLunarCalendar && isExtraPrintDisplayed ?
            <li>
              <span className="bold">Extra</span>: Each lunar calendar preordered early included
              a <Link className="text-link" to="/shop/prints/tarsier-trail">Tarsier
              Trail</Link> letterpress print&hellip;
            </li>
          : null}
        </ul>
        {isLatestLunarCalendar && isExtraPrintDisplayed ?
          <div className="lunar-calendar-accompanying-item">
            <Link to="/shop/prints/tarsier-trail">
              <img
                className="lunar-calendar-accompanying-item-image"
                src={images.prints.printTarsierTrailFeature}
                alt="Tarsier Trail print"
              />
            </Link>
          </div>
        : null}
      </div>

      {isThumbnailsGroupDisplayed ?
        <div className="lunar-calendar-thumbnails">
          {itemsLunarCalendars.thumbnails.map(
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
      : null}
    </>
  );
}

export default ItemLunarCalendarInfo;
