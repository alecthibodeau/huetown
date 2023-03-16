import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/* Components */
import LunarCalendarInfo from './LunarCalendarInfo';

/* Constants */
// import items from '../constants/items';
import images from '../constants/images';
import lunarCalendars from '../constants/lunar-calendars';
import text from '../constants/text';

/* Interfaces */
import ItemProps from '../interfaces/ItemProps';
import Thumbnail from '../interfaces/Thumbnail';

function Item(props: ItemProps): JSX.Element {
  const [quantity, setQuantity] = useState<string>('1');
  const [isInputValid, setIsInputValid] = useState<boolean>(true);
  const [keyPressed, setKeyPressed] = useState<string>('');
  const [validationdMessage, setValidationdMessage] = useState<string>('');

  const digitsValidation: RegExp = new RegExp(/^\d+$/);
  const categoryClass: string = props.category.replace(/\s+/g, '-');
  const isCurrentLunarCalendar: boolean = props.lunarCalendarYear === 2023;
  const isLunarCalendar: boolean = props.category === text.lunarCalendar;
  const isPrintEdition: boolean = props.category === (text.lunarCalendar || text.print);

  useEffect(() => {
    const keydown = 'keydown';
    window.addEventListener(keydown, keyDownHandler);
    return function cleanupEventListener() {
      window.removeEventListener(keydown, keyDownHandler);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props]);

  function keyDownHandler({ key }: KeyboardEvent): void {
    setKeyPressed(key);
  }

  function onQuantityChange(event: React.BaseSyntheticEvent): void {
    const input = event.target.value;
    if (!digitsValidation.test(input) && keyPressed !== 'Backspace' && keyPressed !== 'Delete') {
      setIsInputValid(false);
      setValidationdMessage('Numbers only, please.');
    } else {
      setIsInputValid(true);
      setQuantity(input);
    }
  }

  function renderFeatureImage(): JSX.Element {
    return (
      <img
        id="featureImage"
        className={`feature-image ${categoryClass}`}
        src={props.featureImage}
        alt={`${props.category} ${props.title}`}
      />
    );
  }

  function renderListItem(listItem: string, index: number): JSX.Element {
    return (
      <li key={`${index}${listItem}`}>
        {isPrintEdition && index === 2 ?
          <span>
            Numbered and signed <a className="text-link" href="#itemDetails">(more info)</a>
          </span>
        : listItem}
      </li>
    )
  }

  function addIdForFinalDetailImage(detailImages: string[], index: number): string | undefined {
    return index === detailImages.length - 2 ? 'itemDetails' : undefined;
  }

  function renderDetailImagePair(image: string, index: number, detailImages: string[]): JSX.Element | null {
    const altTextPrefix = `${props.category} detail`;
    return (
      index % 2 === 0 ? <div key={`photoPair${index}`} className="photo-pair">
        <img
          className="large-detail-image"
          src={image}
          alt={`${altTextPrefix} #${index + 1}`}
        />
        <img
          id={addIdForFinalDetailImage(detailImages, index)}
          className="large-detail-image"
          src={detailImages[index + 1]}
          alt={`${altTextPrefix} #${index + 2}`}
        />
      </div> : null
    )
  }

  function renderThumbnailImage(thumbnail: Thumbnail): JSX.Element {
    return <img src={thumbnail.image} alt={`${thumbnail.label} thumbnail`} />;
  }

  function renderThumbnail(thumbnail: Thumbnail, index: number): JSX.Element {
    return (
      <div key={`thumbnail${thumbnail.label}${index}`} className="thumbnail">
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
    <div className="item">
      {isCurrentLunarCalendar ?
        <div className="item-press">
          <span className="ital">
            {text.colossalBlurb}
          </span>
          <span> &mdash;
            <a className="text-link" href="https://www.thisiscolossal.com/2022/12/calendars-2023">
              <img src={images.colossalLogo} alt="Colossal website logo" />
            </a>
          </span>
        </div>
      : null}
      <div className={`container-1 ${categoryClass}`}>
        <div className="feature-image-block">
          {
            props.category === text.lunarCalendar
            ? <Link to="#itemDetails">{renderFeatureImage()}</Link>
            : <div>{renderFeatureImage()}</div>
          }
        </div>
        <div className={`item-info-block ${categoryClass}`}>
          <div className={`payment-info ${categoryClass}`}>
            <div className={`item-price-container ${categoryClass}`}>
              $<span className="item-price">{props.price}</span>
            </div>
            <div className="form-container">
              <div className="quantity-label">
                <span>
                  Qty.
                </span>
              </div>
              <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                <input
                  name="cmd"
                  type="hidden"
                  value="_s-xclick"
                />
                <input
                  name="hosted_button_id"
                  type="hidden"
                  value={props.id}
                />
                <input
                  name="quantity"
                  type="text"
                  value={quantity}
                  maxLength={3}
                  onChange={(event) => onQuantityChange(event)}
                />
                <input
                  type="submit"
                  value={text.addToCart}
                  alt={text.addToCart}
                />
              </form>
              {!isInputValid ? <div className="validation-message">{validationdMessage}</div> : null}
            </div>
          </div>
          <div className="item-info-text" id="orderItem">
            <div>
              <div className="item-title">
                {!isLunarCalendar ? <div>{props.title}</div> :
                  <div>
                    <span>{props.title}</span><br />
                    <span className="normal">{props.lunarCalendarYear} {props.category}</span>
                  </div>
                }
              </div>
              <div>
                {props.subtitle}
              </div>
            </div>
            <ul className="item-info-container">
              {props.info.map(renderListItem)}
            </ul>
          </div>
        </div>
      </div>

      {props.detailImages ?
        <div className="container-2">
          {props.detailImages.map(renderDetailImagePair)}
          {isLunarCalendar ?
            <LunarCalendarInfo
              id={props.id}
              category={props.category}
              title={props.title}
              subtitle={props.subtitle}
              featureImage={props.featureImage}
              info={props.info}
              price={props.price}
              printEdition={props.printEdition}
              detailImages={props.detailImages}
              lunarCalendarYear={props.lunarCalendarYear}
              lunarCalendarPaper={props.lunarCalendarPaper}
              lunarCalendarLocation={props.lunarCalendarLocation}
            />
          : null}
          {isCurrentLunarCalendar ?
            <div className="additional-info">
              <div>
                <p>
                  Follow <a className="text-link" href="https://www.instagram.com/huetown/">@huetown</a> on Instagram to see this print's letterpress production in action.
                  And join the <a className="text-link" href="about.html">email list</a> to learn when other works are available.
                </p>
                <p>
                  Each lunar calendar preordered by November 25th, 2022 included a <span className="ital">Space Pony</span> letterpress print:
                </p>
              </div>
              <div className="item-accompanying">
                <img src={images.spacePony} alt="Space Pony print" />
              </div>
            </div>
          : null}
        </div>
      : null}

      {isLunarCalendar ?
        <div className="container-3">
          {lunarCalendars.thumbnails.map(
            (group) => {
              return (
                <div key={`status${group.status}`} className="thumbnails-group">
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

    </div>
  );
}

export default Item;
