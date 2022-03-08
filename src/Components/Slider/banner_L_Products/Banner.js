import React from 'react';
import LatestProduct from './LatestProduct';
import "./style.css";
import {Link} from "react-router-dom";

const Banner = () => {
  return (
    <div>
        <div className="small_banner">
            <div className="container">
                <div className="row rellati res_padd">
                    <h1>If you have any quary please fell free to contact us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Link to="/" id="contact_btn">Contact Us</Link>
                </div>
            </div>
        </div>

        <LatestProduct />
        
    </div>
  )
}

export default Banner