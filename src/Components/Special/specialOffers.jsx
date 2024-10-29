import React from "react";
import { Container } from "react-bootstrap";
import "../../styles/Special.css";
import imgaeOne from "../../Assets/chair-1.jpg";
import imageTwo from "../../Assets/chair-2.jpg";

const specialOffers = () => {
  return (
    <>
      <div className="offers-title">
        <h1 className="offer-heading">Special Offers</h1>
      </div>
      <Container>
        <div className="container">
          <header>
            <img src={imgaeOne} alt="Photo" className="imageone" />
            <div class="header-text-box">
              <h1 class="boxs-heading"> Friends & Family Day</h1>
              <span className="offer-date">
                <ion-icon name="calendar-outline"></ion-icon>
                <span>28 Oct 2024 -28 Oct 2024</span>
              </span>
              <p className="boxs-para">
                In a small shop in the heart of lisbon,we spend our days
                relentlessly prefecting the chair.The result is a prefect blend
                of beauty and comfort,that will have a lasting impact on your
                health
              </p>
              <button className="offer-button">Buy Now</button>
            </div>

            <img src={imageTwo} alt="Photo" className="imageTwo" />
            <div class="header-text-box">
              <h1 class="boxs-heading ">Family Adventure Package</h1>
              <span className="offer-date">
                <ion-icon name="calendar-outline"></ion-icon>
                <span className="">17 Oct 2024 -30 Oct 2024</span>
              </span>
              <p className="boxs-para">
                In a small shop in the heart of lisbon,we spend our days
                relentlessly prefecting the chair.The result is a prefect blend
                of beauty and comfort,that will have a lasting impact on your
                health
              </p>
              <button className="offer-button">Buy Now</button>
            </div>
          </header>
        </div>
      </Container>
    </>
  );
};

export default specialOffers;
