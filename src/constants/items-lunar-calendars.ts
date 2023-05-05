/* Interfaces */
import ItemProps from '../interfaces/ItemProps';
import LunarPhaseKey from '../interfaces/LunarPhaseKey';
import Thumbnail from '../interfaces/Thumbnail';
import ThumbnailsGroup from '../interfaces/ThumbnailsGroup';

/* Constants */
import images from './images';
import items from './items';
import text from './text';

/* Helpers */
import textFormatting from '../helpers/text-formatting';

const {
  keyNewMoon,
  keyFirstQuarterMoon,
  keyFullMoon,
  keyThirdQuarterMoon
} = images.lunarPhases;

const {
  lunarCalendar2011Previous,
  lunarCalendar2010Previous,
  lunarCalendar2009Previous,
  lunarCalendar2008Previous
} = images.lunarCalendars;

const phases: LunarPhaseKey[] = [
  {
    name: 'new',
    image: keyNewMoon
  },
  {
    name: 'first quarter',
    image: keyFirstQuarterMoon
  },
  {
    name: 'full',
    image: keyFullMoon
  },
  {
    name: 'third quarter',
    image: keyThirdQuarterMoon
  }
];

const lunarCalendarsAvailable: ItemProps[] = [
  items.lunarCalendar2023,
  items.lunarCalendar2022,
  items.lunarCalendar2021,
  items.lunarCalendar2020,
  items.lunarCalendar2019,
  items.lunarCalendar2018,
  items.lunarCalendar2017
];

const lunarCalendarsPrevious: Thumbnail[] = [
  {
    label: `2011 ${text.lunarCalendar}`,
    image: lunarCalendar2011Previous,
    link: 'https://alecthibodeau.com/prints/pineal-grigio'
  },
  {
    label: `2010 ${text.lunarCalendar}`,
    image: lunarCalendar2010Previous,
    link: 'https://alecthibodeau.com/prints/probably-the-earths-core-really-is-the-sky'
  },
  {
    label: `2009 ${text.lunarCalendar}`,
    image: lunarCalendar2009Previous,
    link: 'https://alecthibodeau.com/prints/goes-to-show-you-what-a-moon-can-do'
  },
  {
    label: `2008 ${text.lunarCalendar}`,
    image: lunarCalendar2008Previous,
    link: 'https://alecthibodeau.com/prints/good-librations'
  }
];

function formatThumbnail(item: ItemProps): Thumbnail {
  return {
    label: `${item.lunarCalendarYear} ${item.category}`,
    image: item.featureImage,
    link: textFormatting.formatItemRoutePath(item.category, item.title)
  }
}

const thumbnails: ThumbnailsGroup[] = [
  {
    status: 'available',
    thumbnails: lunarCalendarsAvailable.map(formatThumbnail)
  },
  {
    status: 'previous',
    thumbnails: lunarCalendarsPrevious
  }
];

const itemsLunarCalendars = {
  phases,
  thumbnails
};

export default itemsLunarCalendars;
