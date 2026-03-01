/* Styles */
import '../styles/moon-span.css';

function MoonSpan(): JSX.Element {
  const breakpointXl: number = 1400;
  const maxSkyLineWidth: number = Math.min(window.innerWidth, breakpointXl);
  const skySegmentsCount: number = Math.floor(maxSkyLineWidth/2 - 8);

  function renderSkySegment(skyLineIndex: number, skySegmentIndex: number): JSX.Element {
    const skySegment: string = 'moon-span-sky-segment';
    let segmentClass: string = '';
    if (!Math.floor(Math.random() * 60)) {
      const starFadeFrequency: number = Math.floor(Math.random() * 5) + 1;
      segmentClass = `star-${starFadeFrequency} twinkle `;
    }
    return (
      <div
        key={`${skySegment}-${skyLineIndex}-${skySegmentIndex}`}
        className={`${segmentClass}${skySegment}`}
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
    <div className="moon-span">
      <div className="moon-span-sky-lines">
        {Array(76).fill('moon-span-sky-line').map(renderSkyLine)}
      </div>
    </div>
  );
}

export default MoonSpan;
