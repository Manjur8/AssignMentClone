import React from 'react';
import img1 from "../../../assets/images/icon33.jpg";
import img2 from "../../../assets/images/icon34.jpg"; 
import img4 from "../../../assets/images/icon36.jpg";
import img6 from "../../../assets/images/icon08.jpg";
 

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./style.css";

const options = {
  responsive: {
    0: {
        items: 1,
    },
    400: {
        items: 2,
    },
    800: {
        items: 3,
    }
  },
}

const ProductSlider = () => {
  return (
    <>
       <div style={{padding: "2rem"}}>
        <OwlCarousel className="owl-theme res_carousel" loop margin={10} autoplay autoplayTimeout={2000} {...options} >
            <div className="item">
            <img src={img1} alt="slider" />
            </div>
            <div className="item">
            <img src={img2} alt="slider"  />
            </div>
            <div className="item">
            <img src={img4} alt="slider" />
            </div>
            <div className="item">
            <img src={img6} alt="slider" />
            </div>
        </OwlCarousel>
       </div>
    </>
  )
}

export default ProductSlider