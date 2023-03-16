const allButLettersNumbers = /[^a-zA-Z0-9]/g;
const allButLettersNumbersAndSpaces = /[^a-zA-Z0-9\s]/g;
const allSpaces = /\s+/g;

function formatLettersAndNumbers(text: string): string {
  return text.replace(allButLettersNumbers, '');
}

function formatPathSegment(text: string): string {
  return text.toLowerCase().replace(allButLettersNumbersAndSpaces, '').replace(allSpaces, '-');
}

function formatItemRoutePath(category: string, title: string): string {
  return `/items/${formatPathSegment(category)}s/${formatPathSegment(title)}`;
}

const helpers = {
  allSpaces,
  formatItemRoutePath,
  formatLettersAndNumbers
};

export default helpers;

