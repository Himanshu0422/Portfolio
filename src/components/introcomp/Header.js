import React, { useState } from 'react';
import Navbar from './Navbar';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export const Header = () => {

    const [nav, setNav] = useState(true);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='sm:mt-5 mt-[-10px]'>
            <div className='max-md:hidden'>
                <Navbar />
            </div>
            <div className='flex justify-end text-white'>
                <button onClick={handleNav} className='md:hidden flex justify-center items-center cursor-pointer sidebutton rounded-full p-2'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </button>
            </div>
        </div>
    )
}
