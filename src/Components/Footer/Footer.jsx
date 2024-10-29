import React from "react";
import "../../styles/footer.css";
import { Link } from "react-router-dom";
import MasterCard from "../../Assets/648b606d4a139591f6b3440c_mastercard-1.png";
import VisaCard from "../../Assets/visa-512.webp";
import UnionPay from "../../Assets/825484.png";
import DinersClub from "../../Assets/Diners_Club-logo-53DC9C1F56-seeklogo.com.png";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-main">
          <div className="footer-one ">
            <div>
              <h5>Meryal Waterpark</h5>
              <h6>Zone – 69 / Street – 531 / Building – 38</h6>
              <h6>Po. Box: 24507</h6>
            </div>
            <div>
              <h5>Call</h5>
              <Link className="links link-colors">+974144 4000</Link>
              <h5>Email</h5>
              <Link className="links link-colors">
                info@meryalwaterpark.com
              </Link>
              <h5>For group & events</h5>
              <Link className="links link-colors">
                sales@meryalwaterpark.com
              </Link>
            </div>
            <div>
              <h5>OPENING HOURS</h5>
              <h6 className="common-colors">
                Tuesday - Sunday (Open on Monday - 28th October 2024)
              </h6>
              <h6 className="common-colors">
                Operating Hours - 12:00 pm to 6:00 pm
              </h6>
            </div>
          </div>
          <div className="footer-two ">
            <div className="footer-box">
              <div className="footer-boxs">
                <h5>WATER PARK</h5>
                <ul>
                  <li className="common-colors">Park OverView</li>
                  <li className="common-colors">Special Offers</li>
                  <li className="common-colors">Swimwear Policy</li>
                  <li className="common-colors">Ride Safety & Restrictions</li>
                </ul>
              </div>
              <div className="footer-boxs">
                <h5>ATTRACTIONS</h5>
                <ul>
                  <li className="common-colors">icon Island</li>
                  <li className="common-colors">Rides & Slides</li>
                  <li className="common-colors">Retail & Merchandising</li>
                  <li className="common-colors">Ride Safety & Restrictions</li>
                  <li className="common-colors">Dinig Facilites</li>
                </ul>
              </div>
              <div className="footer-boxs">
                <h5>FACILITIES</h5>
                <ul>
                  <li className="common-colors">Cabanas</li>
                  <li className="common-colors">Beach Access</li>
                  <li className="common-colors">Lost & Found Desk</li>
                  <li className="common-colors">Information Point</li>
                  <li className="common-colors">Locker Rental</li>
                  <li className="common-colors">Counter Lockers</li>
                </ul>
              </div>
            </div>
            <div className="footer-box1">
              <div className="pay-card">
                <img src={MasterCard} alt="" className="image1" />
                <img src={VisaCard} alt="" className="image2" />
                <img src={UnionPay} alt="" className="image3" />
                <img src={DinersClub} alt="" className="image4" />
              </div>
              <div className="social">
                <span>
                  <ion-icon
                    name="logo-facebook"
                    class="hydrated footer-icon"
                  ></ion-icon>
                </span>
                <span>
                  <ion-icon
                    name="logo-instagram"
                    class="hydrated footer-icon"
                  ></ion-icon>
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-three">
          <div>
            <h6 className="common-colors">© 2024 Meryal</h6>
          </div>
          <div className="footerthree-sub common-colors">
            <h6>Privacy Policy</h6>
            <h6>Terms of Service</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
