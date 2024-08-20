import React from 'react';
import { Link } from 'react-router-dom';

const Poster = (props) => {
    return (
        <>
            <section style={{height:'45vh'}}>

            </section>
            <section
            className='bg-opacity-90 bg-red-500 text-white h-svh bg-cover overflow-hidden'>
                <div className='flex flex-col lg:flex-row-reverse gap-x-2 gap-y-4 px-2 py-8'>
                    <div className='flex flex-col gap-7 px-4 py-10'>
                        <div className='flex flex-row flex-nowrap justify-between lg:pr-10'>
                            <h2 className='font-black lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl text-lg'>YOUR AGENTS</h2>
                            <button className='border-2 md:px-4 md:py-3 px-3 py-2 border-black hover:invert duration-300 bg-white text-black'>
                                <Link to='/agents'>
                                    View Agents
                                </Link>
                            </button>
                        </div>
                        <h6 className='lg:text-2xl md:text-xl sm:text-lg xsm:text-base text-sm lg:pt-10'>
                            CREATIVITY IS YOUR GREATEST WEAPON.
                        </h6>
                        <p className='lg:text-lg xsm:text-base text-sm lg:pt-10'>
                            More than guns and bullets, you'll choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine. No two Agents play alike, just as no two highlight reels will look the same.
                        </p>
                    </div>
                    <img 
                    src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1d62a3751be9d7abfce84da8ca89be7d79f07fed-1232x1232.png?auto=format&fit=fill&q=80&w=1232" alt="" 
                    loading='lazy'
                    className='scale-75 lg:w-3/5 p-0 m-0'/>

                </div>

            </section>
            <section>
                <div className='bg-gray-100 text-black h-1/3'>
                    <div className='flex flex-col gap-7 px-8 py-10'>
                        <div className='flex flex-row flex-nowrap justify-between'>
                            <h2 className='font-black lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl text-lg text-red-500'>YOUR MAPS</h2>
                            <button className='border-2 md:px-4 md:py-3 px-3 py-2 border-black hover:bg-red-500 hover:text-white duration-300'>
                                <Link to='/maps'>
                                    View Maps
                                </Link>
                            </button>
                        </div>
                        <h6 className='lg:text-2xl md:text-xl sm:text-lg xsm:text-base text-sm'>
                            FIGHT AROUND THE WORLD
                        </h6>
                        <p className='lg:text-lg xsm:text-base text-sm text-gray-500'>
                            Each map is a playground to showcase your creative thinking. Purpose-built for team strategies, spectacular plays, and clutch moments. Make the play others will imitate for years to come.
                        </p>
                    </div>
                    <br />
                    <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt02c83424f7b41a97/6243813d8850ee0e8ea0ae56/maps-03ebbf2c074f13a65af1dba0c80f767e.png" alt="" 
                    loading='lazy'
                    className='w-full'/>
                </div>
            </section>
        </>
    )
}

export default Poster;