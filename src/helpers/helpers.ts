function formatPathSegment(text: string): string {
  return text.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-');
}

function formatItemRoutePath(category: string, title: string): string {
  return `/items/${formatPathSegment(category)}s/${formatPathSegment(title)}`;
}

export default formatItemRoutePath;
