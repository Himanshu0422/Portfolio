import React from 'react';
import Image from './introcomp/Image';
import { Header } from './introcomp/Header';
import Info from './introcomp/Info';

const Intro = () => {

    return (
        <div className='intro h-[95vh] w-3/4 max-md:w-5/6 flex justify-evenly flex-col'>
            <Header />
            <div className='flex flex-col gap-6'>
                <Image />
                <Info />
            </div>
        </div>
    )
}

export default Intro;