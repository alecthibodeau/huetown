/* Interfaces */
import LunarPhases from '../interfaces/LunarPhases';

/* Waxing Crescent Phase Paths */
const waxingCrescentEightSteps = {
  xc81: 'm20.7,4.19c1.86,2.07,2.99,4.81,2.99,7.81s-1.13,5.74-2.99,7.81c1.43-2.26,2.26-4.94,2.26-7.81s-.83-5.55-2.26-7.81Z',
  xc82: 'm18.86,2.52c2.93,2.13,4.84,5.58,4.84,9.48s-1.91,7.35-4.84,9.48c2.11-2.58,3.38-5.88,3.38-9.48s-1.27-6.89-3.38-9.48Z',
  xc83: 'm17.52,1.69c3.67,1.97,6.17,5.85,6.17,10.31s-2.5,8.34-6.17,10.31c2.47-2.73,3.98-6.34,3.98-10.31s-1.51-7.59-3.98-10.31Z',
  xc84: 'm16.47,1.19c4.24,1.76,7.22,5.94,7.22,10.81s-2.98,9.05-7.22,10.81c2.57-2.86,4.12-6.65,4.12-10.81s-1.55-7.96-4.12-10.81Z',
  xc85: 'm15.32.78c4.84,1.43,8.37,5.91,8.37,11.22s-3.53,9.79-8.37,11.22c2.6-3.01,4.17-6.93,4.17-11.22S17.92,3.79,15.32.78Z',
  xc86: 'm14.16.5c5.43,1.01,9.54,5.78,9.54,11.5,0,5.72-4.11,10.49-9.54,11.5,2.43-3.19,3.87-7.18,3.87-11.5S16.59,3.69,14.16.5Z',
  xc87: 'm13.1.35c5.94.56,10.6,5.56,10.6,11.65,0,6.09-4.65,11.09-10.6,11.65,1.97-3.43,3.1-7.41,3.1-11.65S15.07,3.78,13.1.35Z',
  xc88: 'm12.19.3c6.37.11,11.5,5.3,11.5,11.7,0,6.4-5.13,11.59-11.5,11.7,1.29-3.66,2-7.6,2-11.7s-.7-8.04-2-11.7Z'
};

const waxingCrescentSevenSteps = {
  xc71: waxingCrescentEightSteps.xc81,
  xc72: 'm18.42,2.22c3.18,2.09,5.27,5.69,5.27,9.78s-2.1,7.69-5.27,9.78c2.26-2.62,3.63-6.04,3.63-9.78s-1.37-7.15-3.63-9.78Z',
  xc73: 'm17.07,1.46c3.92,1.89,6.62,5.9,6.62,10.54s-2.7,8.65-6.62,10.54c2.42-2.82,3.88-6.51,3.88-10.54s-1.46-7.72-3.88-10.54Z',
  xc74: 'm15.57.86c4.71,1.51,8.13,5.93,8.13,11.14s-3.41,9.63-8.13,11.14c2.56-3,4.1-6.89,4.1-11.14S18.13,3.86,15.57.86Z',
  xc75: waxingCrescentEightSteps.xc86,
  xc76: waxingCrescentEightSteps.xc87,
  xc77: waxingCrescentEightSteps.xc88
};

