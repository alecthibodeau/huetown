import { useEffect, useState } from 'react';

/* Components */
import Item from './Item';

/* Interfaces */
import ItemProps from '../interfaces/ItemProps';

/* Constants */
// import images from '../constants/images';
import items from '../constants/items';
import lunarCalendarsInformation from '../constants/digital-lunar-calendar/lunar-calendars-information';
import lunarPhasesInformation from '../constants/digital-lunar-calendar/lunar-phases-information';

/* Helpers */
import digitalLunarCalendar from '../helpers/digital-lunar-calendar';
import formatDateAndTime from '../helpers/format-date-and-time';
import phasesSVGPaths from '../constants/digital-lunar-calendar/lunar-phases-svg-paths';

const {
  waningCrescentPrefix,
  waningGibbousPrefix,
  waxingGibbousPrefix,
  waxingCrescentPrefix
} = lunarPhasesInformation;

const {
  oneRandomNumber,
  getLunarPhase,
  getBackgroundColor,
  getRandomOrnamentLiveChange
} = digitalLunarCalendar;

function Home(props: { date: Date }): JSX.Element {
  const { formatDayMonthAndDate, formatFullDateAndTime, formatTwentyFourHourTime } = formatDateAndTime;

  const [selectedPhaseDate, setSelectedPhaseDate] = useState<Date>(props.date);

  const featured: ItemProps = items.lunarCalendar2023;
  const isFeatured: boolean = false;
  const colorWhite: string = '#fff';

  useEffect(() => {
    const midnight: string = '00:00:00'
    if (formatTwentyFourHourTime(props.date).slice(-1) === '5') {
      console.log(`%c${formatTwentyFourHourTime(props.date)}`, 'font-size: 20px; background: #0ff; color: #fff');
      console.log(`%c${props.date}`, 'font-size: 20px; background: #00f; color: #fff');
    }
  }, [props.date]);

  function incrementDate(next?: boolean): void {
    const incrementor: number = next ? 1 : -1;
    selectedPhaseDate.setDate(selectedPhaseDate.getDate() + incrementor);
    setSelectedPhaseDate(selectedPhaseDate);
  }

  function getPhaseCategory(phase: string): string {
    const phasePrefix: string = phase.slice(0, 2);
    const intermediate: string = 'intermediate'
    const isWaning: boolean = phasePrefix === waningCrescentPrefix || phasePrefix === waningGibbousPrefix;
    const isWaxing: boolean = phasePrefix === waxingCrescentPrefix || phasePrefix === waxingGibbousPrefix;
    let phaseCategory: string = 'principal';
    if (isWaning) phaseCategory = `${intermediate} waning`;
    if (isWaxing) phaseCategory = `${intermediate} waxing`;
    return phaseCategory;
  }

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
                  viewBox="0 0 24 24"
                  width="120px"
                  height="120px"
                  className={getPhaseCategory(getLunarPhase(selectedPhaseDate))}
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                >
                  <circle
                    fill="#f00" // to be set dynamically
                    cx="12"
                    cy="12"
                    r="12"
                  />
                  <path
                    d={phasesSVGPaths[getLunarPhase(selectedPhaseDate)]}
                    fill={colorWhite}
                    fillOpacity="70%"
                  />
                </svg>
              </div>
              {/* <div className="moon-disc"></div> */}
            </div>
            <div className="date-picker">
              <button onClick={() => incrementDate()}>&lt;</button>
              <span>{formatDayMonthAndDate(selectedPhaseDate)}</span>
              <button onClick={() => incrementDate(true)}>&gt;</button>
            </div>
            {/* <div>
              {`Raw Date is ${props.date}`}
            </div> */}
            <div>
              {`Today is ${formatFullDateAndTime(props.date)}`}
            </div>
            <div>
              {`Current phase is ${getLunarPhase(props.date)}`}
            </div>
            <div>
              {`Selected phase is ${getLunarPhase(selectedPhaseDate)}`}
            </div>
            <div>
              {`Current color is ${getBackgroundColor(props.date)}`}
            </div>
            {/* <div>
              {`Random ornament updating live is: ${getRandomOrnamentLiveChange(props.date)}`}
            </div> */}
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
