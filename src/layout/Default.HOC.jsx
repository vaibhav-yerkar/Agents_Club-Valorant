import React from 'react';

// Components
import Navbar from '../components/Navbar/Navbar.Component.jsx';
import Footer from '../components/Footer/Footer.Component.jsx';


const DefaultHOC = (Component) =>
({...props}) => {
    return (
        <div>
            <video
                tabIndex="-1"
                preload='true'
                className='fixed left-0 top-0 h-full w-full overflow-hidden object-cover'
                poster='https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt463ab493c63a3968/65988e9b14672f52fd6fad1d/Website_Hero_Image_1730x720.jpg'
                muted loop autoPlay
                ><source 
                src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb3652b6f210bdcf2/659889371f895221e5914a63/VALORANT_EP8124_001_R007_InGameHomepage_v01_For_Website_Mobile_v1.mp4" 
                type='video/mp4'
                />
            </video>
            <div className='absolute text-white overflow-hidden w-full h-full bg-black bg-opacity-30'>
                <Navbar />
                <Component {...props}/>
                <Footer />
            </div>
        </div>
    );
};

export default DefaultHOC;