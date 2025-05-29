const allButLettersAndNumbers: RegExp = /[^a-zA-Z0-9]/g;
const allButLettersNumbersAndSpaces: RegExp = /[^a-zA-Z0-9\s]/g;
const allSpaces: RegExp = /\s+/g;

function formatPadStart(unit: number): string {
  return unit.toString().padStart(2, '0');
}

function formatDashCase(text: string): string {
  return text.toLowerCase().replace(allButLettersNumbersAndSpaces, '').replace(allSpaces, '-');
}

function formatLettersAndNumbers(text: string): string {
  return text.replace(allButLettersAndNumbers, '');
}

function formatItemRoutePath(category: string, title: string): string {
  return `/shop/${formatDashCase(category)}s/${formatDashCase(title)}`;
}

const formatText = {
  allSpaces,
  formatPadStart,
  formatDashCase,
  formatLettersAndNumbers,
  formatItemRoutePath
};

export default formatText;
