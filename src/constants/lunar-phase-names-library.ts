/* Interfaces */
import LunarPhases from '../interfaces/LunarPhases';

const principalPhases: LunarPhases = {
  newMoon: 'newMoon',
  firstQuarterMoon: 'firstQuarterMoon',
  fullMoon: 'fullMoon',
  thirdQuarterMoon: 'thirdQuarterMoon'
};

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

function addIntermediatePhasesToPrincipalPhases(lunarPhases: LunarPhases): LunarPhases {
  const phaseClusterLengths: number[] = [8, 7, 6, 5];
  intermediatePhasesPrefixes.forEach(
    (prefix) => {
      phaseClusterLengths.forEach(
        (clusterLength) => {
          for (let i = 1; i <= clusterLength; i++) {
            const phaseCode: string = prefix + clusterLength + i;
            lunarPhases[phaseCode] = phaseCode;
          }
        }
      );
    }
  );
  return lunarPhases;
}

const lunarPhases: LunarPhases = addIntermediatePhasesToPrincipalPhases(principalPhases);

const lunarPhaseNamesLibrary = {
  lunarPhases,
  waningCrescentPrefix,
  waningGibbousPrefix,
  waxingCrescentPrefix,
  waxingGibbousPrefix
}

export default lunarPhaseNamesLibrary;
