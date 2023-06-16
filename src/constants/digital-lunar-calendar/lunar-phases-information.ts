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

const principalPhases: LunarPhases = { // The values here could be replaced with image variables
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
      phaseClusterLengths.forEach(
        (clusterLength) => {
          for (let i = 1; i <= clusterLength; i++) {
            const phaseCode = prefix + clusterLength + i;
            const phaseCodeKey = phaseCode;
            const phaseCodeValue = phaseCode; // The value here could be replaced with an image variable
            lunarPhases[phaseCodeKey] = phaseCodeValue;
          }
        }
      );
    }
  );
  console.log('lunarPhases: ', lunarPhases);
  return lunarPhases;
}

const lunarPhases: LunarPhases = setIntermediateLunarPhases(principalPhases);

export default {
  waxingCrescentPrefix,
  waxingGibbousPrefix,
  waningGibbousPrefix,
  waningCrescentPrefix,
  principalPhasesNextCluster,
  lunarPhases
};
