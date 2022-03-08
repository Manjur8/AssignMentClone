import React from 'react';
import icon from "../../../assets/images/icon05.jpg";
import icon12 from "../../../assets/images/icon12.png";
import "./welcome.css";
import {Link} from "react-router-dom";
import WelcomeSlider from './WelcomeSlider';

const Welcome = () => {
  return (
    <>
        <WelcomeSlider />
        <div className='welcome'>
            <h2>Welcome to BazarMoynaguri</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae pharetra erat. Fusce quis suscipit leo. Nulla scelerisque erat in nam at efficitur tortor, vitae porttitor mi. Morbi sit amet velit nec leo imperdiet porttitor mi. Morbi sit amet velit nec leo imperdiet.</p>
            <img src={icon} alt="icon" />
        </div>
        <div className='welcome_grid'>
            <div id="grid1">
                <div className="g1item">
                    <img src={icon12} alt="icon12" className='gridIcon'/>
                    <h4 className='gridHeader'>Best Quality Product</h4>
                    <p className='gridPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
            </div>
            <div id="grid2">
                <div className="g1item">
                    <img src={icon12} alt="icon12" className='gridIcon'/>
                    <h4 className='gridHeader'>Best Quality Product</h4>
                    <p className='gridPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna.</p>    
                </div>
            </div>
            <div id="grid3">
                <div className="g1item">
                    <img src={icon12} alt="icon12" className='gridIcon'/>
                    <h4 className='gridHeader'>Best Quality Product</h4>
                    <p className='gridPara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna.</p>    
                </div>
            </div>
        </div>
        <div className='welcome'>
            <Link to="/" id="welcome_bottom_img">Quality product at your door step</Link>
        </div>
    </>
  )
}

export default Welcome