const waxingCrescentSixSteps = {
  xc61: waxingCrescentEightSteps.xc81,
  xc62: 'm18.14,2.04c3.33,2.06,5.56,5.75,5.56,9.96s-2.22,7.9-5.56,9.96c2.33-2.65,3.73-6.14,3.73-9.96s-1.4-7.31-3.73-9.96Z',
  xc63: 'm16.18,1.07c4.39,1.68,7.51,5.94,7.51,10.93s-3.12,9.24-7.51,10.93c2.63-2.87,4.22-6.71,4.22-10.93s-1.59-8.06-4.22-10.93Z',
  xc64: 'm14.53.58c5.24,1.16,9.16,5.83,9.16,11.42s-3.92,10.26-9.16,11.42c2.63-3.07,4.23-7.06,4.23-11.42S17.17,3.65,14.53.58Z',
  xc65: 'm13.31.37c5.84.65,10.38,5.61,10.38,11.63,0,6.02-4.54,10.97-10.38,11.63,2.28-3.3,3.62-7.31,3.62-11.63S15.59,3.68,13.31.37Z',
  xc66: 'm12.56.31c6.2.3,11.13,5.41,11.13,11.69,0,6.27-4.94,11.39-11.13,11.69,1.29-3.66,1.99-7.59,1.99-11.69s-.7-8.03-1.99-11.69Z'
};

const waxingCrescentFiveSteps = {
  xc51: waxingCrescentEightSteps.xc81,
  xc52: waxingCrescentEightSteps.xc83,
  xc53: waxingCrescentSevenSteps.xc74,
  xc54: 'm13.92.46c5.55.92,9.78,5.73,9.78,11.54,0,5.81-4.23,10.62-9.78,11.54,2.25-3.29,3.56-7.26,3.56-11.54S16.17,3.74,13.92.46Z',
  xc55: 'm12.62.32c6.17.32,11.08,5.43,11.08,11.68,0,6.25-4.9,11.36-11.08,11.68,1.48-3.6,2.3-7.55,2.3-11.68S14.1,3.92,12.62.32Z'
};

/* Waxing Gibbous Phase Paths */
const waxingGibbousEightSteps = {
  xg81: 'm23.7,12C23.7,5.54,18.46.3,12,.3c-.07,0-.13,0-.2,0-1.29,3.66-2,7.6-2,11.7s.7,8.04,2,11.7c.07,0,.13,0,.2,0,6.46,0,11.7-5.24,11.7-11.7Z',
  xg82: 'm23.7,12C23.7,5.54,18.46.3,12,.3c-.37,0-.74.02-1.1.05-1.97,3.43-3.1,7.41-3.1,11.65s1.13,8.22,3.1,11.65c.36.03.73.05,1.1.05,6.46,0,11.7-5.24,11.7-11.7Z',
  xg83: 'm23.7,12C23.7,5.54,18.46.3,12,.3c-.74,0-1.46.07-2.16.2-2.43,3.19-3.87,7.18-3.87,11.5s1.44,8.31,3.87,11.5c.7.13,1.42.2,2.16.2,6.46,0,11.7-5.24,11.7-11.7Z',
  xg84: 'm23.7,12C23.7,5.54,18.46.3,12,.3c-1.16,0-2.27.17-3.33.48-2.6,3.01-4.17,6.93-4.17,11.22s1.57,8.21,4.17,11.22c1.05.31,2.17.48,3.33.48,6.46,0,11.7-5.24,11.7-11.7Z',
  xg85: 'm23.7,12C23.7,5.54,18.46.3,12,.3c-1.59,0-3.1.32-4.48.89-2.57,2.86-4.12,6.65-4.12,10.81s1.55,7.96,4.12,10.81c1.38.57,2.89.89,4.48.89,6.46,0,11.7-5.24,11.7-11.7Z',
  xg86: 'm23.7,12C23.7,5.54,18.46.3,12,.3c-2,0-3.88.5-5.53,1.39-2.47,2.73-3.98,6.34-3.98,10.31s1.51,7.59,3.98,10.31c1.65.88,3.53,1.39,5.53,1.39,6.46,0,11.7-5.24,11.7-11.7Z',
  xg87: 'm23.7,12C23.7,5.54,18.46.3,12,.3c-2.56,0-4.93.83-6.86,2.22-2.11,2.58-3.38,5.88-3.38,9.48s1.27,6.89,3.38,9.48c1.93,1.4,4.3,2.22,6.86,2.22,6.46,0,11.7-5.24,11.7-11.7Z',
  xg88: 'm12,23.7c6.46,0,11.7-5.24,11.7-11.7S18.46.3,12,.3c-3.46,0-6.57,1.5-8.71,3.89-1.43,2.26-2.26,4.94-2.26,7.81s.83,5.55,2.26,7.81c2.14,2.39,5.25,3.89,8.71,3.89Z'
};

