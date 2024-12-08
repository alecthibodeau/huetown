import React, { useEffect, useState } from 'react';

/* Components */
import ItemLunarCalendarInfo from './ItemLunarCalendarInfo';

/* Interfaces */
import ItemProps from '../interfaces/ItemProps';

/* Constants */
import images from '../constants/images';
import itemsSpecificInfo from '../constants/items-specific-info';
import text from '../constants/text';

/* Helpers */
import formatText from '../helpers/format-text';

function Item(props: ItemProps): JSX.Element {
  const [quantity, setQuantity] = useState<string>('1');
  const [isInputValid, setIsInputValid] = useState<boolean>(true);
  const [keyPressed, setKeyPressed] = useState<string>('');
  const [validationdMessage, setValidationdMessage] = useState<string>('');

  const digitsValidation: RegExp = new RegExp(/^\d+$/);
  const categoryClass: string = formatText.formatDashes(props.category);
  const titleClass: string = formatText.formatDashes(props.title);
  const islunarCalendar2023: boolean = props.lunarCalendarYear === 2023;
  const isLunarCalendar: boolean = props.category === text.lunarCalendar;
  const isPreorder: boolean = props.id === itemsSpecificInfo.preorderId;
  const isRecentLunarCalendar: boolean = props.lunarCalendarYear ? props.lunarCalendarYear > 2020 : false;
  const detailImageAltTextPrefix: string = `${props.category} detail`;
  const detailImageClassName: string = `${categoryClass} ${titleClass}${isRecentLunarCalendar ? ' recent-lunar-calendar' : ''}`

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
        id="featureImageNavigation"
        className={`feature-image ${categoryClass} ${titleClass}`}
        src={props.featureImage}
        alt={`${props.category} ${props.title}`}
      />
    );
  }

  function renderListItem(listItem: string, index: number): JSX.Element {
    return (
      <li key={`${formatText.formatLettersAndNumbers(listItem.slice(0, 8))}-${index}`}>
        {listItem === text.numberedAndSigned ?
          <span>
            {text.numberedAndSigned} <a className="text-link" href="#itemDetails">(more info)</a>
          </span>
        : listItem}
      </li>
    )
  }

  function renderDetailImagePair(image: string, index: number, detailImages: string[]): JSX.Element | null {
    return (
      index % 2 === 0 ? <div key={`detail-image-pair-${index + 1}`} className="detail-image-pair">
        <img
          className={detailImageClassName}
          src={image}
          alt={`${detailImageAltTextPrefix} #${index + 1}`}
        />
        <img
          id={index === detailImages.length - 2 ? 'itemDetails' : undefined}
          className={detailImageClassName}
          src={detailImages[index + 1]}
          alt={`${detailImageAltTextPrefix} #${index + 2}`}
        />
      </div> : null
    )
  }

  return (
    <div className="item">
      {islunarCalendar2023 ?
        <div className="item-press">
          <span className="ital">
            {text.colossalBlurb}
          </span>
          <span> &mdash;
            <a
              className="text-link"
              href="https://www.thisiscolossal.com/2022/12/calendars-2023"
            >
              <img src={images.lunarCalendars.colossalLogo} alt="Colossal website logo" />
            </a>
          </span>
        </div>
      : null}
      <div className={`feature-info ${categoryClass}`}>
        {
          props.detailImages
          ? <a href="#itemDetails">{renderFeatureImage()}</a>
          : renderFeatureImage()
        }
        <div className={`item-info-block ${categoryClass}`}>
          <div className={`payment-info ${categoryClass}`}>
            <div className={`item-price-container ${categoryClass}`}>
              {props.isSoldOut
                ? <span className="item-sold-out">{text.itemSoldOut}</span>
                : `$${props.price}`}
            </div>
            {!props.isSoldOut ?
              <div id="itemFormContainer">
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
            : null}
          </div>
          <div id="itemInfoText">
            <div>
              <div className="item-title">
                {!isLunarCalendar ? <div>{props.title}</div> :
                  <div>
                    <span>{props.title}</span><br />
                    <span className="normal">
                      {
                        isPreorder
                          ? <span className="item-preorder-text">{text.preorderAllCaps}&nbsp;</span>
                          : null
                      }
                      <span>{props.lunarCalendarYear} {props.category}</span>
                    </span>
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
      {props.detailImages || isLunarCalendar ?
        <div className="detail-information">
          {props.detailImages ? props.detailImages.map(renderDetailImagePair) : null}
          {isLunarCalendar ?
            <ItemLunarCalendarInfo
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
        </div>
      : null}
      {props.description ?
        <div className="item-description">
          <span className="ital">{props.title}</span> <span>{props.description}</span>
        </div>
      : null}
    </div>
  );
}

export default React.memo(Item);
