import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Banner from './Banner';
import ImageGallery from './ImageGallery';
import ShopByCategory from './ShopByCategory/ShopByCategory';

const Home = () => {

    useTitle("Home")

    return (
        <div>
            <Banner></Banner>
            <ImageGallery></ImageGallery>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;