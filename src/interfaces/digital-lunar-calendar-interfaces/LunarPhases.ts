interface LunarPhases {
  newMoon: string;
  firstQuarterMoon: string;
  fullMoon: string;
  thirdQuarterMoon: string;
  [phaseName: string]: string;
}

export default LunarPhases;
