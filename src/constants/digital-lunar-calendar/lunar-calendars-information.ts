import days2023 from './days/days-2023';

interface LunarCalendarsInformation {
  [year: number]: {
    backgroundColor: string;
    ornaments: string[];
    days: {
      [day: number]: string;
    };
  };
}

const lunarCalendarsInformation: LunarCalendarsInformation = {
  2023: {
    backgroundColor: 'cyan',
    ornaments: ['bunny', 'birdy'],
    days: days2023
  },
  2024: {
    backgroundColor: 'brown',
    ornaments: ['froggy', 'doggy'],
    days: { 101: '' }
  },
};

export default lunarCalendarsInformation;
