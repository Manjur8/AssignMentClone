import React from 'react';
import banner1 from "../../../assets/images/banner1.jpg";
import banner2 from "../../../assets/images/banner2.jpg";
import banner3 from "../../../assets/images/banner3.jpg";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import "./welcome.css"


const WelcomeSlider = () => {
  return (
    <OwlCarousel loop autoplay items={1} margin={10}>
            <div className='item'>
                <img src={banner1} alt="banner1" />
                <div className="container">
                <div className="row res_padd">
                  <div className="sliderr_ttxt">
                    <div className="carousel-caption">
                      <h3>Quality Assurance</h3>
                      <p>Free weighting Machine for our members.</p>
                      <Link to="/" className='link'>Call For Enquiry</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
                <img src={banner2} alt="banner2"/>
                <div className="container">
                <div className="row res_padd">
                  <div className="sliderr_ttxt">
                    <div className="carousel-caption">
                      <h3>Simply Dummy Caption Here</h3>
                      <p>Free weighting Machine for our members.</p>
                      <Link to="/" className='link'>Call For Enquiry</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='item'>
                <img src={banner3} alt="banner2"/>
                <div className="container">
                <div className="row res_padd">
                  <div className="sliderr_ttxt">
                    <div className="carousel-caption">
                      <h3>Quality Assurance</h3>
                      <p>Free weighting Machine for our members.</p>
                      <Link to="/" className='link'>Call For Enquiry</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </OwlCarousel>
  )
}

export default WelcomeSlider