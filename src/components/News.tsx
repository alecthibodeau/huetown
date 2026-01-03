/* Styles */
import '../styles/news.scss';

function News(): JSX.Element {
  return (
    <div className="news">
      <div className="news-text-wrapper">
        <span className="bold">Event</span>: Join Huetown
        February 21st &amp; 22nd at the <a className="text-link"
        href="https://www.rivegfest.com" target="_blank">2026
        Rhode Island VegFest</a> in Providence, Rhode Island.
      </div>
    </div>
  );
}

export default News;
