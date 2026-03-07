import { Link } from 'react-router-dom';

/* Styles */
import '../styles/news.scss';

function News(): JSX.Element {
  return (
    <div className="news">
      <div className="news-text-wrapper">
        <span className="bold">Event</span>: Alec recently spoke
        at <a className="text-link" href="https://providence.worldiaday.org/events/providence-2026" target="_blank">World
        Information Architecture Day Providence</a>,
        discussing <Link className="text-link" to="/moon-space">Moon
        Space</Link>: specifically how he converted his <Link className="text-link" to="/shop/lunar-calendars/sigil-routing">printed
        lunar calendar</Link> into this digital version.
      </div>
    </div>
  );
}

export default News;
