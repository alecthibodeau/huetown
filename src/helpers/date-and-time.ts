import phasesTable from '../constants/lunar-phases-table';

const oneRandomNumber = Math.floor(Math.random() * 2);

const amPeriod = 'am';
const pmPeriod = 'pm';
const twelveHours = 12;

// interface Months {
//   [key: number]: string;
// }

// const months: Months = {
//   1: 'jan',
//   2: 'feb',
//   3: 'mar',
//   4: 'apr',
//   5: 'may',
//   6: 'jun',
//   7: 'jul',
//   8: 'aug',
//   9: 'sep',
//   10: 'oct',
//   11: 'nov',
//   12: 'dec'
// }

function setPadStart (timeUnit: number): string {
  return timeUnit.toString().padStart(2, '0');
}

function formatDateAndTime(date: Date): string {
  const hoursTwentyFourHourClock = date.getHours();
  const timePeriod = hoursTwentyFourHourClock <= twelveHours ? amPeriod : pmPeriod;
  const hours = timePeriod === amPeriod ? hoursTwentyFourHourClock : hoursTwentyFourHourClock - twelveHours;
  const time = `${hours}:${setPadStart(date.getMinutes())}:${setPadStart(date.getSeconds())}`;
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} at ${time} ${timePeriod}`;
}

function getCurrentLunarPhase(date: Date): string {
  return phasesTable[date.getFullYear()].dates[+((date.getMonth() + 1) + setPadStart(date.getDate()))];
}

function getCurrentColor(date: Date): string {
  return phasesTable[date.getFullYear()].backgroundColor;
}

function getRandomOrnamentLiveChange(date: Date): string {
  return phasesTable[date.getFullYear()].ornaments[Math.floor(Math.random() * 2)];
}

const dateAndTime = {
  oneRandomNumber,
  formatDateAndTime,
  getCurrentLunarPhase,
  getCurrentColor,
  getRandomOrnamentLiveChange
}

export default dateAndTime;
