import React, { useState } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


const AgentSlider = ({props}) => {
    const [centeredIndex, setCenteredIndex] = useState(0);

    const settings = {
        initialSilde: 0,
        slidesToShow:1,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        swipeToSilde: true,
        speed: 800,
        easing: 'ease-in-out',
        afterChange: (index)=>{
            setCenteredIndex(index);
        },
    };

    const AgentAbilityDemoClip = ()=>{
        return(
            <>
            </>
        )
    }

    const AgentInfoSection = (item)=>{
        return(
        <>
            <div className='w-full h-full bg-opacity-30 brightness-150 bg-cover px-4 py-4' style={{background: `url(${process.env.REACT_APP_AGENT_PAGE_INFO_SECTION_BG_IMG})` }}>
                <div className='flex flex-col gap-2 z-10'>
                    <div className='flex flex-row flex-wrap gap-4 w-full justify-between shrink'>
                        <div className='flex flex-col flex-nowrap gap-3 px-2 sm:px-4 py-2 w-3/4 sm:w-2/4'>
                            <h1 className='text-xl xsm:text-3xl sm:text-4xl text-red-700 font-black'>
                                {`${item.displayName}`}
                            </h1>
                            <div className='flex flex-row flex-nowrap gap-1 sm:gap-5 px-1 sm:px-2 justify-start'>
                                <h2 className='text-red-500 text-sm xsm:text-base sm:text-xl'>
                                    {`// ${item.role.displayName}`}
                                </h2>
                                <img 
                                src={item.role.displayIcon}
                                className='bg-red-500 rounded-2xl w-8 h-8 drop-shadow-lg scale-50 xsm:scale-75 sm:scale-100'/>
                            </div>
                            <div className='w-full'>
                                <p className='text-gray-500  py-3 text-xs xsm:text-sm sm:text-lg md:text-xl text font-semibold'>{item.description}</p>
                            </div>
                        </div>
                        <img 
                        src={item.displayIconSmall}
                        className='brightness-75 rounded-md drop-shadow-xl border-y-4 border-red-600 max-w-64 max-h-64 min-w-28 min-h-28'/>
                    </div>
                    <div>
                        {/* ability */}
                        <div className='flex flex-row flex-nowrap gap-1 justify-evenly py-4'>
                            {item.abilities.map((element,index)=>{
                                return(
                                <img 
                                src={element.displayIcon}
                                key={index}
                                className='rounded-full bg-black border-2 opacity-40 hover:invert duration-100 max-w-12 max-h-12 min-w-6 min-h-6 '/>
                                )
                            })}
                        </div>
                    </div>
                    <AgentAbilityDemoClip />
                </div>
            </div>
        </>
        );
    }
    
    return(
        <>
            <div>
                <div 
                className='px-8 w-full font-black z-10 overflow-auto'>
                    <Slider {...settings} className='py-10 px-10'>
                        {props.map((props,index)=>(
                            <div key={index} className='flex flex-row flex-nowrap relative animate-float ease-in-out min-w-20'>
                                <img 
                                src={props.background} 
                                className='z-0 h-auto w-auto absolute opacity-50 animate-flicker ease-in-out' 
                                />
                                <div className='z-10 bg-contain backdrop-blur-0 w-full'>    
                                    <img 
                                    src={props.fullPortraitV2} 
                                    alt={`${props.displayName}`} 
                                    className='w-full h-auto'
                                    />   
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div className='bg-white h-auto w-full'>
                        {
                            props[centeredIndex]!==undefined?
                            <AgentInfoSection {...props[centeredIndex]}/>:
                            <img src={process.env.REACT_APP_AGENTS_PAGE_DEFAULT_INFO_SECTION_BG_IMG} />
                        }
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default AgentSlider;
