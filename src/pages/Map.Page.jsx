import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';

import DefaultHOC from '../layout/Default.HOC';

const MapPage = () => {
    const [getMapData, setMapData] = useState([]);
    useEffect(() =>{
        const apiGetMapData = async () =>{
            const fetchMapData = await axios.get('/maps');
            setMapData(fetchMapData.data.data);
        }
        apiGetMapData();
    }, []);
    var mapDataArray = [...getMapData];
    mapDataArray = mapDataArray.filter((item)=> item.narrativeDescription !== null);

    const settings = {
        initialSilde: 0,
        slidesToShow:1,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        swipeToSilde: true,
        speed: 800,
        easing: 'ease-in-out',

    };

    return (
        <>
            <div>
                <div className='px-10'>
                    <Slider {...settings}>
                        {mapDataArray.map((item,index)=>{
                            return(
                                <div className='flex flex-col gap-3' key={index}>
                                    <div className='md:translate-y-6'>
                                        <h1 className='px-5 font-black text-red-600 lg:text-7xl md:text-6xl sm:text-5xl xsm:text-4xl text-3xl backdrop-blur-lg rounded-md inline-block py-4'>
                                            {item.displayName}
                                        </h1>
                                    </div>
                                    <div className='z-0'>
                                        <img 
                                        src={item.splash} 
                                        alt="" 
                                        draggable={false}
                                        className='block'/>
                                    </div>
                                    <div className='md:w-2/4 lg:w-2/5 h-auto right-0 px-2 md:translate-x-10 xsm:-translate-y-4 md:-translate-y-20'>
                                        <div className='bg-teal-800 bg-opacity-50 px-4 py-4 '>
                                            <h1 className='py-3 font-bold md:text-3xl sm:text-2xl xsm:text-xl text-base text-red-500'> 
                                                {`// Description `}
                                            </h1>
                                            <h2 className='lg:text-xl md:text-lg sm:text-base xsm:text-sm text-xs text-gray-300 tracking-wider'>{item.narrativeDescription}</h2>
                                        </div>
                                    </div>
                                </div>
                            )}
                        )}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default DefaultHOC(MapPage);



