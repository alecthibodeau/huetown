import { Link } from 'react-router-dom';

/* Styles */
import '../styles/news.scss';

function News(): JSX.Element {
  return (
    <div className="news">
      <div className="news-text-wrapper">
        <span className="bold">Event</span>: Join Huetown
        at the <a className="text-link"
        href="https://www.rivegfest.com" target="_blank">2026
        Rhode Island VegFest</a> on February 21st &amp; 22nd. Yes, prints of
        the <Link className="text-link" to="/shop/lunar-calendars/sigil-routing">2026 lunar
        calendar</Link> will be available there.
      </div>
    </div>
  );
}

export default News;
