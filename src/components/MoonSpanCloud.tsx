/* Interfaces */
import LunarCalendar from '../interfaces/LunarCalendar';
import MoonCloudSVG from '../interfaces/MoonCloudSVG';

function MoonSpanCloud(props: {
  calendar: LunarCalendar,
  index: number,
  isVisible: boolean
  svg: MoonCloudSVG,
}): JSX.Element {
  return (
    <svg
      className={`moon-cloud moon-cloud-${props.index}${props.isVisible ? '' : ' is-moon-cloud-not-visible'}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={props.svg.viewBox}
    >
      <path fill={props.calendar?.backgroundColor} d={props.svg.pathDrawn} />
    </svg>
  );
}

export default MoonSpanCloud;
