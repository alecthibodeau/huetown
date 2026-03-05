/* Interfaces */
import LunarCalendar from '../interfaces/LunarCalendar';
import MoonCloudSVG from '../interfaces/MoonCloudSVG';

function MoonSpanCloud(props: {
  index: number,
  calendar: LunarCalendar,
  svg: MoonCloudSVG
}): JSX.Element {
  return (
    <svg
      className={`moon-cloud moon-cloud-${props.index} is-moon-cloud-not-visible`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={props.svg.viewBox}
    >
      <path fill={props.calendar?.backgroundColor} d={props.svg.pathDrawn} />
    </svg>
  );
}

export default MoonSpanCloud;
