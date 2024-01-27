import React, { useEffect, useState } from 'react';
import axios from 'axios';


import AgentSlider from '../components/Poster/AgentSlider.Component';
import DefaultHOC from '../layout/Default.HOC';

const AgentPage = () => {
    const [getAgentsData,setAgentsData]= useState([]);
    useEffect(()=>{
        const apiGetAgentData = async()=>{
            const fetchAgentData = await axios.get('/agents');
            setAgentsData(fetchAgentData.data.data);
        }
        apiGetAgentData();
    },[]);
    var agentDataArray = [...getAgentsData];
    agentDataArray = agentDataArray.filter((item)=> item.isPlayableCharacter === true);
    
    return (

        <>
            <div className='overflow-hidden'>
                <div>
                    <AgentSlider props={agentDataArray} />
                </div>
            </div>
        </>
    )
}

export default DefaultHOC(AgentPage);