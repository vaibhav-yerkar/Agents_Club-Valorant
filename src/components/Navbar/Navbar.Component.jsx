import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <div className='px-4 py-4 flex flex-col sm:flex-row gap-2 justify-between h-auto'>
                <Link to="/" className=''>
                    <img 
                    src="https://freelogopng.com/images/all_img/1664302216valorant-logo-png.png" alt="Valorant-Home"
                    className='aspect-auto w-20'
                    />
                </Link>
                <div className='pe-6 flex flex-row gap-5 tracking-widest pt-4 text-sm'>
                    <Link to="/weapons">
                        <h5 href="https://google.com"
                        className='hover:text-red-500 font-orb font-semibold '>
                            Weapons
                        </h5>
                    </Link>
                    <Link to="/weapons">
                        <h5 href="https://google.com"
                        className='hover:text-red-500 font-orb font-semibold '>
                            Weapons
                        </h5>
                    </Link>
                    <Link to="/weapons">
                        <h5 href="https://google.com"
                        className='hover:text-red-500 font-orb font-semibold '>
                            Contact
                        </h5>
                    </Link>
                </div>
            </div>

            
        </>
    );
}



export default Navbar;