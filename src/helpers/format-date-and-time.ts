/* Helpers */
import formatText from './format-text';

const { formatPadStart } = formatText;

const amPeriod: string = 'am';
const pmPeriod: string = 'pm';
const twelveHours: number = 12;

const daysOfTheWeek: { [day: number]: string } = {
  1: 'sun',
  2: 'mon',
  3: 'tue',
  4: 'wed',
  5: 'thu',
  6: 'fri',
  7: 'sat'
};

const monthsOfTheYear: { [month: number]: string } = {
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
};

function formatDayOfTheWeek(date: Date): string {
  return daysOfTheWeek[date.getDay() + 1].toUpperCase();
}

function formatMonth(date: Date): string {
  const month: string = monthsOfTheYear[date.getMonth() + 1];
  return month.charAt(0).toUpperCase() + month.substring(1);
}

function formatTwentyFourHourTime(date: Date): string {
  const hoursTwentyFourHourClock: number = date.getHours();
  const minutes: string = formatPadStart(date.getMinutes());
  const seconds: string = formatPadStart(date.getSeconds());
  const twentyFourHourTime: string = `${hoursTwentyFourHourClock}:${minutes}:${seconds}`;
  return twentyFourHourTime;
}

function formatTwelveHourTime(twentyFourHourTime: string): string {
  const hoursTwentyFourHourClock: number = +twentyFourHourTime.substring(0, twentyFourHourTime.indexOf(':'));
  const minutesAndSeconds: string = twentyFourHourTime.slice(-6);
  const hoursTwelveHourClock: number
    = (hoursTwentyFourHourClock > twelveHours) || (hoursTwentyFourHourClock === 0)
    ? Math.abs(hoursTwentyFourHourClock - twelveHours)
    : hoursTwentyFourHourClock;
  const isAm: boolean = hoursTwentyFourHourClock < twelveHours;
  const timePeriod: string = isAm ? amPeriod : pmPeriod;
  return `${hoursTwelveHourClock}${minutesAndSeconds} ${timePeriod}`;
}

function formatDayMonthAndDate(date: Date): string {
  const dayOfTheWeek: string = formatDayOfTheWeek(date);
  const month: string = formatMonth(date).toUpperCase();
  const dateNumber: number = date.getDate();
  return `${dayOfTheWeek} ${month} ${dateNumber}`;
}

function formatMonthDateAndYear(date: Date): string {
  const month: string = formatMonth(date).toUpperCase();
  const dateNumber: number = date.getDate();
  const year: number = date.getFullYear();
  return `${month} ${dateNumber} ${year}`;
}

function formatFullDateAndTime(date: Date): string {
  const dayMonthAndDate: string = formatDayMonthAndDate(date);
  const year: number = date.getFullYear();
  const twentyFourHourTime: string = formatTwentyFourHourTime(date);
  const twelveHourTime: string = formatTwelveHourTime(twentyFourHourTime);
  return `${dayMonthAndDate}, ${year} at ${twelveHourTime}`;
}

function isSameDate(dateOne: Date, dateTwo: Date): boolean {
  return formatMonthDateAndYear(dateOne) === formatMonthDateAndYear(dateTwo);
}

function getEasternTimeZoneDate(date: Date): Date {
  const newYorkDateTimeString = date.toLocaleString('en-US', { timeZone: 'America/New_York' });
  return new Date(newYorkDateTimeString);
}

const formatDateAndTime = {
  formatDayMonthAndDate,
  formatFullDateAndTime,
  formatTwentyFourHourTime,
  isSameDate,
  getEasternTimeZoneDate
};

export default formatDateAndTime;
