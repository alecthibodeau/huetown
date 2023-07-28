interface LunarPhases {
  newMoon: string;
  firstQuarterMoon: string;
  fullMoon: string;
  thirdQuarterMoon: string;
  [lunarPhaseName: string]: string;
}

export default LunarPhases;
