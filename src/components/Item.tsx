import { useEffect, useState } from 'react';

/* Components */
import LunarCalendarInfo from './LunarCalendarInfo';

/* Constants */
import itemsConstants from '../constants/items-constants';
import itemsImages from '../constants/items-images';
import itemsLunarCalendarsConstants from '../constants/items-lunar-calendars-constants';

/* Interfaces */
import ItemProps from '../interfaces/ItemProps';
import Thumbnail from '../interfaces/Thumbnail';

function Item(props: ItemProps) {
  const [quantity, setQuantity] = useState<string>('1');
  const [isInputValid, setIsInputValid] = useState<boolean>(true);
  const [keyPressed, setKeyPressed] = useState<string>('');
  const [validationdMessage, setValidationdMessage] = useState<string>('');

  const digitsValidation = new RegExp(/^\d+$/);

  const categoryClass = props.category.replace(/\s+/g, '-');
  const isCurrentLunarCalendar = props.lunarCalendarYear === 2023;
  const isLunarCalendar = props.category === 'lunar calendar';
  const isPrintEdition = props.category === 'lunar calendar' || 'print';


  useEffect(() => {
    const keydown = 'keydown';
    window.addEventListener(keydown, keyDownHandler);
    return function cleanupEventListener() {
      window.removeEventListener(keydown, keyDownHandler);
    };
  }, []);

  function keyDownHandler({ key }: KeyboardEvent): void {
    setKeyPressed(key);
  }

  function renderListItem(listItem: string, index: number) {
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

  function renderDetailImagePair(image: string, index: number, elements: string[]) {
    const altTextPrefix = `${props.category} detail`;
    return (
      index % 2 === 0 ? <div key={`photoPair${index}`} className="photo-pair">
        <img
          className="large-detail-image"
          src={image}
          alt={`${altTextPrefix} #${index + 1}`}
        />
        <img
          id={index === elements.length - 2 ? 'itemDetails' : undefined}
          className="large-detail-image"
          src={elements[index + 1]}
          alt={`${altTextPrefix} #${index + 2}`}
        />
      </div> : null
    )
  }

  function renderThumbnail(thumbnail: Thumbnail, index: number) {
    return (
      <div key={`thumbnail${thumbnail.label}${index}`} className="thumbnail">
        <a href={thumbnail.link}>
          <img src={thumbnail.image} alt={`${thumbnail.label} thumbnail`} />
        </a>
        <div className="label">{thumbnail.label}</div>
      </div>
    )
  }

  function onQuantityChange(event: React.BaseSyntheticEvent) {
    const input = event.target.value;
    if (!digitsValidation.test(input) && keyPressed !== 'Backspace' && keyPressed !== 'Delete') {
      setIsInputValid(false);
      setValidationdMessage('Numbers only, please.');
    } else {
      setIsInputValid(true);
      setQuantity(input);
    }
  }

  return (
    <div className="item-page">
      {isCurrentLunarCalendar ?
        <div className="item-press">
          <span className="ital">
            {itemsConstants.textStrings.colossalBlurb}
          </span>
          <span> &mdash;
            <a className="text-link" href="https://www.thisiscolossal.com/2022/12/calendars-2023">
              <img src={itemsImages.colossalLogo} alt="Colossal website logo" />
            </a>
          </span>
        </div>
      : null}
      <div className={`container-1 ${categoryClass}`}>
        <div className="feature-image-block">
          <a className="feature-image-link" href="#itemDetails">
            <img
              id="featureImage"
              className={`feature-image ${categoryClass}`}
              src={props.imageFront}
              alt={`${props.category} ${props.title}`}
            />
          </a>
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
                  value={itemsConstants.textStrings.addToCart}
                  alt={itemsConstants.textStrings.addToCart}
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
              imageFront={props.imageFront}
              info={props.info}
              price={props.price}
              printEdition={props.printEdition}
              detailImages={props.detailImages}
              lunarCalendarYear={props.lunarCalendarYear}
              lunarCalendarPaperInfo={props.lunarCalendarPaperInfo}
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
                <img src={itemsImages.spacePony} alt="Space Pony print" />
              </div>
            </div>
          : null}
        </div>
      : null}

      {isLunarCalendar ?
        <div className="container-3">
          {itemsLunarCalendarsConstants.thumbnailsLunarCalendars.map(
            (set, index) => {
              return (
                <div key={`status${set.status}${index}`} className="thumbnails-set">
                  <div className="thumbnails-title">
                    {set.status} alec thibodeau lunar&nbsp;calendars
                  </div>
                  <div className="thumbnails">
                    {set.thumbnails.map(renderThumbnail)}
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
