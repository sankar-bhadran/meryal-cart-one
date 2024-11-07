import React from "react";
import { Container } from "react-bootstrap";
import "../../styles/home.css";
import "../../styles/general.css";
import { Tabs } from "antd";
// import sliderImageOne from "../../Assets/cracker-thumbnail.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";
import crackerThumbnail from "../../Assets/cracker-thumbnail.png";
import crackingUnitThumbnail from "../../Assets/cracking-unit-thumbnail.png";
import leapOfFateThumbnail from "../../Assets/leap-of-fate-thumbnail.png";
import reformerThumbnail from "../../Assets/alsfuna-thumbnail.png";
import section12Image from "../../Assets/b2723711-c81f-41dd-9069-5fa2d8044a22.jpeg";

const images = [
  crackerThumbnail,
  crackingUnitThumbnail,
  leapOfFateThumbnail,
  reformerThumbnail,
];

const HomePage = () => {
  var settings = {
    infinite: true,
    // speed: 1000,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    // autoplay: true,
    // autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const items = [
    {
      key: "1",
      label: (
        <div className="tab-icon-wrapper">
          <ion-icon
            name="bicycle-outline"
            class="custom-icon hydrated"
          ></ion-icon>
          Rides
        </div>
      ),
      path: "/apple",
    },
    {
      key: "2",
      label: (
        <div className="tab-icon-wrapper">
          <ion-icon
            name="flash-outline"
            class="custom-icon hydrated"
          ></ion-icon>
          Popular
        </div>
      ),
      //   icon: <AndroidOutlined />,
      path: "/android",
    },

    {
      key: "3",
      label: (
        <div className="tab-icon-wrapper">
          <ion-icon
            name="ticket-outline"
            class="custom-icon hydrated"
          ></ion-icon>
          Attractions
        </div>
      ),
      //   icon: <AndroidOutlined />,
      path: "/android",
    },
  ];

  //   const handleTabChange = (key) => {
  //     const selectedTab = items.find((item) => item.key === key);
  //     if (selectedTab) {
  //       Navigate(selectedTab.path);
  //     }
  //   };

  return (
    <>
      <Container>
        <div className="section-hero">
          <div className="hero">
            <h3>Adventure Awaits: Share the Splash!</h3>
            <h1 className="heading-primary">Welcome to Meryal</h1>
            <p className="hero-description">
              Prepare yourself for an extraordinary experience that blends
              unforgettable adventures with the authentic spirit of Qatar.
            </p>
            <a href="#" className="btn">
              Buy Online and Save
              <ion-icon
                name="arrow-forward-outline"
                class="hydrated"
              ></ion-icon>
            </a>
          </div>
        </div>
      </Container>
      <Container>
        <div className="section-discover-meryal">
          <div className="commoncontainer">
            <h2 className="heading-discovermeryal">Discover Meryal</h2>
            <p className="para-discovermeryal">
              Ready to experience the magic? Let the adventure begin!
            </p>
          </div>
        </div>
      </Container>
      <Container>
        <div className="section-tabs">
          <div className="commoncontainer">
            <Tabs
              defaultActiveKey="1"
              centered
              className="custom-tabs"
              //   onChange={handleTabChange}
              items={items.map(({ key, label, icon }) => ({
                key,
                label,
                icon,
              }))}
            />
          </div>
        </div>
      </Container>
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <article key={index} className="card__article">
              <img src={image} alt="" className="image" />
              <div className="slider-para">
                <div className="default-content">
                  <h2>Hello World</h2>
                  <div className="default-content">
                    <p>Heelele</p>
                  </div>
                </div>
                <span>
                  <ion-icon
                    name="arrow-forward-outline"
                    class="hydrated"
                  ></ion-icon>
                </span>
              </div>
            </article>
          ))}
        </Slider>
      </div>
      <div className="parent-container">
        <div className="img-box">
          <div className="img-text">
            <div className="img-div">Meryal Entry Ticket & Reservations</div>
            <h1 className="img-primary">Park Entrances Ticket Booking </h1>
            <p className="img-para">
              Experience all rides with "All Day" Pass Entry Ticket
            </p>
            <button className="img-btn">
              GET ALL DAY TICKET
              <ion-icon
                name="arrow-forward-outline"
                class="hydrated"
              ></ion-icon>
            </button>
          </div>
        </div>
      </div>

      <Container>
        <div className="section-parkattractions-meryal">
          <div className="commoncontainer">
            <h2 className="heading-discovermeryal">Park Attractions</h2>
            <div>
              <p className="para-parkattractions">
                If you're looking for something to do that's educational,
                entertaining and just plain fun, look no further. Learn about
                Qatar's history and it's journey through the discovery of oil
                and gas.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <div className="container-1">
          <div>
            <Card style={{ width: "100%", height: "416px", border: "none" }}>
              <Card.Body className="card-img-1">
                <div className="card-outer">
                  <h1>VR Slide</h1>
                  <div className="card-inner">
                    <span>Explore virtual reality</span>
                    <ion-icon
                      name="arrow-forward-outline"
                      class="hydrated card-icon"
                    ></ion-icon>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "100%", height: "26rem", border: "none" }}>
              <Card.Body className="card-img-2">
                <div className="card-outer">
                  <h1>Edutainment Cave</h1>
                  <div className="card-inner">
                    <span>Explore Cave</span>
                    <ion-icon
                      name="arrow-forward-outline"
                      class="hydrated card-icon"
                    ></ion-icon>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>

      <Container>
        <div className="container-2">
          <div>
            <Card style={{ height: "17rem", border: "none" }}>
              <Card.Body className="cards-img-1">
                <div className="card-outer">
                  <h2>Alghazal</h2>
                  <div className="card-inner">
                    <span>Explore virtual reality</span>
                    <ion-icon
                      name="arrow-forward-outline"
                      class="hydrated card-icon"
                    ></ion-icon>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ height: "17rem", border: "none" }}>
              <Card.Body className="cards-img-2">
                <div className="card-outer">
                  <h2>Dukhan Black Treasure</h2>
                  <div className="card-inner">
                    <span>Explore Cave</span>
                    <ion-icon
                      name="arrow-forward-outline"
                      class="hydrated card-icon"
                    ></ion-icon>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ height: "17rem", border: "none" }}>
              <Card.Body className="cards-img-3">
                <div className="card-outer">
                  <h2>Maydan Mahzam Black Gold</h2>
                  <div className="card-inner">
                    <span>Explore Cave</span>
                    <ion-icon
                      name="arrow-forward-outline"
                      class="hydrated card-icon"
                    ></ion-icon>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>

      <Container>
        <div className="section-map">
          <Card style={{ height: "17rem", border: "none" }}>
            <Card.Body className="section-card">
              <div className="section-inner">
                <h2>Meryal Park Map</h2>
                <button className="section-btn ">
                  Explore
                  <ion-icon
                    name="arrow-forward-outline"
                    class="hydrated"
                  ></ion-icon>
                </button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>

      <Container>
        <div className="container-3">
          <div className="section-water">
            <h1 className="heading-discovermeryal">
              Water fun, Dining & more!
            </h1>
            <p className="sub-title">
              The island boasts food and beverage outlets, retail stores,
              changing rooms and a locker, plus private cabanas with pontoon
              access.
            </p>
          </div>
        </div>
      </Container>

      <Container>
        <div className="container-1">
          <div className="restaurant-container">
            <h1>Restaurants</h1>
            <p>
              Your cravings, your way. Meryal offers a variety of dining
              options, including kid-friendly restaurants, grab-and-go shops.
            </p>
            <button className="section-11-btn">
              Explore
              <ion-icon
                name="arrow-forward-outline"
                class="hydrated"
              ></ion-icon>
            </button>
          </div>
          <div className="rest">
            <Card style={{ height: "22rem", border: "none" }}>
              <Card.Body className="restaurant-card">
                <div className="restaurant-inner">
                  <div>
                    <h1 className="restaurant-heading">Asian Restaurant</h1>
                    <p className="restaurant-subtitle">
                      Offering a modern interpretation of traditional Asian
                      dining, the Asian Restaurant is decorated in a....
                    </p>
                  </div>
                  <div>
                    <button className="section-11">
                      View Details
                      <ion-icon
                        name="arrow-forward-outline"
                        class="hydrated"
                      ></ion-icon>
                    </button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ height: "22rem", border: "none" }}>
              <Card.Body className="retail-card">
                <div className="restaurant-inner">
                  <div>
                    <h1 className="restaurant-heading">Toy Merch Store</h1>
                    <p className="restaurant-subtitle">
                      Offers lasting memories in branded souvenirs, toys, grab &
                      go food and retail carts.
                    </p>
                  </div>
                  <div>
                    <button className="section-11">
                      View Details
                      <ion-icon
                        name="arrow-forward-outline"
                        class="hydrated"
                      ></ion-icon>
                    </button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div>
            <div className="restaurant-container section-11-second">
              <h1>Retail & Merchandising</h1>
              <p>
                Bring the experience home! Complete the day by treating yourself
                or your friends at our exclusive 3 retail & merchandising
                options. Discover Qatari culture and heritage.
              </p>
              <button className="section-11-btn">
                Explore
                <ion-icon
                  name="arrow-forward-outline"
                  class="hydrated"
                ></ion-icon>
              </button>
            </div>
          </div>
        </div>
      </Container>

      <div className="section-12">
        <div className="section-12-inner">
          <h1>Schedule your visit</h1>
          <p>ALLDAY ticket will let you make the most of your visit.</p>
          <div className="section-12-btncontainer">
            <button className="section-12-btn">Book Tickets</button>
            <button className="section-12-btn">Packages</button>
          </div>
        </div>
        <div>
          <img src={section12Image} alt="" className="section-12-image" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
