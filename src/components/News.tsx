/* Constants */
import images from '../constants/images';

function News(): JSX.Element {
  return (
    <div>
      <div className="home-image-container">
        <a href="https://www.instagram.com/p/Cq-889Wrfbt">
          <img src={images.framedPiece} alt="framed ink drawing by Alec Thibodeau"/>
        </a>
      </div>
      <div className="home-text-container">
        <span className="bold">Recently:</span> <span>Alec donated this <a className="text-link" href="https://www.instagram.com/p/Cq-889Wrfbt">original ink drawing</a> to <a className="text-link" href="https://newurbanarts.org/about">New Urban Arts</a> for the organization's 26th Annual Birthday Bash and Silent Art Auction.</span>
      </div>
    </div>
  );
}

export default News;
