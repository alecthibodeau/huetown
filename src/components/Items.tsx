import { Link } from 'react-router-dom';

/* Constants */
import itemsConstants from '../constants/items-constants';

/* Interfaces */
import ItemProps from '../interfaces/ItemProps';

/* Helpers */
import formatItemRoutePath from '../helpers/helpers';

function Items() {

  function formatLunarCalendarText(item: ItemProps): string {
    return `${item.lunarCalendarYear} ${item.category} ${itemsConstants.layoutText.categoryPrint}`;
  }

  function getItemPreviewCategory(item: ItemProps): string {
    const isItemLunarCalendar: boolean = item.category === itemsConstants.layoutText.categoryLunarCalendar;
    return isItemLunarCalendar ? formatLunarCalendarText(item) : item.category;
  }

  function renderItemPreview(item: ItemProps, index: number) {
    return (
      <Link
        key={item.title + index}
        className="item-preview text-link"
        to={formatItemRoutePath(item.category, item.title)}
      >
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
