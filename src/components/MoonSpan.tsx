/* Styles */
import '../styles/moon-span.css';

function MoonSpan(): JSX.Element {

  function renderSkyLine(moonSpanSkyLine: string, index: number): JSX.Element {
    return (
      <div key={`${moonSpanSkyLine}-${index}`} className={moonSpanSkyLine}></div>
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
