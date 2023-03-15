interface ItemProps {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  featureImage: string;
  info: string[];
  price: number;
  printEdition?: number;
  detailImages?: string[];
  lunarCalendarYear?: number;
  lunarCalendarPaper?: string;
  lunarCalendarLocation?: string;
}

export default ItemProps;
