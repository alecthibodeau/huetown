interface ItemProps {
  itemId: string;
  itemCategory: string;
  itemTitle: string;
  itemSubtitle: string;
  itemImageFront: string;
  // itemInfoOne: string;
  // itemInfoTwo: string;
  // itemInfoThree: string;
  // itemInfoFour: string;
  itemInfo: string[];
  itemPrice: number;
  itemPrintEdition?: number;
  itemLunarCalendarYear?: number;
  itemLunarCalendarPaperInfo?: string;
  itemLunarCalendarLocation?: string;
  itemDetailImages: string[];
}

export default ItemProps;
