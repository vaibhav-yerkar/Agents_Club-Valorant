import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';

import DefaultHOC from '../layout/Default.HOC';

const CardsPage = () => {
    const [playerCardData, setPlayerCardData] = useState([]);
    const [selectedCard, setSelectedCard] =useState({displayName:'',largeArt:''});
    useEffect(()=>{
        const apiGetplayerCardData = async ()=>{
            const fetchPlayerCardData = await axios("/playercards");
            setPlayerCardData(fetchPlayerCardData.data.data);
        }
        apiGetplayerCardData();
    },[]);

    const settings = {
        slidesToShow:3,
        rows:4,
        slidesToScroll: 2,
        arrows: true,
        swipeToSilde: true,
        speed: 800,
        easing: 'ease-in-out',
        responsive:[
            {
                breakpoint:1536,
                settings:{
                    rows:10,
                    slidesToShow:14,
                    slidesToScroll:6,
                }
            },
            {
                breakpoint:1280,
                settings:{
                    rows:10,
                    slidesToShow:12,
                    slidesToScroll:5,
                }
            },
            {
                breakpoint:1024,
                settings:{
                    rows:10,
                    slidesToShow:10,
                    slidesToScroll:4,
                }
            },
            {
                breakpoint:768,
                settings:{
                    rows:10,
                    slidesToShow:8,
                    slidesToScroll:3,
                }
            },
            {
                breakpoint:640,
                settings:{
                    rows:8,
                    slidesToShow:8,
                    slidesToScroll:3,
                }
            },
            {
                breakpoint:448,
                settings:{
                    rows:8,
                    slidesToShow:6,
                    slidesToScroll:2,
                }
            },
        ]
    };
    const changeViewCard = (element) =>{
        setSelectedCard(element);
    }

    const CardDisplay = ({displayName, largeArt}) =>{
        return(
            <>
                <div className='flex flex-row justify-center'>
                    <div className='flex flex-col gap-3 flex-nowrap'>
                        <div className='flex flex-row flex-nowrap gap-3 justify-evenly'>
                            <img 
                            src={largeArt}
                            alt='' 
                            className='max-h-fit md:max-w-56 sm:max-w-48 xsm:max-w-40 max-w-32 aspect-auto z-10 animate-float'/>
                        </div>
                        <h2 className='font-extrabold text-teal-500 text-sm xsm:text-base sm:text-lg md:text-xl lg:text-2xl'>
                            {displayName}
                        </h2>
                    </div>
                </div>
            </>
        )
    }

    var cardDataArray = [...playerCardData]
    cardDataArray = cardDataArray.filter((item)=> item.displayIcon !== null);
    
    return (
        <>
            <div className='flex flex-col gap-8 flex-nowrap'>
                <div className=''>
                    <CardDisplay {...selectedCard}/>
                </div>
                <div className='px-8'>
                    <Slider {...settings}>
                        {cardDataArray!== undefined?
                            cardDataArray.map((item,index)=>{
                                return(
                                    <div key={index} className='px-1 py-1'>
                                        <img 
                                        src={item.displayIcon} 
                                        alt=""
                                        className='brightness-75 hover:brightness-110 duration-75'
                                        onClick={()=>changeViewCard({displayName:`${item.displayName}`,largeArt:`${item.largeArt}` })}/>
                                    </div>
                                )
                            })
                            :''
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default DefaultHOC(CardsPage);