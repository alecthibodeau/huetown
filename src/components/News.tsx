/* Constants */
import images from '../constants/images';

/* Styles */
import '../styles/news.scss';

function News(): JSX.Element {
  const isWithImage: boolean = true;

  return (
    <div className={`news ${isWithImage ? 'with-image' : ''}`}>
      {
        isWithImage
        ? <img className="news-image" src={images.news.diurnalWatch} alt="Diurnal Watch drawing"/>
        : null
      }
      <div className="news-text-wrapper">
        <span className="bold">Recently</span>: This ink drawing
        by Alec was sold at the <a className="text-link"
        href="https://newurbanarts.org/event/nuas-29th-birthday-bash-silent-art-auction-jurassic-arts"
        target="_blank">New Urban Arts 29th Birthday Bash + Silent Art Auction</a>. The
        event raised funds for programming for young people.
      </div>
    </div>
  );
}

export default News;
