/* Helpers */
import textFormatting from './text-formatting';

const { formatPadStart } = textFormatting;

const amPeriod = 'am';
const pmPeriod = 'pm';
const twelveHours = 12;

interface Months {
  [key: number]: string;
}

const months: Months = {
  1: 'jan',
  2: 'feb',
  3: 'mar',
  4: 'apr',
  5: 'may',
  6: 'jun',
  7: 'jul',
  8: 'aug',
  9: 'sep',
  10: 'oct',
  11: 'nov',
  12: 'dec'
}

function formatMonth (text: string): string {
  return text.charAt(0).toUpperCase() + text.substring(1);
}

function formatDateAndTime(date: Date): string {
  const hoursTwentyFourHourClock = date.getHours();
  const timePeriod = hoursTwentyFourHourClock <= twelveHours ? amPeriod : pmPeriod;
  const hours = timePeriod === amPeriod ? hoursTwentyFourHourClock : hoursTwentyFourHourClock - twelveHours;
  const time = `${hours}:${formatPadStart(date.getMinutes())}:${formatPadStart(date.getSeconds())}`;
  return `${formatMonth(months[date.getMonth() + 1])} ${date.getDate()}, ${date.getFullYear()} at ${time} ${timePeriod}`;
}

const dateAndTime = {
  formatDateAndTime,
}

export default dateAndTime;
