/* Styles */
import '../styles/moon-span.css';

function MoonSpan(): JSX.Element {
  const skySegmentsCount: number = Math.floor(window.innerWidth/2 - 5);

  function renderSkySegment(skyLineIndex: number, skySegmentIndex: number): JSX.Element {
    const skySegment: string = 'moon-span-sky-segment';
    let skySegmentClass = '';
    return (
      <div
        key={`${skySegment}-${skyLineIndex}-${skySegmentIndex}`}
        className={`${skySegment}${skySegmentClass} ${skySegmentIndex}`}
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
