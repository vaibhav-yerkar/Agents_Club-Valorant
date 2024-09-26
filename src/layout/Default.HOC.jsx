import React from 'react';

// Components
import Navbar from '../components/Navbar/Navbar.Component.jsx';
import Footer from '../components/Footer/Footer.Component.jsx';


const DefaultHOC = (Component) =>
({...props}) => {
    var bgPosterLink;
    var bgVideoLink;
    if(Component.name === 'HomePage' ){
        bgPosterLink = process.env.REACT_APP_HOME_PAGE_BG_POSTER;
        bgVideoLink = process.env.REACT_APP_HOME_PAGE_BG_VIDEO;
    }
    // else if(Component.name === 'AgentPage' || Component.name === 'ArsenalPage' )
    else{
        bgPosterLink=process.env.REACT_APP_AGENTS_PAGE_BG_POSTER;
        bgVideoLink=process.env.REACT_APP_AGENTS_PAGE_BG_VIDEO;
    }
    return (
        <div className='font-orb bg-black'>
            <video
                tabIndex="-1"
                preload='true'
                className='fixed left-0 top-0 h-full w-full overflow-hidden object-cover bg-scroll'
                poster={bgPosterLink}
                muted loop autoPlay
                ><source 
                src={bgVideoLink}
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
