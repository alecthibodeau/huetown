import { Link } from 'react-router-dom';

/* Constants */
import itemsCollection from '../constants/items-collection';
import text from '../constants/text';

/* Interfaces */
import ItemProps from '../interfaces/ItemProps';

/* Helpers */
import formatItemRoutePath from '../helpers/helpers';

function ItemsCollection(): JSX.Element {

  function formatLunarCalendarText(item: ItemProps): string {
    return `${item.lunarCalendarYear} ${item.category} ${text.print}`;
  }

  function getItemCategory(item: ItemProps): string {
    const isLunarCalendar: boolean = item.category === text.lunarCalendar;
    return isLunarCalendar ? formatLunarCalendarText(item) : item.category;
  }

  function renderItem(item: ItemProps, index: number): JSX.Element {
    return (
      <Link
        key={item.title + index}
        className="item-collection-link text-link"
        to={formatItemRoutePath(item.category, item.title)}
      >
        <img
          className="item-collection-image"
          src={item.featureImage}
          alt={`${item.title} preview`}
        />
        <div className="item-collection-info">
          <div className="item-collection-title">
            {item.title}
          </div>
          <div className="item-collection-category">
            {getItemCategory(item)}
          </div>
          <div className="item-collection-price">
            {`$${item.price}`}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div>
      <div className="items-collection">
        {itemsCollection.map(renderItem)}
      </div>
    </div>
  );
}

export default ItemsCollection;
