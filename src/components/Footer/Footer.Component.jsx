import React from 'react';
import { AiOutlineLinkedin, AiFillGithub, AiOutlineInstagram  } from "react-icons/ai";
import { SiValorant, SiRiotgames, SiHackerrank } from "react-icons/si";
import styled from 'styled-components';



const RiotIcon = styled(SiRiotgames)`
    &:hover{
        transition: filter 100ms ease-in-out;
        color: rgb(240,60,60);
    }
    font-size: 2.4rem;
`;

const ValorantIcon = styled(SiValorant)`
    &:hover{
        filter: brightness(1);
        transition: filter 100ms ease-in-out;
    }
    filter: brightness(0.6);
    font-size: 2.4rem;
`;


const HackerrankIcon = styled(SiHackerrank)`
    &:hover{
        filter: brightness(0.8);
        transition: filter 80ms ease-in-out;
    }
    filter: brightness(0.5);
    font-size: 2.5rem;
    border-radius: 6px;
    color: rgb(20,24,31);
    background-image: linear-gradient(to right, rgb(245,249,253) 50%, rgb(38,235,86) 51%,rgb(38,235,86));
`;

const LinkedInIcon = styled(AiOutlineLinkedin)`
    &:hover{
        filter: brightness(0.8);
        transition: filter 80ms ease-in-out;
    }
    filter: brightness(0.5);
    font-size: 2.5rem;
    border-radius: 6px;
    background-color: rgb(14,79,181);
`;

const GithubIcon = styled(AiFillGithub)`
    &:hover{
        filter: brightness(0.8);
        transition: filter 80ms ease-in-out;
    }
    filter: brightness(0.5);
    font-size: 2.5rem;
    color: rgb(250,249,245);
    border-radius: 4px;
    background-color: rgb(20,30,24);
`;

const InstagramIcon = styled(AiOutlineInstagram)`
    &:hover{
        filter: brightness(0.8);
        transition: filter 80ms ease-in-out;
    }
    filter: brightness(0.5);
    font-size: 2rem;
    border-radius: 5px;
    padding: -20px;
    background-image: linear-gradient(to top right, rgb(254,180,10) 16%, rgb(246,66,19) 25%, rgb(246,0,73) 36%, rgb(183,0,170) 49%, rgb(108,0,246) 74%, rgb(156,0,237) 100%);
`;

const Footer = () => {
    return (
        <> 
            <div className='bg-black bg-opacity-50 w-full h-auto flex flex-col flex-nowrap gap-3 py-auto pb-8'>
                <div className='h-1/4'></div>
                
                <div className='flex flex-col flex-wrap justify-center gap-x-80 pt-10 gap-y-12'>
                    
                    <div className='flex flex-row gap-x-16 gap-y-10 justify-center flex-wrap'>
                        <a 
                        href="https://www.riotgames.com/en"
                        target='_blank'
                        rel='noreferrer'
                        >
                            <div className='flex flex-row flex-nowrap justify-center gap-1 hover:text-red-500'>
                                <RiotIcon />
                                <div className='flex flex-col flex-nowrap text-sm font-black'>
                                    <p>RIOT</p>
                                    <p>GAMES</p>
                                </div>
                            </div>
                        </a>
                        <a 
                        href="https://playvalorant.com/"
                        target='_blank'
                        rel='noreferrer'
                        >
                            <ValorantIcon />
                        </a>
                    </div>
                    <div className='flex flex-row justify-center'>
                        <div className='flex justify-center pb-6 flex-col w-3/4'>
                            <p className='text-center tracking-wide'>
                                This website is a clone created for educational purposes as a part of a web development project. The content and design are inspired by Valorant's Official Page. All rights for the original content and design belong to their respective owners.For the official website, please refer above links.
                                </p>
                            <p className='text-center pt-1'>2024 Vaibhav Yerkar. All rights reserved.</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-8 flex-wrap justify-center'>
                        <a 
                        href='https://github.com/Vaibhav-Yerkar'
                        target='_blank'
                        rel='noreferrer'
                        >
                            <GithubIcon />
                        </a>
                        <a 
                        href="https://www.linkedin.com/in/vaibhav-yerkar-0ab417258"
                        target='_blank'
                        rel='noreferrer'
                        >
                            <LinkedInIcon />
                        </a>
                        <a 
                        href="https://www.hackerrank.com/profile/vaibhavyerkar201"
                        target="_blank"
                        rel='noreferrer'
                        >
                            <HackerrankIcon />
                        </a>
                        <a 
                        href="https://www.hackerrank.com/profile/vaibhavyerkar201"
                        target="_blank"
                        rel='noreferrer'
                        >
                            <InstagramIcon />
                        </a>
                    </div>
                </div>
                <div className='h-1/4'></div>
            </div>
        </>
    );
};

export default Footer;