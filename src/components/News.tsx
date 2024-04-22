function News(): JSX.Element {
  const isAllHomeContentNews: boolean = false;

  return (
    <>
      {isAllHomeContentNews ?
        <div>
          <div className="home-image-container">
            <img alt="home feature"/>
          </div>
          <div className="home-text-container">
            <span>text</span>
          </div>
        </div> :
        <div>
          <span className="bold">Event</span>: Join Huetown
          at the <a className="text-link" href="https://www.nevegfest.org">2024
          New England VegFest</a> from 12-5pm on Sunday June 9, 2024 in Worcester, MA
        </div>
      }
    </>
  );
}

export default News;
