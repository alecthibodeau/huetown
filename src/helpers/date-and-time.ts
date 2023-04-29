const amPeriod = 'am';
const pmPeriod = 'pm';
const twelveHours = 12;

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

export default getCurrentDateAndTime;
