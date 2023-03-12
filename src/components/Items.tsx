import { Link } from 'react-router-dom';

/* Constants */
import itemsConstants from '../constants/items-constants';

/* Interfaces */
import ItemProps from '../interfaces/ItemProps';

function Items() {

  function getItemPreviewCategory(item: ItemProps): string {
    return item.category === itemsConstants.textStrings.categoryLunarCalendar
    ? `${item.lunarCalendarYear} ${itemsConstants.textStrings.categoryLunarCalendar} ${itemsConstants.textStrings.categoryPrint}`
    : item.category
  }

  function renderItemPreview(item: ItemProps, index: number) {
    return (
      <Link key={item.title + index} className="item-preview text-link" to="/">
        <img
          className="item-preview-image"
          src={item.imageFront}
          alt={`${item.title} preview`}
        />
        <div className="item-preview-info">
          <div className="item-preview-title">
            {item.title}
          </div>
          <div className="item-preview-category">
            {getItemPreviewCategory(item)}
          </div>
          {/* <div className="item-preview-description">
            {item.info[1].toLowerCase()}
          </div> */}
          <div className="item-preview-price">
            {`$${item.price}`}
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
