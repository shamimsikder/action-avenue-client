import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Banner from './Banner';
import ImageGallery from './ImageGallery';
import ShopByCategory from './ShopByCategory/ShopByCategory';
import TrendingThisMonth from './TrendingThisMonth';
import OurServices from './OurServices';

const Home = () => {

    useTitle("Home")

    return (
        <div>
            <Banner></Banner>
            <ImageGallery></ImageGallery>
            <ShopByCategory></ShopByCategory>
            <TrendingThisMonth></TrendingThisMonth>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;