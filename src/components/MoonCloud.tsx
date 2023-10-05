/* Interfaces */
import LunarCalendar from '../interfaces/LunarCalendar';
import MoonCloudSVG from '../interfaces/MoonCloudSVG';

function MoonCloud(props: {
  isVisible: boolean,
  calendar: LunarCalendar,
  svg: MoonCloudSVG
}): JSX.Element {
  return (
    <svg
      className={`cloud ${props.svg.name} ${props.isVisible ? '' : 'is-not-visible'}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={props.svg.viewBox}
    >
      <path fill={props.calendar?.backgroundColor} d={props.svg.pathDrawn} />
    </svg>
  );
}

export default MoonCloud;
