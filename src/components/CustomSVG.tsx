/* Interfaces */
import CustomSVGProps from '../interfaces/CustomSVGProps';

/* Constants */
import variables from '../constants/_variables';

function CustomSVG(props: CustomSVGProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      fill={props.svgFillColor || variables.colorSVGDefaultFill}
      viewBox={props.svgViewBox}
    >
      <title>{props.name}</title>
      {props.svgPaths}
    </svg>
  );
}

export default CustomSVG;
