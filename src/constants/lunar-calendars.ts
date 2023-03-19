/* Constants */
import images from './images';
import items from './items';
import text from './text';

/* Interfaces */
import ItemProps from '../interfaces/ItemProps';
import LunarPhase from '../interfaces/LunarPhase';
import Thumbnail from '../interfaces/Thumbnail';
import ThumbnailsGroup from '../interfaces/ThumbnailsGroup';

/* Helpers */
import helpers from '../helpers/helpers';

const phases: LunarPhase[] = [
  {
    name: 'new',
    image: images.lunarPhases.newMoon
  },
  {
    name: 'first quarter',
    image: images.lunarPhases.firstQuarterMoon
  },
  {
    name: 'full',
    image: images.lunarPhases.fullMoon
  },
  {
    name: 'third quarter',
    image: images.lunarPhases.thirdQuarterMoon
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
    image: images.items.lunarCalendar2011Previous,
    link: 'https://alecthibodeau.com/prints/pineal-grigio'
  },
  {
    label: `2010 ${text.lunarCalendar}`,
    image: images.items.lunarCalendar2010Previous,
    link: 'https://alecthibodeau.com/prints/probably-the-earths-core-really-is-the-sky'
  },
  {
    label: `2009 ${text.lunarCalendar}`,
    image: images.items.lunarCalendar2009Previous,
    link: 'https://alecthibodeau.com/prints/goes-to-show-you-what-a-moon-can-do'
  },
  {
    label: `2008 ${text.lunarCalendar}`,
    image: images.items.lunarCalendar2008Previous,
    link: 'https://alecthibodeau.com/prints/good-librations'
  }
];

function formatThumbnail(item: ItemProps): Thumbnail {
  return {
    label: `${item.lunarCalendarYear} ${item.category}`,
    image: item.featureImage,
    link: helpers.formatItemRoutePath(item.category, item.title)
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

const lunarCalendars = {
  phases,
  thumbnails
};

export default lunarCalendars;
