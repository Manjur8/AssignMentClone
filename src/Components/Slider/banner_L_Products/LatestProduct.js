import React from 'react';
import { Link } from 'react-router-dom';
import  "./LatestProducts.css";

// import images
import icon1 from "../../../assets/images/icon05.jpg";
import icon2 from "../../../assets/images/icon30.jpg";
import icon3 from "../../../assets/images/icon29.png";
import icon4 from "../../../assets/images/icon28.jpg";
import icon5 from "../../../assets/images/icon27.jpg";
import icon6 from "../../../assets/images/icon26.jpg";

// import owl carousel
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
  responsive: {
    0: {
        items: 1,
    },
    600: {
        items: 3,
    },
    950: {
        items: 5,
    }
  },
}

const LatestProduct = () => {
  return (
    <div className="latest_products">
        <div className="container">
          <div className="row rellati">
            <div className="lp_product"></div>

            <h1>Latest Products</h1>
            <h3>Shoping made easy or some caption text show here</h3>
            <img src={icon1} alt="" />

            <div className="linee"></div>

            <OwlCarousel className='owl-theme rounded_pro' {...options}  loop margin={10} nav>

              <div className="item">
                <div className="lp_round">
                  <Link to="/"><img src={icon2} alt="icon2" /></Link>
                </div>
                <Link to="/">Product name show here</Link>
                <p>Rs.40.00</p>
                <Link to="/" className="inqq">Call For Enquiry</Link>
              </div>

              <div className="item">
                <div className="lp_round">
                  <Link to="/"><img src={icon3} alt="icon" /></Link>
                </div>
                <Link to="/">Product name show here</Link>
                <p>Rs.40.00</p>
                <Link to="/" className="inqq">Call For Enquiry</Link>
              </div>

              <div className="item">
                <div className="lp_round">
                  <Link to="/"><img src={icon4} alt="icon" /></Link>
                </div>
                <Link to="/">Product name show here</Link>
                <p>Rs.40.00</p>
                <Link to="/" className="inqq">Call For Enquiry</Link>
              </div>

              <div className="item">
                <div className="lp_round">
                  <Link to="/"><img src={icon5} alt="icon" /></Link>
                </div>
                <Link to="/">Product name show here</Link>
                <p>Rs.40.00</p>
                <Link to="/" className="inqq">Call For Enquiry</Link>
              </div>

              <div className="item">
                <div className="lp_round">
                  <Link to="/"><img src={icon6} alt="icon" /></Link>
                </div>
                <Link to="/">Product name show here</Link>
                <p>Rs.40.00</p>
                <Link to="/" className="inqq">Call For Enquiry</Link>
              </div>

              <div className="item">
                <div className="lp_round">
                  <Link to="/"><img src={icon2} alt="icon" /></Link>
                </div>
                <Link to="/">Product name show here</Link>
                <p>Rs.40.00</p>
                <Link to="/" className="inqq">Call For Enquiry</Link>
              </div>

              <div className="item">
                <div className="lp_round">
                  <Link to="/"><img src={icon3} alt="icon" /></Link>
                </div>
                <Link to="/">Product name show here</Link>
                <p>Rs.40.00</p>
                <Link to="/" className="inqq">Call For Enquiry</Link>
              </div>

              <div className="item">
                <div className="lp_round">
                  <Link to="/"><img src={icon4} alt="icon" /></Link>
                </div>
                <Link to="/">Product name show here</Link>
                <p>Rs.40.00</p>
                <Link to="/" className="inqq">Call For Enquiry</Link>
              </div>

              <div className="item">
                <div className="lp_round">
                  <Link to="/"><img src={icon5} alt="icon" /></Link>
                </div>
                <Link to="/">Product name show here</Link>
                <p>Rs.40.00</p>
                <Link to="/" className="inqq">Call For Enquiry</Link>
              </div>

              <div className="item">
                <div className="lp_round">
                  <Link to="/"><img src={icon6} alt="icon" /></Link>
                </div>
                <Link to="/">Product name show here</Link>
                <p>Rs.40.00</p>
                <Link to="/" className="inqq">Call For Enquiry</Link>
              </div>

              <div className="item">
                <div className="lp_round">
                  <Link to="/"><img src={icon2} alt="icon" /></Link>
                </div>
                <Link to="/">Product name show here</Link>
                <p>Rs.40.00</p>
                <Link to="/" className="inqq">Call For Enquiry</Link>
              </div>

              <div className="item">
                <div className="lp_round">
                  <Link to="/"><img src={icon3} alt="icon" /></Link>
                </div>
                <Link to="/">Product name show here</Link>
                <p>Rs.40.00</p>
                <Link to="/" className="inqq">Call For Enquiry</Link>
              </div>

              <div className="item">
                <div className="lp_round">
                  <Link to="/"><img src={icon4} alt="icon" /></Link>
                </div>
                <Link to="/">Product name show here</Link>
                <p>Rs.40.00</p>
                <Link to="/" className="inqq">Call For Enquiry</Link>
              </div>

              <div className="item">
                <div className="lp_round">
                  <Link to="/"><img src={icon5} alt="icon" /></Link>
                </div>
                <Link to="/">Product name show here</Link>
                <p>Rs.40.00</p>
                <Link to="/" className="inqq">Call For Enquiry</Link>
              </div>

              <div className="item">
                <div className="lp_round">
                  <Link to="/"><img src={icon6} alt="icon" /></Link>
                </div>
                <Link to="/">Product name show here</Link>
                <p>Rs.40.00</p>
                <Link to="/" className="inqq">Call For Enquiry</Link>
              </div>
              </OwlCarousel>
            
          </div>
        </div>
      </div>
  )
}

export default LatestProduct