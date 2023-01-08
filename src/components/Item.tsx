import { useState } from 'react';

import itemsConstants from '../constants/items-constants';

import lunarCalendarTwentyThreeMain from '../assets/images/items/thibodeau_lunar_calendar_2023_photo_main_1000px.jpg';
import colossalLogo from '../assets/images/colossal-logo-small.jpg';

interface ItemProps {
  itemId: string;
  itemCategory: string;
  itemName?: string;
  itemSubname: string;
  itemImageFront: string;
  itemInfoOne: string;
  itemInfoTwo: string;
  itemInfoThree: string;
  itemInfoFour: string;
  itemPrice: number;
  itemPrintEdition?: number;
  itemLunarCalendarTitle?: string;
  itemLunarCalendarYear?: number;
  itemLunarCalendarPaperInfo?: string;
  itemLunarCalendarLocation?: string;
}

function Item(props: ItemProps) {
  const [quantity, setQuantity] = useState<string>('1');

  const categoryClass = props.itemCategory.replace(/\ /g, '-');
  const isLunarCalendar = props.itemCategory === 'lunar calendar';
  const isPrintEdition = props.itemCategory === 'lunar calendar' || 'print';

  return(
    <div className="item-page">
      {props.itemLunarCalendarYear === 2023 ?
        <div className="item-press">
          <span className="ital">
            {itemsConstants.colossalBlurb}
          </span>
          <span> &mdash;
            <a className="text-link" href="https://www.thisiscolossal.com/2022/12/calendars-2023">
              <img src={colossalLogo} alt="Colossal logo" />
            </a>
          </span>
        </div>
      : null}
      <div className={`content-container container-1 ${categoryClass}`}>
        <div className="content-block feature-image-block">
          <a className="feature-image-link" href="">
            <img
              id="featureImage"
              className={`feature-image ${categoryClass}`}
              src={lunarCalendarTwentyThreeMain}
              alt={props.itemCategory}
            />
          </a>
        </div>
        <div className={`content-block item-info-block ${categoryClass}`}>
          <div className="item-info-text" id="orderItem">
            <div>
              <div className="item-name">
                {!isLunarCalendar ? <div>{props.itemName}</div> :
                  <div>
                    <span className="lunar-calendar-title">{props.itemLunarCalendarTitle}</span><br />
                    <span className="lunar-calendar-year normal">{props.itemLunarCalendarYear}</span> <span className="normal">{props.itemCategory}</span>
                  </div>
                }
              </div>
              <div className="item-subname">
                {props.itemSubname}
              </div>
            </div>
            <ul className="item-info-container">
              <li className="item-info-1">{props.itemInfoOne}</li>
              <li className="item-info-2">{props.itemInfoTwo}</li>
              <li className="item-info-3">
                {
                  isPrintEdition
                  ?
                  <span>
                    Hand numbered and signed by the artist in an edition of ${props.itemPrintEdition} prints <a className="text-link" href="#itemDetails">(more info)</a>
                  </span>
                  : props.itemInfoThree
                }
              </li>
              <li className="item-info-4">{props.itemInfoFour}</li>
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
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input className="item-id" type="hidden" name="hosted_button_id" value={props.itemId} />
                <input onChange={(event) => setQuantity(event.target.value)} type="text" name="quantity" value={quantity} />
                <input type="submit" value="Add to cart" alt="Add to cart" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="content-container container-2"></div>
      <div className="content-container container-3"></div>
    </div>
  );
}

export default Item;
