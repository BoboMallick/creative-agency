import React from 'react';
import Carousel from './Carousel/Carousel';
import Feedback from './Feedback/Feedback';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Services from './Services/Services';
import Sponsor from './Sponsor/Sponsor';

const Home = () => {
    return (
        <div>
            <Header></Header>
        <Sponsor></Sponsor>
        <Services></Services>
        <Carousel></Carousel>
        <Feedback></Feedback>
        <Footer></Footer>
        </div>
    );
};

export default Home;