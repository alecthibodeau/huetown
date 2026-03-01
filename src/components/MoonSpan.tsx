/* Styles */
import '../styles/moon-span.css';

function MoonSpan(): JSX.Element {
  const breakpointXl: number = 1400;
  const maxSkyLineWidth: number = Math.min(window.innerWidth, breakpointXl);
  const skySegmentsCount: number = Math.floor(maxSkyLineWidth/2 - 8);
  const textMoonSpanSkyLine: string = 'moon-span-sky-line';
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

  function onClickStars(): void {
    const stars: NodeListOf<Element> = document.querySelectorAll(`.${textSkyStar}`);
    stars.forEach(star => {
      star.classList.toggle('twinkle');
    });
  }

  return (
    <div className="moon-span">
      <div className={`${textMoonSpanSkyLine}s`}>
        {Array(76).fill(textMoonSpanSkyLine).map(renderSkyLine)}
      </div>
      <button onClick={onClickStars}>Stars</button>
    </div>
  );
}

export default MoonSpan;
