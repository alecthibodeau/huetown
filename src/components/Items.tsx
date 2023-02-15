import { Link } from 'react-router-dom';

/* Constants */
import itemsConstants from '../constants/items-constants';

/* Interfaces */
import ItemProps from '../interfaces/ItemProps';

function Items() {

  function renderItemPreview(props: ItemProps, index: number) {

    return (
      <Link key={props.itemTitle + index} className="item-preview text-link" to="/">
        <img className="item-preview-image" src={props.itemImageFront} />
        <div className="item-preview-info">
          <div className="item-preview-title">
            {props.itemTitle}
          </div>
          <div className="item-preview-category">
            {
              props.itemCategory === itemsConstants.textStrings.categoryLunarCalendar
                ? `${props.itemLunarCalendarYear} ${itemsConstants.textStrings.categoryLunarCalendar} ${itemsConstants.textStrings.categoryPrint}`
                : props.itemCategory
            }
          </div>
          {/* <div className="item-preview-description">
            {props.itemInfo[1].toLowerCase()}
          </div> */}
          <div className="item-preview-price">
            {`$${props.itemPrice}`}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div>
      <div className="items-container">
        {itemsConstants.itemsForPreview.map(renderItemPreview)}
      </div>
    </div>
  );
}

export default Items;
