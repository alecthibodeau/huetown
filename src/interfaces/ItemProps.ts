interface ItemProps {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  imageFront: string;
  info: string[];
  price: number;
  printEdition?: number;
  detailImages?: string[];
  lunarCalendarYear?: number;
  lunarCalendarPaperInfo?: string;
  lunarCalendarLocation?: string;
}

export default ItemProps;
