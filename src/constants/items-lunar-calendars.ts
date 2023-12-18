/* Interfaces */
import ItemProps from '../interfaces/ItemProps';
import ItemLunarPhaseKey from '../interfaces/ItemLunarPhaseKey';
import Thumbnail from '../interfaces/Thumbnail';
import ThumbnailsGroup from '../interfaces/ThumbnailsGroup';

/* Constants */
import images from './images';
import items from './items';
import itemsSpecificInfo from './items-specific-info';
import text from './text';

/* Helpers */
import formatText from '../helpers/format-text';

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

const phases: ItemLunarPhaseKey[] = [
  {
    name: text.lunarPhaseNew,
    image: keyNewMoon
  },
  {
    name: text.lunarPhaseFirstQuarter,
    image: keyFirstQuarterMoon
  },
  {
    name: text.lunarPhaseFull,
    image: keyFullMoon
  },
  {
    name: text.lunarPhaseThirdQuarter,
    image: keyThirdQuarterMoon
  }
];

const lunarCalendarsAvailable: ItemProps[] = [
  items.lunarCalendar2024,
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

function formatThumbnailForAvailable(item: ItemProps): Thumbnail {
  const isPreorderThumbnail: boolean = item.id === itemsSpecificInfo.preorderId;
  return {
    label: `${item.lunarCalendarYear} ${isPreorderThumbnail ? text.preorderAllCaps : item.category}`,
    image: item.featureImage,
    link: formatText.formatItemRoutePath(item.category, item.title),
    isPreorder: isPreorderThumbnail
  }
}

const thumbnails: ThumbnailsGroup[] = [
  {
    status: 'available',
    thumbnails: lunarCalendarsAvailable.map(formatThumbnailForAvailable)
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
