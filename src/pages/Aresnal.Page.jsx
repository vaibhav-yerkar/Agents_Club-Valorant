import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DefaultHOC from '../layout/Default.HOC';

const ArsenalPage = () => {
    const[getWeaponData, setWeaponData] = useState([]);
    useEffect(()=>{
        const apiGetWeapons = async ()=>{
            const fetchWeaponData = await axios.get('/weapons');
            setWeaponData(fetchWeaponData.data.data);
        }
        apiGetWeapons();
    },[]);
    const weaponDataArray = [...getWeaponData];
    return (
        <div>Arsenal.Page</div>
    )
}

export default DefaultHOC(ArsenalPage);