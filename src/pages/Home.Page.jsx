import React, { useEffect, useState } from 'react';
import DefaultHOC from '../layout/Default.HOC';
import axios from 'axios';

import Poster from '../components/Poster/Poster.Component';

const HomePage = () => {

    const [getAgents,setAgents]= useState([]);
    useEffect(()=>{
        const getResultData = async()=>{
            const resultData = await axios.get('/agents');
            setAgents(resultData.data.data);
        }
        getResultData();
    },[]);
    let agentArray = [...getAgents];
    return (
        <>
            <div className=''>
                <Poster {...{agentArray}} />
            </div>
        </>
    );
}

export default DefaultHOC(HomePage);