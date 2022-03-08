import React from 'react';
import Welcome from './Welcome/Welcome';
import ProductSlider from './ProductSlider/ProductSlider';
import Products from './Products/Products';
import Banner from './banner_L_Products/Banner';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div style={{width:"100vw"}}>

        <Welcome />
        <ProductSlider />
        <Products />
        <Banner />
        <Footer />
    </div>
  )
}

export default Home