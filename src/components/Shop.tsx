import { useState } from 'react';
import { Link } from 'react-router-dom';

/* Interfaces */
import ItemProps from '../interfaces/ItemProps';

/* Constants */
import items from '../constants/items';
import itemsCollection from '../constants/items-collection';
import text from '../constants/text';

/* Helpers */
import formatText from '../helpers/format-text';

function Shop(): JSX.Element {
  const { formatDashes, formatLettersAndNumbers, formatItemRoutePath } = formatText;
  const { lunarCalendar, print, postcard, all } = text;
  const [itemsCategory, setItemsCategory] = useState(all);
  const [userSearchInput, setUserSearchInput] = useState('');
  const isAllItems: boolean = itemsCategory === all;
  const itemsCategories: string[] = [lunarCalendar, print, postcard, all];
  const lunarCalendarAngledViewIndex: number = 2;

  function formatLunarCalendarCategory(item: ItemProps, isPreorder?: boolean): string {
    return `${isPreorder ? `${text.preorderAllCaps} ` : ''}${item.lunarCalendarYear} ${item.category}`;
  }

  function formatPrintCategory(item: ItemProps): string {
    const descriptionIndex: number = 1;
    return item.info[descriptionIndex].replace(/,/g, '').split(' ').slice(0, 2).join(' ').toLowerCase();
  }

  function getItemCategory(item: ItemProps, isPreorder?: boolean): string {
    let category = item.category;
    if (item.category === text.lunarCalendar) category = formatLunarCalendarCategory(item, isPreorder);
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
    const isPreorder: boolean = item.id === items.lunarCalendar2024Preorder.id;
    return (
      <Link
        key={`${formatLettersAndNumbers(item.title.slice(0, 8))}-${index}`}
        className="shop-link text-link"
        to={isPreorder ? '/' : formatItemRoutePath(item.category, item.title)}
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
          <div className={`item-card-category${isPreorder ? ' item-preorder-text' : ''}`}>
            {getItemCategory(item, isPreorder)}
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
      <div className="shop-info">
        <div className="items-search">
          <span>
            {`${isAllItems ? itemsCollection.length : filteredItems.length}
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
      <div className="shop-cards">
        {isAllItems ? itemsCollection.map(renderItemCard) : filteredItems.map(renderItemCard)}
      </div>
    </div>
  );
}

export default Shop;
