/* Components */
import Item from './Item';

/* Interfaces */
import ItemProps from '../interfaces/ItemProps';

/* Constants */
import images from '../constants/images';
import items from '../constants/items';

function Home(): JSX.Element {
  const featured: ItemProps = items.lunarCalendar2023;
  const isFeatured: boolean = false;

  return (
    <>
      {isFeatured ?
        <Item
          id={featured.id}
          category={featured.category}
          title={featured.title}
          subtitle={featured.subtitle}
          featureImage={featured.featureImage}
          info={featured.info}
          price={featured.price}
          printEdition={featured.printEdition}
          detailImages={featured.detailImages}
          description={featured.description}
          lunarCalendarYear={featured.lunarCalendarYear}
          lunarCalendarPaper={featured.lunarCalendarPaper}
          lunarCalendarLocation={featured.lunarCalendarLocation}
        />
      : <div className="home-content">
          <a href="https://newurbanarts.org/event/26">
            <img
              src="https://newurbanarts.org/wp-content/uploads/2017/03/NUA_header-12.jpg"
              alt="New Urban Arts Birthday Bash"
            />
          </a>
          <div>
            <span className="bold">Event:</span> <span>Bid on an original ink drawing by Alec Thibodeau at the 26th Annual Birthday Bash and Silent Art Auction for <a className="text-link" href="https://newurbanarts.org/event/26/">New Urban Arts</a> on Friday, April 14, from 7-10pm in Providence, Rhode Island.</span>
          </div>
          <div className="framed-piece">
            <img src={images.framedPiece} alt="Alec Thibodeau ink drawing, framed"/>
          </div>
        </div>}
    </>
  );
}

export default Home;
