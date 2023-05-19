import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Banner from './Banner';
import ImageGallery from './ImageGallery';
import ShopByCategory from './ShopByCategory/ShopByCategory';
import TrendingThisMonth from './TrendingThisMonth';

const Home = () => {

    useTitle("Home")

    return (
        <div>
            <Banner></Banner>
            <ImageGallery></ImageGallery>
            <ShopByCategory></ShopByCategory>
            <TrendingThisMonth></TrendingThisMonth>
        </div>
    );
};

export default Home;