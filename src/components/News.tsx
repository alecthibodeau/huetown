function News(): JSX.Element {
  const isAllHomeContentNews: boolean = false;

  return (
    <>
      {isAllHomeContentNews ?
        <div>
          <div className="home-image-container">
            <img alt="home image"/>
          </div>
          <div className="home-text-container">
            <span>text</span>
          </div>
        </div> :
        <div>
          <span className="bold">Event</span>: Join Huetown
          at <a className="text-link" href="https://unbound.risd.edu">RISD
          Unbound</a> from 11am–5pm on Saturday April 6, 2024 in Providence, Rhode Island
        </div>
      }
    </>
  );
}

export default News;
