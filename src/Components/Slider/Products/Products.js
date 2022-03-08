import React from 'react';


import icon from "../../../assets/images/icon05.jpg";
import onion from "../../../assets/images/icon15.jpg";
import tomato from "../../../assets/images/icon22.jpg";
import img3 from "../../../assets/images/icon21.jpg";
import img4 from "../../../assets/images/icon20.png";
import img5 from "../../../assets/images/icon18.png";
import img6 from "../../../assets/images/icon17.jpg";
import img7 from "../../../assets/images/icon16.JPG";
import img8 from "../../../assets/images/icon19.png";

import "./products.css";

const Products = () => {
  return (
    <div className="our_products">
      <div className="container">
        <div className="row res_padd2">
            
            <h1>Our Products</h1>
            <h3>Shoping made easy or some caption text show here</h3>
            <img src={icon} alt="icon" />
            
            <div className="linee"></div>
            
            <div className="product_box">
              <div className="pro_image">
                  <a href="#"><img src={onion} alt="onion" /></a>
                    <span className="enq01"><a href="#">Call For Enquiry</a></span>
                </div>
                <div className="pro_desc">
                  <a href="#">Onion</a>
                    <p>Rs.40.00 </p>
                    <span className="pro_line"><strong></strong></span>
                </div>
            </div>
            
            <div className="product_box">
              <div className="pro_image">
                  <a href="#"><img src={tomato} alt="tomato" /></a>
                    <span className="enq01"><a href="#">Call For Enquiry</a></span>
                </div>
                <div className="pro_desc">
                  <a href="#">Tomato</a>
                    <p>Rs.40.00 </p>
                    <span className="pro_line"><strong></strong></span>
                </div>
            </div>
            
            
            <div className="product_box">
              <div className="pro_image">
                  <a href="#"><img src={img3} alt="" /></a>
                    <span className="enq01"><a href="#">Call For Enquiry</a></span>
                </div>
                <div className="pro_desc">
                  <a href="#">Product name show here</a>
                    <p>Rs.40.00 </p>
                    <span className="pro_line"><strong></strong></span>
                </div>
            </div>
            
            <div className="product_box">
              <div className="pro_image">
                  <a href="#"><img src={img4} alt="" /></a>
                    <span className="enq01"><a href="#">Call For Enquiry</a></span>
                </div>
                <div className="pro_desc">
                  <a href="#">Product name show here</a>
                    <p>Rs.40.00 </p>
                    <span className="pro_line"><strong></strong></span>
                </div>
            </div>            
            
            <div className="product_box">
              <div className="pro_image">
                  <a href="#"><img src={img5} alt="" /></a>
                    <span className="enq01"><a href="#">Call For Enquiry</a></span>
                </div>
                <div className="pro_desc">
                  <a href="#">Product name show here</a>
                    <p>Rs.40.00 </p>
                    <span className="pro_line"><strong></strong></span>
                </div>
            </div>
            
            <div className="product_box">
              <div className="pro_image">
                  <a href="#"><img src={img6} alt="" /></a>
                    <span className="enq01"><a href="#">Call For Enquiry</a></span>
                </div>
                <div className="pro_desc">
                  <a href="#">Product name show here</a>
                    <p>Rs.40.00 </p>
                    <span className="pro_line"><strong></strong></span>
                </div>
            </div>
            
            <div className="product_box">
              <div className="pro_image">
                  <a href="#"><img src={img7} alt="" /></a>
                    <span className="enq01"><a href="#">Call For Enquiry</a></span>
                </div>
                <div className="pro_desc">
                  <a href="#">Product name show here</a>
                    <p>Rs.40.00 </p>
                    <span className="pro_line"><strong></strong></span>
                </div>
            </div>
            
            <div className="product_box">
              <div className="pro_image">
                  <a href="#"><img src={img8} alt="" /></a>
                    <span className="enq01"><a href="#">Call For Enquiry</a></span>
                </div>
                <div className="pro_desc">
                  <a href="#">Product name show here</a>
                    <p>Rs.40.00 </p>
                    <span className="pro_line"><strong></strong></span>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Products