const waxingGibbousSevenSteps = {
  xg71: waxingGibbousEightSteps.xg81,
  xg72: waxingGibbousEightSteps.xg82,
  xg73: waxingGibbousEightSteps.xg83,
  xg74: 'm23.7,12C23.7,5.54,18.46.3,12,.3c-1.25,0-2.45.2-3.57.56-2.56,3-4.1,6.89-4.1,11.14s1.55,8.14,4.1,11.14c1.13.36,2.33.56,3.57.56,6.46,0,11.7-5.24,11.7-11.7Z',
  xg75: 'm23.7,12C23.7,5.54,18.46.3,12,.3c-1.82,0-3.54.42-5.08,1.16-2.42,2.82-3.88,6.51-3.88,10.54s1.46,7.72,3.88,10.54c1.54.74,3.26,1.16,5.08,1.16,6.46,0,11.7-5.24,11.7-11.7Z',
  xg76: 'm23.7,12C23.7,5.54,18.46.3,12,.3c-2.37,0-4.58.71-6.43,1.92-2.26,2.62-3.63,6.04-3.63,9.78s1.37,7.15,3.63,9.78c1.84,1.22,4.05,1.92,6.43,1.92,6.46,0,11.7-5.24,11.7-11.7Z',
  xg77: waxingGibbousEightSteps.xg88
};

const waxingGibbousSixSteps = {
  xg61: 'm23.7,12C23.7,5.54,18.46.3,12,.3c-.19,0-.38,0-.57.01-1.29,3.66-1.99,7.59-1.99,11.69s.7,8.03,1.99,11.69c.19,0,.38.01.57.01,6.46,0,11.7-5.24,11.7-11.7Z',
  xg62: 'm23.7,12C23.7,5.54,18.46.3,12,.3c-.44,0-.88.03-1.32.07-2.28,3.3-3.62,7.31-3.62,11.63s1.34,8.32,3.62,11.63c.43.05.87.07,1.32.07,6.46,0,11.7-5.24,11.7-11.7Z',
  xg63: 'm23.7,12C23.7,5.54,18.46.3,12,.3c-.87,0-1.72.1-2.54.28-2.63,3.07-4.23,7.06-4.23,11.42s1.59,8.35,4.23,11.42c.82.18,1.67.28,2.54.28,6.46,0,11.7-5.24,11.7-11.7Z',
  xg64: 'm23.7,12C23.7,5.54,18.46.3,12,.3c-1.48,0-2.89.27-4.19.77C5.18,3.94,3.59,7.78,3.59,12s1.59,8.06,4.22,10.93c1.3.5,2.71.77,4.19.77,6.46,0,11.7-5.24,11.7-11.7Z',
  xg65: 'm23.7,12C23.7,5.54,18.46.3,12,.3c-2.25,0-4.36.64-6.14,1.74-2.33,2.65-3.73,6.14-3.73,9.96s1.4,7.31,3.73,9.96c1.79,1.1,3.89,1.74,6.14,1.74,6.46,0,11.7-5.24,11.7-11.7Z',
  xg66: waxingGibbousEightSteps.xg88
};

const waxingGibbousFiveSteps = {
  xg51: 'm23.7,12C23.7,5.54,18.46.3,12,.3c-.21,0-.42,0-.62.02-1.48,3.6-2.3,7.55-2.3,11.68s.82,8.08,2.3,11.68c.21.01.41.02.62.02,6.46,0,11.7-5.24,11.7-11.7Z',
  xg52: 'm23.7,12C23.7,5.54,18.46.3,12,.3c-.65,0-1.3.05-1.92.16-2.25,3.29-3.56,7.26-3.56,11.54s1.32,8.26,3.56,11.54c.63.1,1.27.16,1.92.16,6.46,0,11.7-5.24,11.7-11.7Z',
  xg53: waxingGibbousSevenSteps.xg74,
  xg54: waxingGibbousEightSteps.xg86,
  xg55: waxingGibbousEightSteps.xg88
};

