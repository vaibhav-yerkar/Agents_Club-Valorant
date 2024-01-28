import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import DefaultHOC from '../layout/Default.HOC';
import axios from 'axios';

import WeaponInfoPoster from '../components/Poster/WeaponInfoPoster.Component';

const WeaponInfoPage = () => {
    const weaponId = useParams();
    const[getWeaponData, setWeaponData] = useState([]);
    useEffect(()=>{
        const apiGetWeapon = async ()=>{
            const fetchWeaponData = await axios.get(`/weapons/${weaponId.id}`);
            setWeaponData(fetchWeaponData.data.data);
        }
        apiGetWeapon();
    },[]);
    return (
        <div>
            <WeaponInfoPoster {...getWeaponData} />
        </div>
    )
}

export default DefaultHOC(WeaponInfoPage);