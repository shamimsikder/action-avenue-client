import React from 'react';
import useTitle from '../../Hooks/useTitle';

const MyToys = () => {

    useTitle("Mt Toys")

    return (
        <div className='w-full max-w-7xl mx-auto py-8'>
            <h1>My Toys</h1>
        </div>
    );
};

export default MyToys;