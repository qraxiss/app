import React from 'react';
import { Banner, DealofDay, Instagram, NewArrival, Premium, TopPicks, WhyChoose } from 'components/home';

const Home = () => {
    document.title = "Shopcek";

    return (
        <React.Fragment>
            <Banner />
            <Premium />
            <TopPicks />
            <DealofDay />
            <NewArrival />
            <WhyChoose />
            {/* <Instagram /> */}
        </React.Fragment>
    );
};

export default Home;
