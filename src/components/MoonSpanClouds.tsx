/* Components */
import MoonSpanCloud from './MoonSpanCloud';

/* Interfaces */
import LunarCalendar from '../interfaces/LunarCalendar';
import MoonCloudSVG from '../interfaces/MoonCloudSVG';

/* Constants */
import svgPaths from '../constants/svg-paths';

/* Styles */
import '../styles/moon-span-clouds.css';

function MoonSpanClouds( props: {
  calendar: LunarCalendar,
  isVisible: boolean
}): JSX.Element {

  function renderMoonCloud(moonCloudSVG: MoonCloudSVG, index: number): JSX.Element {
    return (
      <MoonSpanCloud
        key={`moon-cloud-${index}`}
        calendar={props.calendar}
        index={index}
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
