import React from 'react';
// import axios from 'axios';

import DefaultHOC from '../layout/Default.HOC';
import Poster from '../components/Poster/Poster.Component';
import RankPage from '../components/Poster/RankSlider.Component';

const HomePage = () => {

    return (
        <>
            <div className='flex flex-col gap-28'>
                <Poster />
                <RankPage />
            </div>
        </>
    );
}

export default DefaultHOC(HomePage);