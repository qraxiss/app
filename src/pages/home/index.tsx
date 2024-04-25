import React from 'react';
import Collection from './Collection';
import Service from './CollectionService';
import LastestCollection from './Slider/LatestCollection';
import Shopping from './ShopingService';
import TopProducts from './TopProduct';
import CollectionSlider from './Slider/CollectionSlider';
import Shoping from './Shopping';
import FollowUs from './FollowUs';
import Banner from 'components/home/banner';
import Premium from 'components/home/premium';

const Home = () => {
    document.title = "Shopcek";

    return (
        <React.Fragment>
            <Banner />
            <Premium />
            <Service />
            <TopProducts />
            <Shopping />
            <LastestCollection />
            <CollectionSlider />
            <Shoping />
            <FollowUs />
        </React.Fragment>
    );
}

export default Home;