/* Interfaces */
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

const principalPhases: LunarPhases = {
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
            lunarPhases[phaseCode] = phaseCode;
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
