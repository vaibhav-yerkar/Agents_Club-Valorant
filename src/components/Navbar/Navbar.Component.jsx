import React from 'react';
import { Link } from 'react-router-dom';
import {TiThMenu} from 'react-icons/ti';
import styled from 'styled-components';
import '../../App.css'

const MenuIcon = styled(TiThMenu)`
    padding-top: 0.1rem;
    font-size: 2.4rem;
    color: rgb(255,80,80);
`;

const NavSm = () => {

    return (
        <>
            <div className='flex flex-row justify-between px-4 py-4 fixed w-full bg-black bg-opacity-80 z-50'>
                <Link to="/" className='opacity-90 hover:opacity-100'>
                    <img 
                    src={process.env.REACT_APP_NAVBAR_VALORANT_LOGO} 
                    alt="Valorant-Home"
                    draggable={false}
                    className='aspect-auto w-20'
                    />
                </Link>
                <div className='px-4 inline-block relative' id='menuIcon'>
                    <button>
                        <MenuIcon/>
                    </button>
                    <div id="dropDownMenu"
                    className='hidden absolute min-w-40 z-1 bg-black bg-opacity-50'>
                        <Link to="/weapons">
                            <h5 
                            className='hover:text-red-500 font-semibold '>
                                Arsenal
                            </h5>
                        </Link>
                        <Link to="/agents">
                            <h5 
                            className='hover:text-red-500 font-semibold '>
                                Agents
                            </h5>
                        </Link>
                        <Link to="/maps">
                            <h5 
                            className='hover:text-red-500 font-semibold '>
                                Maps
                            </h5>
                        </Link>
                        <Link to="/playercards">
                            <h5 
                            className='hover:text-red-500 font-semibold '>
                                Cards
                            </h5>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

const NavLg = () => {
    return(
        <>
            <div className='px-4 py-4 flex flex-row gap-2 justify-between h-auto fixed top-0 left-0 w-full bg-black bg-opacity-80 z-50'>
                <Link to="/" className='opacity-90 hover:opacity-100'>
                    <img 
                    src={process.env.REACT_APP_NAVBAR_VALORANT_LOGO} 
                    alt="Valorant-Home"
                    draggable={false}
                    className='aspect-auto w-20'
                    />
                </Link>
                <div className='pe-6 flex flex-row gap-5 tracking-widest pt-4 text-sm'>
                    <Link to="/weapons">
                        <h5 
                        className='hover:text-red-500  font-semibold '>
                            Arsenal
                        </h5>
                    </Link>
                    <Link to="/agents">
                        <h5 
                        className='hover:text-red-500 font-semibold '>
                            Agents
                        </h5>
                    </Link>
                    <Link to="/maps">
                        <h5 
                        className='hover:text-red-500 font-semibold '>
                            Maps
                        </h5>
                    </Link>
                    <Link to="/playercards">
                        <h5 
                        className='hover:text-red-500 font-semibold '>
                            Cards
                        </h5>
                    </Link>
                </div>
            </div>
        </>
    );

}


const Navbar = () => {
    return (
        <>
            <div className='block xsm:hidden'>
                <NavSm />
            </div>
            <div className='hidden xsm:block'>
                <NavLg />
            </div>
        </>
    );
}



export default Navbar;