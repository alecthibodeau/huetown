const allButLettersAndNumbers: RegExp = /[^a-zA-Z0-9]/g;
const allButLettersNumbersAndSpaces: RegExp = /[^a-zA-Z0-9\s]/g;
const allSpaces: RegExp = /\s+/g;

function formatPadStart(unit: number): string {
  return unit.toString().padStart(2, '0');
}

function formatDashes(text: string): string {
  return text.toLowerCase().replace(allButLettersNumbersAndSpaces, '').replace(allSpaces, '-');
}

function formatLettersAndNumbers(text: string): string {
  return text.replace(allButLettersAndNumbers, '');
}

function formatItemRoutePath(category: string, title: string): string {
  return `/shop/${formatDashes(category)}s/${formatDashes(title)}`;
}

const formatText = {
  allSpaces,
  formatPadStart,
  formatDashes,
  formatLettersAndNumbers,
  formatItemRoutePath
};

export default formatText;
