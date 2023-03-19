import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/* Components */
import LunarCalendarInfo from './LunarCalendarInfo';

/* Constants */
import images from '../constants/images';
import text from '../constants/text';

/* Interfaces */
import ItemProps from '../interfaces/ItemProps';

/* Helpers */
import helpers from '../helpers/helpers';

function Item(props: ItemProps): JSX.Element {
  const [quantity, setQuantity] = useState<string>('1');
  const [isInputValid, setIsInputValid] = useState<boolean>(true);
  const [keyPressed, setKeyPressed] = useState<string>('');
  const [validationdMessage, setValidationdMessage] = useState<string>('');

  const digitsValidation: RegExp = new RegExp(/^\d+$/);
  const categoryClass: string = helpers.formatDashes(props.category);
  const titleClass: string = helpers.formatDashes(props.title);
  const isCurrentLunarCalendar: boolean = props.lunarCalendarYear === 2023;
  const isLunarCalendar: boolean = props.category === text.lunarCalendar;

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
        className={`feature-image ${categoryClass} ${titleClass}`}
        src={props.featureImage}
        alt={`${props.category} ${props.title}`}
      />
    );
  }

  function renderListItem(listItem: string, index: number): JSX.Element {
    return (
      <li key={`${helpers.formatLettersAndNumbers(listItem.slice(0, 8))}-${index}`}>
        {listItem === '' ?
          <span>
            Numbered and signed <a className="text-link" href="#itemDetails">(more info)</a>
          </span>
        : listItem}
      </li>
    )
  }

  function renderDetailImagePair(image: string, index: number, detailImages: string[]): JSX.Element | null {
    const altTextPrefix = `${props.category} detail`;
    return (
      index % 2 === 0 ? <div key={`photo-pair-${index + 1}`} className="photo-pair">
        <img
          className={`${categoryClass} ${titleClass}`}
          src={image}
          alt={`${altTextPrefix} #${index + 1}`}
        />
        <img
          id={index === detailImages.length - 2 ? 'itemDetails' : undefined}
          className={`${categoryClass} ${titleClass}`}
          src={detailImages[index + 1]}
          alt={`${altTextPrefix} #${index + 2}`}
        />
      </div> : null
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
            <a
              className="text-link"
              href="https://www.thisiscolossal.com/2022/12/calendars-2023"
            >
              <img src={images.items.colossalLogo} alt="Colossal website logo" />
            </a>
          </span>
        </div>
      : null}
      <div className={`feature-info ${categoryClass}`}>
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
        <div className="detail-images">
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
        </div>
      : null}
    </div>
  );
}

export default Item;
