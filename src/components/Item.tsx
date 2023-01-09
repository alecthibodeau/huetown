import { useEffect, useState } from 'react';

/* Constants */
import itemsConstants from '../constants/items-constants';
import itemsImages from '../constants/items-images';

/* Interfaces */
import ItemProps from '../interfaces/ItemProps';
import Phase from '../interfaces/Phase';

function Item(props: ItemProps) {
  const [quantity, setQuantity] = useState<string>('1');
  const [isInputValid, setIsInputValid] = useState<boolean>(true);
  const [keyPressed, setKeyPressed] = useState<string>('');
  const [validationdMessage, setValidationdMessage] = useState<string>('');

  const digitsValidation = new RegExp(/^\d+$/);
  const categoryClass = props.itemCategory.replace(/\ /g, '-');
  const isLunarCalendar = props.itemCategory === 'lunar calendar';
  const isPrintEdition = props.itemCategory === 'lunar calendar' || 'print';

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
          isPrintEdition && index === 2
            ?
            <span>
              <span>Hand numbered and signed by the artist in an edition of </span>
              <span>{props.itemPrintEdition} </span> <span>prints </span>
              <a className="text-link" href="#itemDetails">(more info)</a>
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

  function renderlunarPhase(phase: Phase, index: number) {
    return (
      <div key={index  + phase.name + 'moon'}  className="phase-info">
        <img src={phase.image} alt={phase.name + ' moon'}/>
        <div className="phase-text">
          {phase.name + ' moon'}
        </div>
      </div>
    )
  }

  function onQuantityChange(event: React.BaseSyntheticEvent) {
    const input = event.target.value;
    if (!digitsValidation.test(input) && keyPressed !== 'Backspace' && keyPressed !== 'Delete') {
      setIsInputValid(false);
      setValidationdMessage('Numbers only, please.')
    } else {
      setIsInputValid(true);
      setQuantity(input);
    }
  }

  return (
    <div className="item-page">
      {props.itemLunarCalendarYear === 2023 ?
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
        {isLunarCalendar ? <div className="item-more-info">
          <div className="more-info-block">
            <span className="lunar-calendar-title ital">{props.itemTitle}</span> is a letterpress-printed lunar calendar designed and drawn by Alec Thibodeau (me!),
            chronicling all phases of the moon for <span className="lunar-calendar-year">{props.itemLunarCalendarYear}</span>.
            From an edition of <span className="print-edition">{props.itemPrintEdition}</span> prints <span className="lunar-calendar-title ital">{props.itemTitle}</span> continues Alec's ongoing lunar calendar series,
            which features ornate illustrations framing an annual cycle of moon shapes.
            As with each of Alec's previous lunar calendars this piece measures 19" x 11.75" (a golden rectangle) and is expertly printed by Dan Wood
            and his team at <a className="text-link" href="https://www.dwriletterpress.net">DWRI&nbsp;Letterpress</a>.
          </div>
          <div className="more-info-block">
            The <span className="lunar-calendar-year">{props.itemLunarCalendarYear}</span> lunar calendar comprises new drawings and year-specific lunar phase information.
            Each calendar is printed on <span className="lunar-calendar-paper-info">{props.itemLunarCalendarPaperInfo}</span>, blind-debossed with Alec's name and the print shop's name &mdash; and hand numbered and signed by Alec. Each calendar ships in archival wrap with an accompanying information sheet inside an eco-friendly fiberboard protective tube (reusable, recycled, recyclable) with crimped ends.
          </div>
          <div className="more-info-block">
            The calendar's lunar phase chart is calibrated for any location in the Eastern Time Zone and is accurate to within a day for anywhere in the Northern Hemisphere. The chart also matches lunar cycles in the Southern Hemisphere: but with inverted shapes. <span className="lunar-calendar-location">{props.itemLunarCalendarLocation}</span>
          </div>
          <div className="more-info-block">
            Custom moon illustrations portray all principal lunar phases (New Moon, First Quarter Moon, Full Moon and Third Quarter Moon) plus all intermediate crescent and gibbous phases. For months with less than 31 days, drawings of clouds occupy the extra spaces. <a className="text-link" href="#featureImage">Order now.</a>
          </div>
          <div className="lunar-phases" id="lunarPhases">
            {itemsConstants.lunarPhases.map(renderlunarPhase)}
          </div>
          <div className="protective-tube" id="tube">
            <div className="tube-text">eco-friendly protective tube:</div>
            <img src={itemsImages.protectiveTube} alt="Protective tube for storing lunar calendar"/>
          </div>
          <div></div>
        </div> : null}
        <div className="additional-info"></div>
      </div>
      <div className="content-container container-3"></div>
    </div>
  );
}

export default Item;
