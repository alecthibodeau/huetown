import LunarPhases from '../../interfaces/digital-lunar-calendar-interfaces/LunarPhases';

const waxingCrescentPrefix: string = 'xc';
const waxingGibbousPrefix: string = 'xg';
const waningGibbousPrefix: string = 'ng';
const waningCrescentPrefix: string = 'nc';

const intermediatePhasesPrefixes = [
  waxingCrescentPrefix,
  waxingGibbousPrefix,
  waningGibbousPrefix,
  waningCrescentPrefix
];

const principalPhases = {
  // Note: The values here could be replaced with variables for image imports
  newMoon: 'newMoon',
  firstQuarterMoon: 'firstQuarterMoon',
  fullMoon: 'fullMoon',
  thirdQuarterMoon: 'thirdQuarterMoon'
};

const principalPhasesNextCluster: LunarPhases = {
  newMoon: waxingCrescentPrefix,
  firstQuarterMoon: waxingGibbousPrefix,
  fullMoon: waningGibbousPrefix,
  thirdQuarterMoon: waningCrescentPrefix
};

const phaseClusterLengths: number[] = [8, 7, 6, 5];

function setIntermediateLunarPhases(lunarPhases: LunarPhases): LunarPhases {
  intermediatePhasesPrefixes.forEach(
    (prefix) => {
      for (const clusterLength of phaseClusterLengths) {
        for (let i = 1; i <= clusterLength; i++) {
          const phaseCodeKey = prefix + clusterLength + i;
          // Note: The values here could be replaced with variables for image imports
          const phaseCodeValue = prefix + clusterLength + i;
          lunarPhases[phaseCodeKey] = phaseCodeValue;
        }
      }
    }
  );
  console.log('lunarPhases: ', lunarPhases);
  return lunarPhases;
}

const lunarPhases: LunarPhases = setIntermediateLunarPhases(principalPhases);

export default {
  principalPhasesNextCluster,
  lunarPhases
};
