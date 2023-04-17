import { useState } from 'react';
import { Link } from 'react-router-dom';

/* Interfaces */
import ItemProps from '../interfaces/ItemProps';

/* Constants */
import itemsCollection from '../constants/items-collection';
import text from '../constants/text';

/* Helpers */
import helpers from '../helpers/helpers';

function ItemsCollection(): JSX.Element {
  const [itemsCategory, setItemsCategory] = useState('');
  const [userSearchInput, setUserSearchInput] = useState('');
  const { formatDashes, formatLettersAndNumbers, formatItemRoutePath } = helpers;
  const lunarCalendarAngledViewIndex: number = 2;

  function formatLunarCalendarCategory(item: ItemProps): string {
    return `${item.lunarCalendarYear} ${item.category}`;
  }

  function formatPrintCategory(item: ItemProps): string {
    const descriptionIndex: number = 1;
    return item.info[descriptionIndex].replace(/,/g, '').split(' ').slice(0, 2).join(' ').toLowerCase();
  }

  function getItemCategory(item: ItemProps): string {
    let category = item.category;
    if (item.category === text.lunarCalendar) category = formatLunarCalendarCategory(item);
    if (item.category === text.print) category = formatPrintCategory(item);
    return category;
   }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>): void {
    if (event.key === 'Enter') event.currentTarget.blur();
  }

  function handleSearchInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    if (itemsCategory) setItemsCategory('');
    setUserSearchInput(event.target.value);
  }

  function handleCategoryChange(category: string): void {
    if (userSearchInput) setUserSearchInput('');
    setItemsCategory(category);
  }

  const filteredItems: ItemProps[] = itemsCollection.filter((item) => {
    const priceWithDollarSign: string = `$${item.price}`;
    const searchInput: string = userSearchInput.toLowerCase();
    return itemsCategory
      ? item.category === itemsCategory
      : item.title.toLowerCase().includes(searchInput)
        || getItemCategory(item).toLowerCase().includes(searchInput)
        || priceWithDollarSign.includes(searchInput);
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
          src={item.category === text.lunarCalendar && item.detailImages
            ? item.detailImages[lunarCalendarAngledViewIndex]
            : item.featureImage}
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
        <span>Search all items by title, category or price:</span>
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
      <div>
        <button onClick={() => handleCategoryChange(text.lunarCalendar)}>{`${text.lunarCalendar}s`}</button>
        <button onClick={() => handleCategoryChange(text.print)}>{`${text.print}s`}</button>
        <button onClick={() => handleCategoryChange(text.postcard)}>{`${text.postcard}s`}</button>
      </div>
      <div className="items-collection">
        {filteredItems.map(renderItem)}
      </div>
    </div>
  );
}

export default ItemsCollection;
