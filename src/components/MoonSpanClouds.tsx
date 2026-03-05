/* Components */
import MoonSpanCloud from './MoonSpanCloud';

/* Interfaces */
import LunarCalendar from '../interfaces/LunarCalendar';
import MoonCloudSVG from '../interfaces/MoonCloudSVG';

/* Constants */
import svgPaths from '../constants/svg-paths';

/* Styles */
import '../styles/moon-span-clouds.css';

function MoonSpanClouds( props: { isVisible: boolean, calendar: LunarCalendar }): JSX.Element {

  function renderMoonCloud(moonCloudSVG: MoonCloudSVG, index: number): JSX.Element {
    return (
      <MoonSpanCloud
        index={index}
        key={`moon-cloud-${index}`}
        calendar={props.calendar}
        isVisible={props.isVisible}
        svg={moonCloudSVG}
      />
    );
  }

  return (
    <div className="moon-clouds">
      {svgPaths.moonClouds.map(renderMoonCloud)}
    </div>
  );
}

export default MoonSpanClouds;
