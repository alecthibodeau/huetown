/* Constants */
import svgPaths from '../constants/svg-paths';
import text from '../constants/text-moon-span';

/* Interfaces */
import LunarCalendar from '../interfaces/LunarCalendar'

/* Helpers */
import digitalLunarCalendar from '../helpers/digital-lunar-calendar';

function MoonSpanPhaseWrapper(props: { selectedPhaseDate: Date, selectedCalendar: LunarCalendar }): JSX.Element {
  const { getLunarPhase, getLunarPhaseCategory } = digitalLunarCalendar;
  return (
    <div className="moon-span-phase-wrapper">
      <svg
        viewBox="-13 -13 50 50"
        width="280px"
        height="280px"
        className={getLunarPhaseCategory(getLunarPhase(props.selectedPhaseDate))}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <circle
          fill={props.selectedCalendar?.backgroundColor}
          cx="12"
          cy="12"
          r="12.25"
        />
        <path
          d={svgPaths.lunarPhasesSVGPaths[getLunarPhase(props.selectedPhaseDate)]}
          fill={text.colorWhite}
          fillOpacity="80%"
        />
      </svg>
    </div>
  );
}

export default MoonSpanPhaseWrapper;
