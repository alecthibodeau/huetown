import { Link } from 'react-router-dom';

/* Interfaces */
import ItemProps from '../interfaces/ItemProps';
import LunarPhase from '../interfaces/ItemLunarPhaseKey';
import Thumbnail from '../interfaces/Thumbnail';
import ThumbnailsGroup from '../interfaces/ThumbnailsGroup';

/* Constants */
import formatText from '../helpers/format-text';
import images from '../constants/images';
import itemsLunarCalendars from '../constants/items-lunar-calendars';
import preorderId from '../constants/preorder';

function ItemLunarCalendarInfo(props: ItemProps): JSX.Element {
  const isPreorder: boolean = props.id === preorderId;

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

  return (
    <>
      <div className="lunar-calendar-description">

        {isPreorder ?
          <div>
            <p>
              <span className="bold">Preorder 2024 Lunar Calendar</span>: Alright,
              my lunar calendar for 2024 is currently in production at the print
              shop &mdash; with Dan making the letterpress magic happen for another edition.
              Preorders placed now will ship by early December 2023.
              Huetown's domestic shipping charge in the USA is a flat $8 rate to any address,
              regardless of item quantity, via USPS Priority.
            </p>
            <p>
              <span className="bold">Note</span>: The 2024 lunar calendar <span className="ital">ships
              flat</span> in one sturdy box, regardless of quantity. (Previous lunar calendar orders shipped rolled
              in individual tubes.)
            </p>
            <p>
              <span className="bold">Important</span>: The above lunar calendar
              image is a digital-color simulation of what the final piece's inks
              and paper will look like. There may be some slight variations
              between the colors here and in the print.
            </p>
            <p id="itemDetails">
              Follow <a className="text-link" href="https://www.instagram.com/huetown/">@huetown</a> on
              Instagram for updates on this print's letterpress production.
              And join the <Link className="text-link" to="/about">email list</Link> to
              learn when other works are available.
            </p>
            <div>
              <span className="bold">Event</span>: Catch Huetown
              at <a className="text-link" href="https://www.theveganmarketma.com">The
              Vegan Market</a> in Somerville, Massachusetts on Sunday December 10, 2023.
            </div>
            <p className="bold">
              Here's more info on the ultimate piece&hellip;
            </p>
          </div>
        : null}

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
        <div className="lunar-phases">
          {itemsLunarCalendars.phases.map(renderlunarPhase)}
        </div>
        {isPreorder ?
          <div className="lunar-calendar-timely-info">
            <div>
              <p>
                Each lunar calendar preordered by December 2, 2023 included
                a <span className="ital">Pan Terra</span> letterpress print:
              </p>
            </div>
            <div className="lunar-calendar-accompanying-item">
              <img src={images.lunarCalendars.panTerraPreorder} alt="Pan Terra print" />
            </div>
          </div>
        : null}
        <div>
          Interact with the <span className="ital">current</span> year's lunar calendar through its <Link className="text-link" to="/moon-space">digital version</Link>.
        </div>
      </div>

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
    </>
  );
}

export default ItemLunarCalendarInfo;
