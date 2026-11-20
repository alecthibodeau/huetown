/* Constants */
import images from '../constants/images';

/* Styles */
import '../styles/news.scss';

function News(): JSX.Element {
  const isWithImage: boolean = false;

  return (
    <div className={`news ${isWithImage ? 'with-image' : ''}`}>
      {
        isWithImage
        ? <img className="news-image" src={images.news.diurnalWatch} alt="Diurnal Watch drawing"/>
        : null
      }
      <div className="news-text-wrapper">
        Check back here soon for the 2027 lunar calendar!
      </div>
    </div>
  );
}

export default News;
