import React from 'react';
import DefaultHOC from '../layout/Default.HOC';

const HomePage = () => {
    return (
        <>
            <div className=''>
                Home
            </div>
        </>
    );
}

export default DefaultHOC(HomePage);