import React from 'react';


import AgentSlider from '../components/Poster/AgentSlider.Component';
import DefaultHOC from '../layout/Default.HOC';

const AgentPage = () => {
    return (
        <>
            <div className='overflow-hidden'>
                <div>
                    <AgentSlider />
                </div>
            </div>
        </>
    )
}

export default DefaultHOC(AgentPage);