const lunarPhasesSVGPaths: LunarPhases = {

  // principal phase paths
  newMoon: 'm12,.3C5.54.3.3,5.54.3,12s5.24,11.7,11.7,11.7,11.7-5.24,11.7-11.7S18.46.3,12,.3Zm0,23.12C5.69,23.42.58,18.31.58,12S5.69.58,12,.58s11.42,5.11,11.42,11.42-5.11,11.42-11.42,11.42Z',
  firstQuarterMoon: 'm12,.3v23.4c6.46,0,11.7-5.24,11.7-11.7S18.46.3,12,.3Z',
  fullMoon: 'M12,12m-11.7,0a11.7,11.7 0 1 0 23.4,0a11.7,11.7 0 1 0 -23.4,0',
  thirdQuarterMoon: 'm12,.3c0,5.84,0,17.04,0,23.4-6.46,0-11.7-5.24-11.7-11.7,0-6.46,5.24-11.7,11.7-11.7Z',

  // waxing crescent phase paths
  xc81: waxingCrescentEightSteps.xc81,
  xc82: waxingCrescentEightSteps.xc82,
  xc83: waxingCrescentEightSteps.xc83,
  xc84: waxingCrescentEightSteps.xc84,
  xc85: waxingCrescentEightSteps.xc85,
  xc86: waxingCrescentEightSteps.xc86,
  xc87: waxingCrescentEightSteps.xc87,
  xc88: waxingCrescentEightSteps.xc88,

  xc71: waxingCrescentSevenSteps.xc71,
  xc72: waxingCrescentSevenSteps.xc72,
  xc73: waxingCrescentSevenSteps.xc73,
  xc74: waxingCrescentSevenSteps.xc74,
  xc75: waxingCrescentSevenSteps.xc75,
  xc76: waxingCrescentSevenSteps.xc76,
  xc77: waxingCrescentSevenSteps.xc77,

  xc61: waxingCrescentSixSteps.xc61,
  xc62: waxingCrescentSixSteps.xc62,
  xc63: waxingCrescentSixSteps.xc63,
  xc64: waxingCrescentSixSteps.xc64,
  xc65: waxingCrescentSixSteps.xc65,
  xc66: waxingCrescentSixSteps.xc66,

  xc51: waxingCrescentFiveSteps.xc51,
  xc52: waxingCrescentFiveSteps.xc52,
  xc53: waxingCrescentFiveSteps.xc53,
  xc54: waxingCrescentFiveSteps.xc54,
  xc55: waxingCrescentFiveSteps.xc55,

  // waxing gibbous phase paths
  xg81: waxingGibbousEightSteps.xg81,
  xg82: waxingGibbousEightSteps.xg82,
  xg83: waxingGibbousEightSteps.xg83,
  xg84: waxingGibbousEightSteps.xg84,
  xg85: waxingGibbousEightSteps.xg85,
  xg86: waxingGibbousEightSteps.xg86,
  xg87: waxingGibbousEightSteps.xg87,
  xg88: waxingGibbousEightSteps.xg88,

  xg71: waxingGibbousSevenSteps.xg71,
  xg72: waxingGibbousSevenSteps.xg72,
  xg73: waxingGibbousSevenSteps.xg73,
  xg74: waxingGibbousSevenSteps.xg74,
  xg75: waxingGibbousSevenSteps.xg75,
  xg76: waxingGibbousSevenSteps.xg76,
  xg77: waxingGibbousSevenSteps.xg77,

  xg61: waxingGibbousSixSteps.xg61,
  xg62: waxingGibbousSixSteps.xg62,
  xg63: waxingGibbousSixSteps.xg63,
  xg64: waxingGibbousSixSteps.xg64,
  xg65: waxingGibbousSixSteps.xg65,
  xg66: waxingGibbousSixSteps.xg66,

  xg51: waxingGibbousFiveSteps.xg51,
  xg52: waxingGibbousFiveSteps.xg52,
  xg53: waxingGibbousFiveSteps.xg53,
  xg54: waxingGibbousFiveSteps.xg54,
  xg55: waxingGibbousFiveSteps.xg55,

  // waning gibbous phase paths (these are waxing paths to be flipped horizontally on render)
  ng81: waxingGibbousEightSteps.xg88,
  ng82: waxingGibbousEightSteps.xg87,
  ng83: waxingGibbousEightSteps.xg86,
  ng84: waxingGibbousEightSteps.xg85,
  ng85: waxingGibbousEightSteps.xg84,
  ng86: waxingGibbousEightSteps.xg83,
  ng87: waxingGibbousEightSteps.xg82,
  ng88: waxingGibbousEightSteps.xg81,

  ng71: waxingGibbousSevenSteps.xg77,
  ng72: waxingGibbousSevenSteps.xg76,
  ng73: waxingGibbousSevenSteps.xg75,
  ng74: waxingGibbousSevenSteps.xg74,
  ng75: waxingGibbousSevenSteps.xg73,
  ng76: waxingGibbousSevenSteps.xg72,
  ng77: waxingGibbousSevenSteps.xg71,

  ng61: waxingGibbousSixSteps.xg66,
  ng62: waxingGibbousSixSteps.xg65,
  ng63: waxingGibbousSixSteps.xg64,
  ng64: waxingGibbousSixSteps.xg63,
  ng65: waxingGibbousSixSteps.xg62,
  ng66: waxingGibbousSixSteps.xg61,

  ng51: waxingGibbousFiveSteps.xg55,
  ng52: waxingGibbousFiveSteps.xg54,
  ng53: waxingGibbousFiveSteps.xg53,
  ng54: waxingGibbousFiveSteps.xg52,
  ng55: waxingGibbousFiveSteps.xg51,

  // waning crescent phase paths (these are waxing paths to be flipped horizontally on render)
  nc81: waxingCrescentEightSteps.xc88,
  nc82: waxingCrescentEightSteps.xc87,
  nc83: waxingCrescentEightSteps.xc86,
  nc84: waxingCrescentEightSteps.xc85,
  nc85: waxingCrescentEightSteps.xc84,
  nc86: waxingCrescentEightSteps.xc83,
  nc87: waxingCrescentEightSteps.xc82,
  nc88: waxingCrescentEightSteps.xc81,

  nc71: waxingCrescentSevenSteps.xc77,
  nc72: waxingCrescentSevenSteps.xc76,
  nc73: waxingCrescentSevenSteps.xc75,
  nc74: waxingCrescentSevenSteps.xc74,
  nc75: waxingCrescentSevenSteps.xc73,
  nc76: waxingCrescentSevenSteps.xc72,
  nc77: waxingCrescentSevenSteps.xc71,

  nc61: waxingCrescentSixSteps.xc66,
  nc62: waxingCrescentSixSteps.xc65,
  nc63: waxingCrescentSixSteps.xc64,
  nc64: waxingCrescentSixSteps.xc63,
  nc65: waxingCrescentSixSteps.xc62,
  nc66: waxingCrescentSixSteps.xc61,

  nc51: waxingCrescentFiveSteps.xc55,
  nc52: waxingCrescentFiveSteps.xc54,
  nc53: waxingCrescentFiveSteps.xc53,
  nc54: waxingCrescentFiveSteps.xc52,
  nc55: waxingCrescentFiveSteps.xc51
};

export default lunarPhasesSVGPaths;
