import { useState } from 'react';
import { Link } from 'react-router-dom';

/* Interfaces */
import ItemProps from '../interfaces/ItemProps';

/* Constants */
import itemsCollection from '../constants/items-collection';
import itemsSpecificInfo from '../constants/items-specific-info';
import text from '../constants/text';

/* Helpers */
import formatText from '../helpers/format-text';

/* Styles */
import '../styles/shop.scss';

function Shop(): JSX.Element {
  const { formatDashes, formatLettersAndNumbers, formatItemRoutePath } = formatText;
  const [itemsCategory, setItemsCategory] = useState<string>(text.all);
  const [userSearchInput, setUserSearchInput] = useState<string>('');
  const isAllItems: boolean = itemsCategory === text.all;
  const itemsCategoriesForButtons: string[] = getItemsCategories(itemsCollection);
  const lunarCalendarAngledViewIndex: number = 2;

  const filteredItems: ItemProps[] = itemsCollection.filter((item) => {
    return itemsCategory ? item.category === itemsCategory : isTextMatching(item);
  });

  function isTextMatching(item: ItemProps): boolean {
    const searchInput: string = userSearchInput.toLowerCase();
    const itemTitle: string = item.title.toLowerCase();
    const itemCategory: string = getItemCategory(item).toLowerCase();
    const itemPriceWithDollarSign: string = `$${item.price}`;
    const textsToCheck: string[] = [itemTitle, itemCategory, itemPriceWithDollarSign];
    return textsToCheck.some(item => item.includes(searchInput));
  }

  function formatItemPrice(itemPrice: number): string {
    return Number.isInteger(itemPrice) ? itemPrice.toString() : itemPrice.toFixed(2);
  }

  function getItemsCategories(items: ItemProps[]): string[] {
    const categories: string[] = [];
    for (const item of items) {
      if (!categories.includes(item.category)) categories.push(item.category);
    }
    if (categories.length > 1) categories.push(text.all);
    return categories;
  }

  function formatLunarCalendarCategory(item: ItemProps, isPreorder?: boolean): string {
    return `${isPreorder ? `${text.preorderAllCaps} ` : ''}${item.lunarCalendarYear} ${item.category}`;
  }

  function formatPrintCategory(itemInfo: string[]): string {
    const descriptionIndex: number = 1;
    return itemInfo[descriptionIndex].replace(/,/g, '').split(' ').slice(0, 2).join(' ').toLowerCase();
  }

  function getItemCategory(item: ItemProps, isPreorder?: boolean): string {
    let category = item.category;
    if (item.category === text.lunarCalendar) category = formatLunarCalendarCategory(item, isPreorder);
    if (item.category === text.print) category = formatPrintCategory(item.info);
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

  function renderCategoryButton(category: string, index: number): JSX.Element {
    return (
      <button
        key={`${category}-${index}`}
        className={`category-button${category === itemsCategory ? ' selected' : ''}`}
        onClick={() => handleCategoryChange(category)}
      >
        {`${category}${category === text.all ? '' : 's'}`}
      </button>
    )
  }

  function renderItemCard(item: ItemProps, index: number): JSX.Element {
    const isPreorder: boolean = item.id === itemsSpecificInfo.preorderId;
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
            {item.isSoldOut
              ? <span className="item-sold-out">{text.itemSoldOut}</span>
              : `$${formatItemPrice(item.price)}`}
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
            item${filteredItems.length === 1 || itemsCollection.length === 1 ? '' : 's'}`}
          </span>
          {itemsCollection.length && itemsCollection.length !== 1 ?
            <div className="filter-container">
              <span>filter by title, category or price:</span>
              <input
                type="text"
                value={userSearchInput}
                onChange={handleSearchInputChange}
                onKeyDown={handleKeyDown}
              />
            </div>
          : null}
        </div>
        {itemsCategoriesForButtons.length > 1 ?
          <div className={`category-buttons-container buttons-length-${itemsCategoriesForButtons.length}`}>
            {itemsCategoriesForButtons.map(renderCategoryButton)}
          </div>
        : null}
      </div>
      <div className="shop-cards">
        {isAllItems ? itemsCollection.map(renderItemCard) : filteredItems.map(renderItemCard)}
      </div>
    </div>
  );
}

export default Shop;
