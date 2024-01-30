import React, { useState } from 'react'

const WeaponInfoPoster= (props) => {
    const [selectedSkin, setSelectedSkin] = useState({ displayName: props.displayName, displayIcon: props.displayIcon });
    
    const changeSkinImg = (selectedSkin) => {
        setSelectedSkin(selectedSkin);
    };

    const WeaponSkin = ({ displayName, displayIcon }) => {
        return (
            <>
                <div className='flex flex-col flex-nowrap gap-y-4'>
                    <img
                    src={displayIcon}
                    alt=""
                    draggable={false}
                    className='w-auto h-auto'
                    />
                    <h2 className='font-extrabold text-xl lg:text-3xl md:text-2xl text-center animate-glitch'>{displayName}</h2>
                </div>
            </>
        );
    };

    return (
        <>
            <div className='flex flex-col flex-nowrap gap-10'>
                <div className='flex flex-row flex-wrap gap-x-4 gap-y-3 justify-evenly' style={{ height: '75vh' }}>
                    <div className='w-full md:w-2/5 bg-gray-700 rounded-lg bg-opacity-50 flex flex-col justify-center'>
                        {props.weaponStats === undefined || props.weaponStats === null ?
                            (
                                <div className='flex flex-col items-center w-full text-sm xsm:text-base sm:text-xl lg:text-3xl md:text-2xl font-black animate-glitch'>
                                    <h1> NO DATA FOUND </h1>
                                </div>
                            ):
                            (
                                <div className='flex flex-col items-center w-full text-xs xsm:text-sm sm:text-lg lg:text-2xl md:text-xl font-semibold text-gray-400'>
                                    <h1>
                                        {` Fire Rate : ${props.weaponStats.fireRate}`}
                                    </h1>
                                    <h1>
                                        {` Magzine Size : ${props.weaponStats.magzineSize}`}
                                    </h1>
                                    <h1>
                                        {` Run Speed Multiplier : ${props.weaponStats.runSpeedMultiplier}`}
                                    </h1>
                                    <h1>
                                        {` Equip Time(sec) : ${props.weaponStats.equipTimeSeconds}`}
                                    </h1>
                                    <h1>
                                        {` Reload Time(sec) : ${props.weaponStats.reloadTimeSeconds}`}
                                    </h1>
                                    <h1>
                                        {` First Bullet Accuracy : ${props.weaponStats.firstBulletAccuracy}`}
                                    </h1>
                                </div>
                            )
                        }
                    </div>
                    <div className='flex flex-col flex-nowrap justify-center items-center'>
                        <WeaponSkin {...selectedSkin} />
                    </div>
                </div>
                <div>
                    {/* skin menu  */}
                    <div className='flex gap-x-3 gap-y-3 flex-wrap justify-evenly'>
                        {props.skins !== undefined ? props.skins.map((item, index) => {
                            if (item.displayName !== 'Random Favorite Skin') {
                                if(item.displayIcon!==null){
                                    if(item.displayName.includes('Standard')){
                                        item = props;
                                    }
                                    return (
                                        <div key={index} className='bg-gray-700 rounded-lg bg-opacity-50'>
                                            <img
                                            src={item.displayIcon}
                                            alt=""
                                            onClick={() => changeSkinImg({ displayName: item.displayName, displayIcon: item.displayIcon })}
                                            className='aspect-auto max-h-24 px-5 py-5 z-20 drop-shadow-xl'
                                            />
                                        </div>
                                    );
                                }
                            }
                        }) :
                        ''}
                    </div>
                </div>
            </div>
        </>
    );
};
    
export default WeaponInfoPoster;