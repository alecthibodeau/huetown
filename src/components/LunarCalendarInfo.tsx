/* Constants */
import itemsImages from '../constants/items-images';

/* Interfaces */
import ItemProps from '../interfaces/ItemProps';
import Phase from '../interfaces/Phase';

function LunarCalendarInfo(props: ItemProps) {

  const lunarPhases = [
    {
      name: 'new',
      image: itemsImages.phaseNew
    },
    {
      name: 'first quarter',
      image: itemsImages.phaseFirstQuarter
    },
    {
      name: 'full',
      image: itemsImages.phaseFull
    },
    {
      name: 'third quarter',
      image: itemsImages.phaseThirdQuarter
    }
  ];

  function renderlunarPhase(phase: Phase, index: number) {
    return (
      <div key={index + phase.name + 'moon'}  className="phase-info">
        <img src={phase.image} alt={phase.name + ' moon'}/>
        <div className="phase-text">
          {phase.name + ' moon'}
        </div>
      </div>
    )
  }

  return (
    <div className="item-more-info">
      <div className="more-info-block">
        <span className="lunar-calendar-title ital">{props.itemTitle}</span> is a letterpress-printed lunar calendar designed and drawn by Alec Thibodeau (me!),
        chronicling all phases of the moon for <span className="lunar-calendar-year">{props.itemLunarCalendarYear}</span>.
        From an edition of <span className="print-edition">{props.itemPrintEdition}</span> prints <span className="lunar-calendar-title ital">{props.itemTitle}</span> continues Alec's ongoing lunar calendar series,
        which features ornate illustrations framing an annual cycle of moon shapes.
        As with each of Alec's previous lunar calendars this piece measures 19" x 11.75" (a golden rectangle) and is expertly printed by Dan Wood
        and his team at <a className="text-link" href="https://www.dwriletterpress.net">DWRI&nbsp;Letterpress</a>.
      </div>
      <div className="more-info-block">
        The <span className="lunar-calendar-year">{props.itemLunarCalendarYear}</span> lunar calendar comprises new drawings and year-specific lunar phase information.
        Each calendar is printed on <span className="lunar-calendar-paper-info">{props.itemLunarCalendarPaperInfo}</span>, blind-debossed with Alec's name and the print shop's name &mdash; and hand numbered and signed by Alec. Each calendar ships in archival wrap with an accompanying information sheet inside an eco-friendly fiberboard protective tube (reusable, recycled, recyclable) with crimped ends.
      </div>
      <div className="more-info-block">
        The calendar's lunar phase chart is calibrated for any location in the Eastern Time Zone and is accurate to within a day for anywhere in the Northern Hemisphere. The chart also matches lunar cycles in the Southern Hemisphere: but with inverted shapes. <span className="lunar-calendar-location">{props.itemLunarCalendarLocation}</span>
      </div>
      <div className="more-info-block">
        Custom moon illustrations portray all principal lunar phases (New Moon, First Quarter Moon, Full Moon and Third Quarter Moon) plus all intermediate crescent and gibbous phases. For months with less than 31 days, drawings of clouds occupy the extra spaces. <a className="text-link" href="#featureImage">Order now.</a>
      </div>
      <div className="lunar-phases" id="lunarPhases">
        {lunarPhases.map(renderlunarPhase)}
      </div>
    </div>
  );
};

export default LunarCalendarInfo;