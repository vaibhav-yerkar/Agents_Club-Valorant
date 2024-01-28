import React from 'react'
import { Link } from 'react-router-dom';

const ArsenalPoster = ({props}) => {

    return (
        <>
            <div className='flex flex-col lg:gap-4 md:gap-3 gap-2 lg:px-5 md:px-3 px-2 lg:py-5 md:py-3 py-2'>
                {props.map((item,index)=>{
                    return(
                        <div 
                        key={index} 
                        className='flex flex-col flex-nowrap bg-gray-500 rounded-lg bg-opacity-40 px-2 py-2 backdrop-blur-sm'>
                            <div className='flex flex-row-reverse flex-nowrap py-2 px-5'>
                                <Link to={`/weapons/${item.uuid}`}>
                                    <p className='text-gray-400 hover:font-semibold hover:text-gray-300'>See More </p>
                                </Link>
                            </div>
                            <hr/>
                            <div className='flex flex-row flex-wrap justify-between py-5 gap-y-4'>
                                <div className='flex flex-col flex-nowrap gap-3 px-5'>
                                    <h1 className='text-red-600 font-black lg:text-4xl text-3xl'>
                                        {item.displayName}
                                    </h1>
                                    <h2 className='text-red-400 text-lg lg:text-xl font-medium'>
                                        {"// "+(item.category).slice(11)}
                                    </h2>
                                </div>
                                <div>
                                    <img 
                                    src={item.displayIcon} 
                                    alt={`${item.displayName}'s img`} 
                                    draggable={false}
                                    className='max-w-auto min-w-auto max-h-40 min-h-20 z-20 drop-shadow-xl brightness-110'
                                    />
                                </div>
                            </div>
                        </div>   
                    )
                })}
            </div>
        </>
    );
}

export default ArsenalPoster;