/* Interfaces */
import LunarPhases from '../../interfaces/digital-lunar-calendar-interfaces/LunarPhases';

/* Principal Phases Paths */
const newMoonPath = 'm12,.3C5.54.3.3,5.54.3,12s5.24,11.7,11.7,11.7,11.7-5.24,11.7-11.7S18.46.3,12,.3Zm0,23.12C5.69,23.42.58,18.31.58,12S5.69.58,12,.58s11.42,5.11,11.42,11.42-5.11,11.42-11.42,11.42Z';
const firstQuarterMoonPath = 'm12,.3v23.4c6.46,0,11.7-5.24,11.7-11.7S18.46.3,12,.3Z';
const fullMoonPath = 'M12,12m-11.7,0a11.7,11.7 0 1 0 23.4,0a11.7,11.7 0 1 0 -23.4,0';
const thirdQuarterMoonPath = 'm12,.3c0,5.84,0,17.04,0,23.4-6.46,0-11.7-5.24-11.7-11.7,0-6.46,5.24-11.7,11.7-11.7Z';

/* Waxing Crescent Phases Paths */
const xcA = 'm23.7,12c0-3.06-1.18-5.84-3.11-7.92,1.54,2.26,2.45,4.98,2.45,7.92s-.91,5.67-2.45,7.92c1.92-2.08,3.11-4.86,3.11-7.92Z';
const xcB = 'm18.2,2.09c2.53,2.54,4.1,6.04,4.1,9.91s-1.56,7.37-4.1,9.91c3.3-2.07,5.5-5.73,5.5-9.91s-2.2-7.84-5.5-9.91Z';
const xcC = 'm16.48,1.19c2.59,2.58,4.24,6.46,4.24,10.81s-1.65,8.23-4.24,10.81c4.24-1.76,7.22-5.93,7.22-10.81s-2.98-9.05-7.22-10.81Z';
const xcD = 'm15.26.77c2.86,2.56,4.71,6.63,4.71,11.23s-1.85,8.66-4.7,11.22c4.86-1.42,8.42-5.9,8.42-11.22S20.13,2.19,15.26.77Z';
const xcE = 'm14.41.55c2.39,2.54,3.95,6.72,3.95,11.45s-1.56,8.9-3.95,11.45c5.31-1.11,9.29-5.81,9.29-11.45S19.71,1.66,14.41.55Z';
const xcF = 'm12.88.35c2.93,2.52,4.86,6.8,4.86,11.65s-1.93,9.13-4.86,11.65c6.05-.45,10.82-5.49,10.82-11.65S18.93.8,12.88.35Z';
const xcG = 'm12,.3s-.05,0-.07,0c2.52,2.52,4.19,6.81,4.19,11.7s-1.66,9.18-4.19,11.7c.02,0,.05,0,.07,0,6.46,0,11.7-5.24,11.7-11.7S18.46.3,12,.3Z';
const xcH = 'm12,.3s-.03,0-.04,0c1.26,2.51,2.09,6.81,2.09,11.7s-.83,9.18-2.09,11.7c.01,0,.03,0,.04,0,6.46,0,11.7-5.24,11.7-11.7S18.46.3,12,.3Z';

