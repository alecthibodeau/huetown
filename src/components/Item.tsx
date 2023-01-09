import { useState } from 'react';

/* Constants */
import itemsConstants from '../constants/items-constants';
import itemsImages from '../constants/items-images';

interface ItemProps {
  itemId: string;
  itemCategory: string;
  itemTitle: string;
  itemSubtitle: string;
  itemImageFront: string;
  itemInfoOne: string;
  itemInfoTwo: string;
  itemInfoThree: string;
  itemInfoFour: string;
  itemPrice: number;
  itemPrintEdition?: number;
  itemLunarCalendarYear?: number;
  itemLunarCalendarPaperInfo?: string;
  itemLunarCalendarLocation?: string;
  itemDetailPhotos: string[];
}

function Item(props: ItemProps) {
  const [quantity, setQuantity] = useState<string>('1');

  const categoryClass = props.itemCategory.replace(/\ /g, '-');
  const isLunarCalendar = props.itemCategory === 'lunar calendar';
  const isPrintEdition = props.itemCategory === 'lunar calendar' || 'print';

  const itemInfoListItems = [
    props.itemInfoOne,
    props.itemInfoTwo,
    props.itemInfoThree,
    props.itemInfoFour
  ];

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

  function renderDetailsImages(image: string, index: number, elements: string[]) {
    return (
      /* Render a <div> element containing a pair of <img> elements for every other element */
      index % 2 === 0 ? <div key={`photoPair${index}`} className="photo-pair">
        <img className="large-detail-image" src={image} alt={`${props.itemCategory} detail #${index + 1}`}></img>
        <img className="large-detail-image" src={elements[index + 1]} alt={`${props.itemCategory} detail #${index + 2}`}></img>
      </div> : null
    )
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
              {itemInfoListItems.map(renderListItem)}
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
      <div className="content-container container-2">
        {props.itemDetailPhotos.map(renderDetailsImages)}
        <div className="item-more-info">
          <div className="info-block"></div>
          <div className="info-block"></div>
          <div className="info-block"></div>
          <div className="info-block"></div>
          <div className="lunar-phases"></div>
          <div className="protective-tube"></div>
          <div></div>
        </div>
        <div className="additional-info"></div>
      </div>
      <div className="content-container container-3"></div>
    </div>
  );
}

export default Item;
