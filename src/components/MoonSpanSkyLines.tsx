import React from 'react';

const MoonSpanSkyLines = React.memo(() => {
  const breakpointXl: number = 1400;
  const maxSkyLineWidth: number = Math.min(window.innerWidth, breakpointXl);
  const skySegmentsCount: number = Math.floor(maxSkyLineWidth/2 - 8);
  const textMoonSpanSkySegment: string = 'moon-span-sky-segment';
  const textSkyStar: string = 'sky-star';

  function renderSkySegment(skyLineIndex: number, skySegmentIndex: number): JSX.Element {
    let segmentClass: string = '';
    if (!Math.floor(Math.random() * 60)) {
      const starFadeFrequency: number = Math.floor(Math.random() * 5) + 1;
      segmentClass = `${textSkyStar} ${textSkyStar}-${starFadeFrequency} `;
    }
    return (
      <div
        key={`${textMoonSpanSkySegment}-${skyLineIndex}-${skySegmentIndex}`}
        className={`${segmentClass}${textMoonSpanSkySegment}`}
      >
      </div>
    );
  }

  function renderSkyLine(moonSpanSkyLine: string, index: number): JSX.Element {
    return (
      <div key={`${moonSpanSkyLine}-${index}`} className={moonSpanSkyLine}>
        {Array(skySegmentsCount).fill(index).map(renderSkySegment)}
      </div>
    );
  }

  return (
    <div className="moon-span-sky-lines">
      {Array(76).fill('moon-span-sky-line').map(renderSkyLine)}
    </div>
  );
});

export default MoonSpanSkyLines;