/* Waxing Gibbous Phases Paths */
const xgA = 'm12.04.3c-1.26,2.51-2.09,6.81-2.09,11.7s.83,9.18,2.09,11.7c6.44-.02,11.66-5.25,11.66-11.7S18.48.33,12.04.3Z';
const xgB = 'm23.7,12C23.7,5.56,18.5.34,12.07.3c-2.52,2.52-4.19,6.81-4.19,11.7s1.66,9.18,4.19,11.7c6.43-.04,11.63-5.26,11.63-11.7Z';
const xgC = 'm23.7,12C23.7,5.54,18.46.3,12,.3c-.83,0-1.63.09-2.41.25-2.39,2.54-3.95,6.72-3.95,11.45s1.56,8.9,3.95,11.45c.78.16,1.58.25,2.41.25,6.46,0,11.7-5.24,11.7-11.7Z';
const xgD = 'm12,.3c-1.19,0-2.33.18-3.41.51-2.28,2.56-3.75,6.62-3.75,11.19s1.48,8.63,3.75,11.19c1.08.33,2.22.51,3.41.51,6.46,0,11.7-5.24,11.7-11.7S18.46.3,12,.3Z';
const xgE = 'm23.7,12C23.7,5.54,18.46.3,12,.3c-1.13,0-2.22.17-3.26.47-2.86,2.56-4.71,6.63-4.71,11.23s1.85,8.66,4.7,11.22c1.04.3,2.14.47,3.28.47,6.46,0,11.7-5.24,11.7-11.7Z';
const xgF = 'm12,.3c-1.59,0-3.1.32-4.48.89C4.93,3.77,3.28,7.65,3.28,12s1.65,8.23,4.24,10.81c1.38.57,2.89.89,4.48.89,6.46,0,11.7-5.24,11.7-11.7S18.46.3,12,.3Z';
const xgG = 'm12,.3c-2.28,0-4.4.66-6.2,1.79C3.27,4.63,1.7,8.13,1.7,12s1.56,7.37,4.1,9.91c1.8,1.13,3.92,1.79,6.2,1.79,6.46,0,11.7-5.24,11.7-11.7S18.46.3,12,.3Z';
const xgH = 'm12,.3c-3.4,0-6.45,1.46-8.59,3.78C1.86,6.33.95,9.06.95,12s.91,5.67,2.45,7.92c2.14,2.32,5.19,3.78,8.59,3.78,6.46,0,11.7-5.24,11.7-11.7S18.46.3,12,.3Z';

const phasesSVGPaths: LunarPhases = {
  // principal
  newMoon: newMoonPath,
  firstQuarterMoon: firstQuarterMoonPath,
  fullMoon: fullMoonPath,
  thirdQuarterMoon: thirdQuarterMoonPath,

  // waxing crescent
  xc81: xcA,
  xc82: xcB,
  xc83: xcC,
  xc84: xcD,
  xc85: xcE,
  xc86: xcF,
  xc87: xcG,
  xc88: xcH,

  xc71: xcA,
  xc72: xcB,
  xc73: xcC,
  xc74: xcD,
  xc75: xcE,
  xc76: xcG,
  xc77: xcH,

  xc61: xcA,
  xc62: xcB,
  xc63: xcC,
  xc64: xcE,
  xc65: xcG,
  xc66: xcH,

  xc51: xcA,
  xc52: xcC,
  xc53: xcE,
  xc54: xcG,
  xc55: xcH,

  // waxing gibbous
  xg81: xgA,
  xg82: xgB,
  xg83: xgC,
  xg84: xgD,
  xg85: xgE,
  xg86: xgF,
  xg87: xgG,
  xg88: xgH,

  xg71: xgA,
  xg72: xgB,
  xg73: xgC,
  xg74: xgE,
  xg75: xgF,
  xg76: xgG,
  xg77: xgH,

  xg61: xgA,
  xg62: xgB,
  xg63: xgC,
  xg64: xgE,
  xg65: xgG,
  xg66: xgH,

  xg51: xgA,
  xg52: xgB,
  xg53: xgC,
  xg54: xgE,
  xg55: xgH,

  // waning gibbous
  ng81: xgH,
  ng82: xgG,
  ng83: xgF,
  ng84: xgE,
  ng85: xgD,
  ng86: xgC,
  ng87: xgB,
  ng88: xgA,

  ng71: xgH,
  ng72: xgG,
  ng73: xgF,
  ng74: xgE,
  ng75: xgC,
  ng76: xgB,
  ng77: xgA,

  ng61: xgH,
  ng62: xgG,
  ng63: xgE,
  ng64: xgC,
  ng65: xgB,
  ng66: xgA,

  ng51: xgH,
  ng52: xgE,
  ng53: xgC,
  ng54: xgB,
  ng55: xgA,

  // waning crescent
  nc81: xcH,
  nc82: xcG,
  nc83: xcF,
  nc84: xcE,
  nc85: xcD,
  nc86: xcC,
  nc87: xcB,
  nc88: xcA,

  nc71: xcH,
  nc72: xcG,
  nc73: xcE,
  nc74: xcD,
  nc75: xcC,
  nc76: xcB,
  nc77: xcA,

  nc61: xcH,
  nc62: xcG,
  nc63: xcE,
  nc64: xcC,
  nc65: xcB,
  nc66: xcA,

  nc51: xcH,
  nc52: xcG,
  nc53: xcE,
  nc54: xcC,
  nc55: xcA
};

export default phasesSVGPaths;
