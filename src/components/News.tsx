function News(): JSX.Element {
  const isAllHomeContentNews: boolean = true;

  return (
    <>
      {isAllHomeContentNews ?
        <div>
          <div className="home-image-container">
            <img
              src="https://www.nevegfest.org/wp-content/uploads/2021/03/NEVF-logo-small.png"
              alt="New England VegFest logo"
            />
          </div>
          <div className="home-text-container">
            <span className="bold">Event</span>: Join Huetown
            at the <a className="text-link" href="https://www.nevegfest.org">2024
            New England VegFest</a> from 12-5pm on Sunday June 9, 2024 in Worcester, MA
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
