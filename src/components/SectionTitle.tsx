/* Interfaces */
import SectionTitleProps from '../interfaces/SectionTitleProps';

function SectionTitle(props: SectionTitleProps): JSX.Element {
  return(
    <span className="section-title">{props.title} &mdash; </span>
  );
}

export default SectionTitle;
