import React from 'react';
import DefaultHOC from '../layout/Default.HOC';
// import axios from 'axios';

import Poster from '../components/Poster/Poster.Component';

const HomePage = () => {

    
    return (
        <>
            <div className=''>
                <Poster />
            </div>
        </>
    );
}

export default DefaultHOC(HomePage);