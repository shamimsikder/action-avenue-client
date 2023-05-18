import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Banner from './Banner';
import ImageGallery from './ImageGallery';

const Home = () => {

    useTitle("Home")

    return (
        <div>
            <Banner></Banner>
            <ImageGallery></ImageGallery>
        </div>
    );
};

export default Home;