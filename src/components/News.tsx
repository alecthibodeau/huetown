/* Styles */
import '../styles/news.scss';

function News(): JSX.Element {
  return (
    <div className="news">
      <div className="news-text-wrapper">
        <span className="bold">Event</span>: Join Huetown
        November 22nd &amp; 23rd at the <a className="text-link"
        href="https://goodtrademakersmarket.com" target="_blank">2025
        Good Trade Makers Market</a> in Providence, Rhode Island.
      </div>
    </div>
  );
}

export default News;
