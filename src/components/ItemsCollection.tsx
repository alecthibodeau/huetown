import { useState } from 'react';
import { Link } from 'react-router-dom';

/* Constants */
import itemsCollection from '../constants/items-collection';
import text from '../constants/text';

/* Interfaces */
import ItemProps from '../interfaces/ItemProps';

/* Helpers */
import helpers from '../helpers/helpers';

function ItemsCollection(): JSX.Element {
  const [userSearchInput, setUserSearchInput] = useState('');
  const { formatDashes, formatLettersAndNumbers, formatItemRoutePath } = helpers;

  function formatLunarCalendarCatergory(item: ItemProps): string {
    return `${item.lunarCalendarYear} ${item.category} ${text.print}`;
  }

  function getItemCategory(item: ItemProps): string {
    const isLunarCalendar: boolean = item.category === text.lunarCalendar;
    return isLunarCalendar ? formatLunarCalendarCatergory(item) : item.category;
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>): void {
    if (event.key === 'Enter') event.currentTarget.blur();
  }

  function handleSearchInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setUserSearchInput(event.target.value);
  }

  const filteredItems: ItemProps[] = itemsCollection.filter((item) => {
    const priceWithDollarSign: string = `$${ item.price}`;
    const searchInput: string = userSearchInput.toLowerCase();
    return (
      item.title.toLowerCase().includes(searchInput) ||
      getItemCategory(item).toLowerCase().includes(searchInput) ||
      priceWithDollarSign.includes(searchInput)
    );
  });

  // function shuffleItems(items: ItemProps[]) {
  //   for (let i = items.length - 1; i > 0; i--) {
  //     const randomIndex = Math.floor(Math.random() * (i + 1));
  //     [items[i], items[randomIndex]] = [items[randomIndex], items[i]];
  //   }
  //   return items;
  // }

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
      <div className="items-search">
        <span>Search items by title, category or price: </span>
        <input
          type="text"
          value={userSearchInput}
          onChange={handleSearchInputChange}
          onKeyDown={handleKeyDown}
        />
        <span className="items-search-count">
          {`${filteredItems.length} item${filteredItems.length === 1 ? '' : 's'}`}
        </span>
      </div>
      <div className="items-collection">
        {/* {
          userSearchInput
          ? filteredItems.map(renderItem)
          : shuffleItems([...filteredItems]).map(renderItem)
        } */}
        {filteredItems.map(renderItem)}
      </div>
    </div>
  );
}

export default ItemsCollection;
