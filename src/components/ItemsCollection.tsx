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
        className="items-collection-link text-link"
        to={formatItemRoutePath(item.category, item.title)}
      >
        <img
          className="items-collection-image"
          src={item.featureImage}
          alt={`${item.title} preview`}
        />
        <div className="items-collection-info">
          <div className="items-collection-title">
            {item.title}
          </div>
          <div className="items-collection-category">
            {getItemCategory(item)}
          </div>
          <div className="items-collection-price">
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
