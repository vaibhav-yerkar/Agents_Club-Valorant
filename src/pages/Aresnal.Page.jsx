import React, { useEffect, useState} from 'react';
import axios from 'axios';

import DefaultHOC from '../layout/Default.HOC';
import ArsenalPoster from '../components/Poster/ArsenalPoster.Component';

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
        <div>
            <div style={{height: '50vh'}}></div>
            <ArsenalPoster props={weaponDataArray} />
        </div>
    )
}

export default DefaultHOC(ArsenalPage);