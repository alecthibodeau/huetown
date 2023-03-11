import { Link } from 'react-router-dom';

/* Constants */
import itemsConstants from '../constants/items-constants';

/* Interfaces */
import ItemProps from '../interfaces/ItemProps';

function Items() {

  function getItemPreviewCategory(item: ItemProps): string {
    return item.itemCategory === itemsConstants.textStrings.categoryLunarCalendar
    ? `${item.itemLunarCalendarYear} ${itemsConstants.textStrings.categoryLunarCalendar} ${itemsConstants.textStrings.categoryPrint}`
    : item.itemCategory
  }

  function renderItemPreview(item: ItemProps, index: number) {
    return (
      <Link key={item.itemTitle + index} className="item-preview text-link" to="/">
        <img
          className="item-preview-image"
          src={item.itemImageFront}
          alt={`${item.itemTitle} preview`}
        />
        <div className="item-preview-info">
          <div className="item-preview-title">
            {item.itemTitle}
          </div>
          <div className="item-preview-category">
            {getItemPreviewCategory(item)}
          </div>
          {/* <div className="item-preview-description">
            {item.itemInfo[1].toLowerCase()}
          </div> */}
          <div className="item-preview-price">
            {`$${item.itemPrice}`}
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
