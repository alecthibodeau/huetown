import constants from './constants';
import images from './images';

const category = constants.text.lunarCalendar;

const lunarPhases = [
  {
    name: 'new',
    image: images.phases.newMoon
  },
  {
    name: 'first quarter',
    image: images.phases.firstQuarterMoon
  },
  {
    name: 'full',
    image: images.phases.fullMoon
  },
  {
    name: 'third quarter',
    image: images.phases.thirdQuarterMoon
  }
];

const lunarCalendarsAvailable = [
  {
    label: `2023 ${category}`,
    image: images.lunarCalendar2023Main,
    link: '/'
  },
  {
    label: `2022 ${category}`,
    image: images.lunarCalendar2022Main,
    link: '/'
  },
  {
    label: `2021 ${category}`,
    image: images.lunarCalendar2021Main,
    link: '/'
  },
  {
    label: `2020 ${category}`,
    image: images.lunarCalendar2020Main,
    link: '/'
  },
  {
    label: `2019 ${category}`,
    image: images.lunarCalendar2019Main,
    link: '/'
  },
  {
    label: `2018 ${category}`,
    image: images.lunarCalendar2018Main,
    link: '/'
  },
  {
    label: `2017 ${category}`,
    image: images.lunarCalendar2017Main,
    link: '/'
  }
];

const lunarCalendarsPrevious = [
  {
    label: `2011 ${category}`,
    image: images.lunarCalendar2011Main,
    link: 'https://alecthibodeau.com/prints/pineal-grigio'
  },
  {
    label: `2010 ${category}`,
    image: images.lunarCalendar2010Main,
    link: 'https://alecthibodeau.com/prints/probably-the-earths-core-really-is-the-sky'
  },
  {
    label: `2009 ${category}`,
    image: images.lunarCalendar2009Main,
    link: 'https://alecthibodeau.com/prints/goes-to-show-you-what-a-moon-can-do'
  },
  {
    label: `2008 ${category}`,
    image: images.lunarCalendar2008Main,
    link: 'https://alecthibodeau.com/prints/good-librations'
  }
];

const thumbnails = [
  {
    status: 'available',
    thumbnails: lunarCalendarsAvailable
  },
  {
    status: 'previous',
    thumbnails: lunarCalendarsPrevious
  }
];

const itemsLunarCalendarsConstants = {
  lunarPhases,
  thumbnails
};

export default itemsLunarCalendarsConstants;
