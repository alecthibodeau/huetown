import React, { useEffect } from 'react';

/* Constants */
import text from '../constants/text-moon-span';

/* Styles */
import '../styles/moon-span-sky-lines.css';

const MoonSpanSkyLines = React.memo(() => {
  const textMoonSpanSkyLine: string = 'moon-span-sky-line';
  const textMoonSpanSkySegment: string = 'moon-span-sky-segment';

  useEffect(() => {
    const textResize: string = 'resize';
    const handleResize = () => {
      const rows: NodeListOf<Element> = document.querySelectorAll(`.${textMoonSpanSkyLine}`);
      const currentSkySegmentCount: number = rows[0].childElementCount;
      const segmentsDifference: number = getSkySegmentCount() - currentSkySegmentCount;
      if (segmentsDifference > 0) {
        rows.forEach(row => {
          for (let i = 0; i < segmentsDifference; i++) {
            const skySegment: HTMLDivElement = document.createElement('div');
            skySegment.className = getSkySegmentClass();
            row.appendChild(skySegment);
          }
        });
      } else {
        rows.forEach(row => {
          for (let i = 0; i < Math.abs(segmentsDifference); i++) {
            row.lastChild?.remove();
          }
        });
      }
    };
    window.addEventListener(textResize, handleResize);
    return () => window.removeEventListener(textResize, handleResize);
  }, []);

  function getSkySegmentCount(): number {
    const whiteSpaceAtSides: number = 8;
    const breakpointXl: number = 1400;
    const maxSkyLineWidth: number = Math.min(window.innerWidth, breakpointXl);
    return Math.floor(maxSkyLineWidth/2 - whiteSpaceAtSides);
  }

  function getSkySegmentClass(): string {
    let segmentClass: string = '';
    if (!Math.floor(Math.random() * 60)) {
      const isStarsAnimationVisible: boolean = !!document.querySelector(`.${text.twinkle}`);
      const starFadeFrequency: number = Math.floor(Math.random() * 5) + 1;
      segmentClass = `${text.skyStar} ${text.skyStar}-${starFadeFrequency}${isStarsAnimationVisible ? ` ${text.twinkle}` : ''}`;
    }
    return `${segmentClass} ${textMoonSpanSkySegment}`;
  }

  function renderSkySegment(skyLineIndex: number, skySegmentIndex: number): JSX.Element {
    return (
      <div
        key={`${textMoonSpanSkySegment}-${skyLineIndex}-${skySegmentIndex}`}
        className={getSkySegmentClass()}
      >
      </div>
    );
  }

  function renderSkyLine(moonSpanSkyLine: string, index: number): JSX.Element {
    return (
      <div key={`${moonSpanSkyLine}-${index}`} className={moonSpanSkyLine}>
        {Array(getSkySegmentCount()).fill(index).map(renderSkySegment)}
      </div>
    );
  }

  return (
    <div className={`${textMoonSpanSkyLine}s`}>
      {Array(76).fill(textMoonSpanSkyLine).map(renderSkyLine)}
    </div>
  );
});

export default MoonSpanSkyLines;
