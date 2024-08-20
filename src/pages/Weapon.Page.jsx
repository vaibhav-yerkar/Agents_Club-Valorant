
import React from 'react'

import DefaultHOC from '../layout/Default.HOC';
import WeaponInfoPoster from '../components/Poster/WeaponInfoPoster.Component';

const WeaponInfoPage = () => {

    return (
        <div>
            <WeaponInfoPoster />
        </div>
    )
}

export default DefaultHOC(WeaponInfoPage);