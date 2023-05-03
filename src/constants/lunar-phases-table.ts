interface LunarPhasesTable {
  [year: number]: {
    backgroundColor: string;
    ornaments: string[];
    dates: {
      [date: number]: string;
    };
  };
}

const lunarPhasesTable: LunarPhasesTable = {
  2023: {
    backgroundColor: 'blue',
    ornaments: ['bunny', 'birdy'],
    dates: {
      101: 'banana',
      503: 'pineapple'
    }
  }
};

export default lunarPhasesTable;
