import itemsConstants from './items-constants';
import itemsImages from './items-images';

const category = itemsConstants.categoryLunarCalendar;

const lunarPhases = [
  {
    name: 'new',
    image: itemsImages.phaseNew
  },
  {
    name: 'first quarter',
    image: itemsImages.phaseFirstQuarter
  },
  {
    name: 'full',
    image: itemsImages.phaseFull
  },
  {
    name: 'third quarter',
    image: itemsImages.phaseThirdQuarter
  }
];

const lunarCalendarsAvailable = [
  {
    label: `2023 ${category}`,
    image: itemsImages.lunarCalendar2023Main,
    link: '/'
  },
  {
    label: `2022 ${category}`,
    image: itemsImages.lunarCalendar2022Main,
    link: '/'
  },
  {
    label: `2021 ${category}`,
    image: itemsImages.lunarCalendar2021Main,
    link: '/'
  },
  {
    label: `2020 ${category}`,
    image: itemsImages.lunarCalendar2020Main,
    link: '/'
  },
  {
    label: `2019 ${category}`,
    image: itemsImages.lunarCalendar2019Main,
    link: '/'
  },
  {
    label: `2018 ${category}`,
    image: itemsImages.lunarCalendar2018Main,
    link: '/'
  },
  {
    label: `2017 ${category}`,
    image: itemsImages.lunarCalendar2017Main,
    link: '/'
  }
];

const lunarCalendarsPrevious = [
  {
    label: `2011 ${category}`,
    image: itemsImages.lunarCalendar2011Main,
    link: 'https://alecthibodeau.com/prints/pineal-grigio'
  },
  {
    label: `2010 ${category}`,
    image: itemsImages.lunarCalendar2010Main,
    link: 'https://alecthibodeau.com/prints/probably-the-earths-core-really-is-the-sky'
  },
  {
    label: `2009 ${category}`,
    image: itemsImages.lunarCalendar2009Main,
    link: 'https://alecthibodeau.com/prints/goes-to-show-you-what-a-moon-can-do'
  },
  {
    label: `2008 ${category}`,
    image: itemsImages.lunarCalendar2008Main,
    link: 'https://alecthibodeau.com/prints/good-librations'
  }
];

const thumbnailsLunarCalendars = [
  {
    status: 'available',
    thumbnails: lunarCalendarsAvailable
  },
  {
    status: 'previous',
    thumbnails: lunarCalendarsPrevious
  }
];

export default {
  lunarPhases,
  thumbnailsLunarCalendars
};
