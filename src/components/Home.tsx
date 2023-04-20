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
      :
        <div className="home-content">
          <div>
            <a href="https://www.instagram.com/p/Cq-889Wrfbt">
              <img src={images.framedPiece} alt="framed ink drawing by Alec Thibodeau"/>
            </a>
          </div>
          <div>
            <span className="bold">Recently:</span> <span>Alec donated this <a className="text-link" href="https://www.instagram.com/p/Cq-889Wrfbt">original ink drawing</a> to <a className="text-link" href="https://newurbanarts.org">New Urban Arts</a> for the organization's 26th Annual Birthday Bash and Silent Art Auction.</span>
          </div>
        </div>
      }
    </>
  );
}

export default Home;
