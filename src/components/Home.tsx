/* Components */
import Item from './Item';

/* Interfaces */
import ItemProps from '../interfaces/ItemProps';

/* Constants */
// import images from '../constants/images';
import items from '../constants/items';
import lunarCalendarsInformation from '../constants/digital-lunar-calendar/lunar-calendars-information';

/* Helpers */
import digitalLunarCalendar from '../helpers/digital-lunar-calendar';
import formatDateAndTime from '../helpers/format-date-and-time';

const {
  oneRandomNumber,
  getCurrentLunarPhase,
  getCurrentColor,
  getRandomOrnamentLiveChange
} = digitalLunarCalendar;

function Home(props: { date: Date }): JSX.Element {
  const featured: ItemProps = items.lunarCalendar2023;
  const isFeatured: boolean = false;
  const colorWhite: string = '#fff';

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
          {/* <div className="home-image-container">
            <a href="https://www.instagram.com/p/Cq-889Wrfbt">
              <img src={images.framedPiece} alt="framed ink drawing by Alec Thibodeau"/>
            </a>
          </div>
          <div className="home-text-container">
            <span className="bold">Recently:</span> <span>Alec donated this <a className="text-link" href="https://www.instagram.com/p/Cq-889Wrfbt">original ink drawing</a> to <a className="text-link" href="https://newurbanarts.org/about">New Urban Arts</a> for the organization's 26th Annual Birthday Bash and Silent Art Auction.</span>
          </div> */}
          <div>
            <div className="date-container">
              <div className="phase-container">
                <svg
                  viewBox="0 0 100 100"
                  width="120"
                  height="120"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                >
                  <path
                    // d="m60 8a48 52 0 0 0 0 105l0-105z"

                    d="M 50 8 A 1 1 0 0 0 50 92"
                    // d="M 50 8 A 1 1 0 0 1 50 92"

                    fill={colorWhite}
                    fillOpacity="70%"
                  />
                </svg>
              </div>
              <div className="moon-disc"></div>
            </div>
            <div>
              {`Today is ${formatDateAndTime(props.date)}`}
            </div>
            <div>
              {`Current phase is ${getCurrentLunarPhase(props.date)}`}
            </div>
            <div>
              {`Current color is ${getCurrentColor(props.date)}`}
            </div>
            <div>
              {`Random ornament updating live is: ${getRandomOrnamentLiveChange(props.date)}`}
            </div>
            <div>
              {`Random ornament fixed is: ${lunarCalendarsInformation[props.date.getFullYear()].ornaments[oneRandomNumber]}`}
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default Home;
