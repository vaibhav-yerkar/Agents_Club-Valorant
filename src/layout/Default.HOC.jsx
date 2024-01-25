import React from 'react';

// Components
import Navbar from '../components/Navbar/Navbar.Component.jsx';
import Footer from '../components/Footer/Footer.Component.jsx';

// {console.log(Component.name)         //gets component's name }

const DefaultHOC = (Component) =>
({...props}) => {
    return (
        <div className='font-orb'>
            <video
                tabIndex="-1"
                preload='true'
                className='fixed left-0 top-0 h-full w-full overflow-hidden object-cover'
                poster={process.env.REACT_APP_HOME_PAGE_BG_POSTER}
                muted loop autoPlay
                ><source 
                src={process.env.REACT_APP_HOME_PAGE_BG_VIDEO}
                type='video/mp4'
                />
            </video>
            <div className='absolute text-white w-full bg-black bg-opacity-50'>
                <Navbar/>
                <div className='pt-24'>
                    <Component {...props}/>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default DefaultHOC;