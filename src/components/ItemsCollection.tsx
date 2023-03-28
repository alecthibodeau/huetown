import { useState } from 'react';
import { Link } from 'react-router-dom';

/* Constants */
import itemsCollection from '../constants/items-collection';
import text from '../constants/text';

/* Interfaces */
import ItemProps from '../interfaces/ItemProps';

/* Helpers */
import helpers from '../helpers/helpers';
import items from '../constants/items';

function ItemsCollection(): JSX.Element {
  const [userSearchInput, setUserSearchInput] = useState('');
  const { formatDashes, formatLettersAndNumbers, formatItemRoutePath } = helpers;

  function formatLunarCalendarText(item: ItemProps): string {
    return `${item.lunarCalendarYear} ${item.category} ${text.print}`;
  }

  function getItemCategory(item: ItemProps): string {
    const isLunarCalendar: boolean = item.category === text.lunarCalendar;
    return isLunarCalendar ? formatLunarCalendarText(item) : item.category;
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>): void {
    if (event.key === 'Enter') event.currentTarget.blur();
  }

  function handleSearchInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setUserSearchInput(event.target.value);
  }

  const filteredItems = itemsCollection.filter((item) => {
    const { title, price }: ItemProps = item;
    const priceWithDollarSign: string = `$${price}`
    const searchInput: string = userSearchInput.toLowerCase();

    return (
      title.toLowerCase().includes(searchInput) ||
      getItemCategory(item).toLowerCase().includes(searchInput) ||
      priceWithDollarSign.toString().toLowerCase().includes(searchInput)
    );
  });

  function renderItem(item: ItemProps, index: number): JSX.Element {
    return (
      <Link
        key={`${formatLettersAndNumbers(item.title.slice(0, 8))}-${index}`}
        className="items-collection-link text-link"
        to={formatItemRoutePath(item.category, item.title)}
      >
        <img
          className={`items-collection-image ${formatDashes(item.category)} ${formatDashes(item.title)}`}
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
      <div className="items-search-results-count">
        {`Items count: ${filteredItems.length}`}
      </div>
      <div className="items-search">
        <span>Search items by title, category or price: </span>
        <input
          type="text"
          value={userSearchInput}
          onChange={handleSearchInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="items-collection">
        {filteredItems.map(renderItem)}
      </div>
    </div>
  );
}

export default ItemsCollection;
