import SideBar from "../sidebar/sidebar";

const Explore = () => {
  return (
    <>
      <SideBar />
      <div className="exlopre">
        <div className="main">
          <div className="exp-title">
            <h1>Events/Exhabits:</h1>
          </div>
          <ul className="main-lis">
            <li className="event-card">
              <img
                className="card-img"
                src="https://virginiahistory.org/sites/default/files/styles/fp_widescreen_590px_breakpoint_/public/1920x1080_%209B6A2932.jpg.webp?itok=4jtUMDmR"
                alt="Event 1"
              />
              <div className="card-info">
                <h3 className="card-title">Historic Exhibit</h3>
                <p className="card-date">September 15, 2024</p>
                <p className="card-description">
                  Explore the rich history of Virginia through this unique
                  exhibit featuring artifacts from the 18th century.
                </p>
              </div>
              <button className="book-now-button">Book Now</button>
            </li>

            <li className="event-card">
              <img
                className="card-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRypdz-MCyj9kCy9KksvWxYctZpo6IF8dtNhw&s"
                alt="Event 2"
              />
              <div className="card-info">
                <h3 className="card-title">Art Gala</h3>
                <p className="card-date">October 10, 2024</p>
                <p className="card-description">
                  Join us for a night of art, music, and culture at the annual
                  Art Gala.
                </p>
              </div>
              <button className="book-now-button">Book Now</button>
            </li>

            <li className="event-card">
              <img
                className="card-img"
                src="https://www.nhb.gov.sg/changichapelmuseum/-/media/ccm2021/home-banner/changi-chapel-and-museum-gallery.jpg?w=1180"
                alt="Event 3"
              />
              <div className="card-info">
                <h3 className="card-title">Science Fair</h3>
                <p className="card-date">November 5, 2024</p>
                <p className="card-description">
                  Discover the latest innovations in science and technology at
                  our annual Science Fair.
                </p>
              </div>
              <button className="book-now-button">Book Now</button>
            </li>
          </ul>
          <div className="exp-title">
            <h1>Top Places:</h1>
          </div>
          <ul className="museum-list">
            <li className="museum-card">
              <div className="museum-card-img-wrapper">
                <img
                  className="museum-card-img"
                  src="https://im.whatshot.in/img/2020/Jul/5-1593657445.jpg"
                  alt="India Gate Museum"
                />
              </div>
              <div className="museum-card-info">
                <h3 className="museum-card-title">India Gate Museum</h3>
                <p className="museum-card-location">New Delhi, India</p>
                <button className="museum-book-now-button">Book Now</button>
              </div>
            </li>
            <li className="museum-card">
              <div className="museum-card-img-wrapper">
                <img
                  className="museum-card-img"
                  src="https://im.whatshot.in/img/2020/Jul/5-1593657445.jpg"
                  alt="India Gate Museum"
                />
              </div>
              <div className="museum-card-info">
                <h3 className="museum-card-title">India Gate Museum</h3>
                <p className="museum-card-location">New Delhi, India</p>
                <button className="museum-book-now-button">Book Now</button>
              </div>
            </li>
            <li className="museum-card">
              <div className="museum-card-img-wrapper">
                <img
                  className="museum-card-img"
                  src="https://im.whatshot.in/img/2020/Jul/5-1593657445.jpg"
                  alt="India Gate Museum"
                />
              </div>
              <div className="museum-card-info">
                <h3 className="museum-card-title">India Gate Museum</h3>
                <p className="museum-card-location">New Delhi, India</p>
                <button className="museum-book-now-button">Book Now</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Explore;
