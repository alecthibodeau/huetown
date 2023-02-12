import { useEffect, useState } from 'react';

/* Components */
import LunarCalendarInfo from './LunarCalendarInfo';

/* Constants */
import itemsConstants from '../constants/items-constants';
import itemsImages from '../constants/items-images';

/* Interfaces */
import ItemProps from '../interfaces/ItemProps';

function Item(props: ItemProps) {
  const [quantity, setQuantity] = useState<string>('1');
  const [isInputValid, setIsInputValid] = useState<boolean>(true);
  const [keyPressed, setKeyPressed] = useState<string>('');
  const [validationdMessage, setValidationdMessage] = useState<string>('');

  const digitsValidation = new RegExp(/^\d+$/);
  const categoryClass = props.itemCategory.replace(/\ /g, '-');
  const isLunarCalendar = props.itemCategory === 'lunar calendar';
  const isPrintEdition = props.itemCategory === 'lunar calendar' || 'print';

  const isCurrentLunarCalendar = props.itemLunarCalendarYear === 2023;

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
        {
          isPrintEdition && index === 2 ?
            <span>
              Numbered and signed <a className="text-link" href="#itemDetails">(more info)</a>
            </span>
            : listItem
        }
      </li>
    )
  }

  function renderDetailImagePair(image: string, index: number, elements: string[]) {
    const altTextPrefix = `${props.itemCategory} detail`;
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
            {itemsConstants.colossalBlurb}
          </span>
          <span> &mdash;
            <a className="text-link" href="https://www.thisiscolossal.com/2022/12/calendars-2023">
              <img src={itemsImages.colossalLogo} alt="Colossal website logo" />
            </a>
          </span>
        </div>
      : null}
      <div className={`content-container container-1 ${categoryClass}`}>
        <div className="content-block feature-image-block">
          <a className="feature-image-link" href="#itemDetails">
            <img
              id="featureImage"
              className={`feature-image ${categoryClass}`}
              src={props.itemImageFront}
              alt={`${props.itemCategory} ${props.itemTitle}`}
            />
          </a>
        </div>
        <div className={`content-block item-info-block ${categoryClass}`}>
          <div className="item-info-text" id="orderItem">
            <div>
              <div className="item-title">
                {!isLunarCalendar ? <div>{props.itemTitle}</div> :
                  <div>
                    <span className="lunar-calendar-title">{props.itemTitle}</span><br />
                    <span className="lunar-calendar-year normal">{props.itemLunarCalendarYear} </span>
                    <span className="normal">{props.itemCategory}</span>
                  </div>
                }
              </div>
              <div>
                {props.itemSubtitle}
              </div>
            </div>
            <ul className="item-info-container">
              {props.itemInfo.map(renderListItem)}
            </ul>
          </div>
          <div className={`payment-info ${categoryClass}`}>
            <div className={`item-price-container ${categoryClass}`}>
              $<span className="item-price">{props.itemPrice}</span>
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
                  value={props.itemId}
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
                  value={itemsConstants.addToCart}
                  alt={itemsConstants.addToCart}
                />
              </form>
              {!isInputValid ? <div className="validation-message">{validationdMessage}</div> : null}
            </div>
          </div>
        </div>
      </div>
      <div className="content-container container-2">
        {props.itemDetailImages.map(renderDetailImagePair)}
        {isLunarCalendar ?
          <LunarCalendarInfo
            itemId={props.itemId}
            itemCategory={props.itemCategory}
            itemTitle={props.itemTitle}
            itemSubtitle={props.itemSubtitle}
            itemImageFront={props.itemImageFront}
            itemInfo={props.itemInfo}
            itemPrice={props.itemPrice}
            itemPrintEdition={props.itemPrintEdition}
            itemDetailImages={props.itemDetailImages}
            itemLunarCalendarYear={props.itemLunarCalendarYear}
            itemLunarCalendarPaperInfo={props.itemLunarCalendarPaperInfo}
            itemLunarCalendarLocation={props.itemLunarCalendarLocation}
          />
        : null}
        {isCurrentLunarCalendar ?
          <div className="additional-info">
            <div>
              <p>
                Follow <a className="text-link" href="https://www.instagram.com/huetown/" target="_blank">@huetown</a> on Instagram to see this print's letterpress production in action.
                And join the <a className="text-link" href="about.html">email list</a> to learn when other works are available.
              </p>
              <p>
                Each lunar calendar preordered by November 25th, 2022 included a <span className="ital">Space Pony</span> letterpress print:
              </p>
            </div>
            <div className="item-accompanying">
              <img src={itemsImages.spacePony} />
            </div>
          </div>
        : null}
      </div>
      <div className="content-container container-3"></div>
    </div>
  );
}

export default Item;
