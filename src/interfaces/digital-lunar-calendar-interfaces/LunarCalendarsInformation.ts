import PhaseDates from './PhaseDates';

interface LunarCalendarsInformation {
  [year: number]: {
    backgroundColor: string;
    ornaments: string[];
    phaseDates: PhaseDates;
  };
}

export default LunarCalendarsInformation;
