import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';

const RankPage = () => {
    const [rankTierData, setRankTierData] = useState([]);
    const settings = {
        slidesToShow:1,
        focusOnSelect:true,
        slidesToScroll: 1,
        autoplay:true,
        arrows: true,
        infinite: false,
        swipeToSilde: true,
        speed: 1000,
        easing: 'ease-in-out',
        responsive:[
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:5,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint:1280,
                settings:{
                    slidesToShow:7,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint:1536,
                settings:{
                    slidesToShow:9,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint:768,
                settings:{
                    slidesToShow:4,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint:640,
                settings:{
                    slidesToShow:3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint:448,
                settings:{
                    slidesToShow:2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint:348,
                settings:{
                    slidesToShow:1,
                    slidesToScroll: 1,
                }
            },
        ],
    };


    useEffect(()=>{
        const apiGetRankTierData = async ()=>{
            const fetchRankTierData = await axios.get('competitivetiers');
            setRankTierData(fetchRankTierData.data.data[4]);
        }
        apiGetRankTierData();
    }, []);

    return (
        <section>

            <div className='bg-black bg-opacity-10 px-10 pb-5'>
                <h1 className='py-5 text-red-400 font-extrabold text-sm xsm:text-base sm:text-xl md:text-2xl lg:text-2xl tracking-wider'> // Competitive Tiers</h1>
                <hr />
                <Slider {...settings}>
                    {rankTierData.tiers === undefined?'':
                    rankTierData.tiers.map((item,index)=>{
                        if(!item.divisionName.includes('Unused')){
                            return(
                                <div className='px-4 py-24 hover:scale-105 duration-200 ease-in-out' key={index} >
                                    <div
                                    style={{'backgroundColor':`#${item.color}`}}
                                    className='rounded-lg py-4 bg-slate-900 bg-opacity-60'>
                                        <img 
                                        src={item.largeIcon}
                                        alt={item.divisionName} 
                                        className='-translate-y-20 scale-125 z-10'/>
                                        <div 
                                        className='text-center z-10 text-black backdrop-contrast-50'>
                                            <h1 className='font-normal'>{item.tierName}</h1>
                                            <h1 className='font-black py-3'>{item.divisionName}</h1>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </Slider>
                <hr />
                <p className='py-4 tracking-widest text-gray-300 text-sm lg:text-xl sm:text-lg xsm:text-base'>Dive into the high-stakes world of Valorant's competitive mode, where strategic prowess and precise gunplay collide. Whether you're a seasoned player or new to the genre, Valorant's competitive mode promises an adrenaline-packed experience.</p>
            </div>
        </section>
    )
}

export default RankPage;