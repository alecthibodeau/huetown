import phasesTable from "../constants/lunar-phases-table";

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

function getCurrentDateAndTime(): string {
  const today = new Date();
  const day = String(today.getDate());
  const month = String(today.getMonth() + 1);
  const year = today.getFullYear();
  const hoursTwentyFourHourClock = today.getHours()
  const timePeriod = hoursTwentyFourHourClock <= twelveHours ? amPeriod : pmPeriod;
  const hours = timePeriod === amPeriod ? hoursTwentyFourHourClock : hoursTwentyFourHourClock - twelveHours;
  const time = `${hours}:${setPadStart(today.getMinutes())}:${setPadStart(today.getSeconds())}`;
  return `${month}/${day}/${year} at ${time} ${timePeriod}`;
}

function getCurrentLunarPhase(): string {
  const today = new Date();
  const day = String(today.getDate());
  const month = String(today.getMonth() + 1);
  const year = today.getFullYear();
  return phasesTable[year][+(`${month}${setPadStart(+day)}`)];
}

const dateAndTime = {
  getCurrentDateAndTime,
  getCurrentLunarPhase
}

export default dateAndTime;

