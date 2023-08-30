import { useState } from 'react';
import { Link } from 'react-router-dom';

/* Interfaces */
import ItemProps from '../interfaces/ItemProps';

/* Constants */
import itemsCollection from '../constants/items-collection';
import text from '../constants/text';

/* Helpers */
import formatText from '../helpers/format-text';

function ItemsCollection(): JSX.Element {
  const { formatDashes, formatLettersAndNumbers, formatItemRoutePath } = formatText;
  const { lunarCalendar, print, postcard, all } = text;
  const [itemsCategory, setItemsCategory] = useState(all);
  const [userSearchInput, setUserSearchInput] = useState('');
  const allItems: boolean = itemsCategory === all;
  const lunarCalendarAngledViewIndex: number = 2;
  const itemsCategories: string[] = [lunarCalendar, print, postcard, all];

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

  function renderCategoryButton(category: string, index: number): JSX.Element {
    return (
      <button
        key={`${category}-${index}`}
        className={`category-button${category === itemsCategory ? ' selected' : ''}`}
        onClick={() => handleCategoryChange(category)}
      >
        {`${category}${category === all ? '' : 's'}`}
      </button>
    )
  }

  function renderItemCard(item: ItemProps, index: number): JSX.Element {
    return (
      <Link
        key={`${formatLettersAndNumbers(item.title.slice(0, 8))}-${index}`}
        className="item-card-link text-link"
        to={formatItemRoutePath(item.category, item.title)}
      >
        <img
          className={`item-card-image ${formatDashes(item.category)} ${formatDashes(item.title)}`}
          src={item.category === text.lunarCalendar && item.detailImages
            ? item.detailImages[lunarCalendarAngledViewIndex]
            : item.featureImage}
          alt={`${item.title} preview`}
        />
        <div className="item-card-info">
          <div className="item-card-title">
            {item.title}
          </div>
          <div className="item-card-category">
            {getItemCategory(item)}
          </div>
          <div className="item-card-price">
            {`$${item.price}`}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div>
      <div className="items-collection-info">
        <div className="items-search">
          <span>
            {`${allItems ? itemsCollection.length : filteredItems.length}
            item${filteredItems.length === 1 ? '' : 's'}`}
          </span>
          <span>search by title, category or price:</span>
          <input
            type="text"
            value={userSearchInput}
            onChange={handleSearchInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="category-buttons-container">
          {itemsCategories.map(renderCategoryButton)}
        </div>
      </div>
      <div className="items-collection-cards">
        {allItems ? itemsCollection.map(renderItemCard) : filteredItems.map(renderItemCard)}
      </div>
    </div>
  );
}

export default ItemsCollection;
