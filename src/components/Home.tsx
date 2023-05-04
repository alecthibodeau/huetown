/* Components */
import Item from './Item';

/* Interfaces */
import ItemProps from '../interfaces/ItemProps';

/* Constants */
import images from '../constants/images';
import items from '../constants/items';

/* Helpers */
import dateAndTime from '../helpers/date-and-time';
import lunarPhasesTable from '../constants/lunar-phases-table';

function Home(props: { date: Date }): JSX.Element {
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
            <span className="bold">Recently:</span> <span>Alec donated this <a className="text-link" href="https://www.instagram.com/p/Cq-889Wrfbt">original ink drawing</a> to <a className="text-link" href="https://newurbanarts.org/about">New Urban Arts</a> for the organization's 26th Annual Birthday Bash and Silent Art Auction.</span>
          </div>
          <div>
            <div>
              {`Current date and time is ${dateAndTime.formatDateAndTime(props.date)}`}
            </div>
            <div>
              {`Current phase is ${dateAndTime.getCurrentLunarPhase(props.date)}`}
            </div>
            <div>
              {`Current color is ${dateAndTime.getCurrentColor(props.date)}`}
            </div>
            <div>
              {`Random ornament updating live is: ${dateAndTime.getRandomOrnamentLiveChange(props.date)}`}
            </div>
            <div>
              {`Random ornament fixed is: ${lunarPhasesTable[props.date.getFullYear()].ornaments[dateAndTime.oneRandomNumber]}`}
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default Home;
