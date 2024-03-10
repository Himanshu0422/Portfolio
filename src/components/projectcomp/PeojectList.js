import React from 'react';
import coding from './../../assets/coding.jpeg';

const PeojectList = () => {
    return (
        <div className='flex sm:flex-col justify-between max-sm:gap-5'>
            <img src={coding} alt='coding' className='rounded-full sm:h-24 h-[5rem]' />
            <img src={coding} alt='coding' className='rounded-full sm:h-24 h-[5rem]' />
            <img src={coding} alt='coding' className='rounded-full sm:h-24 h-[5rem]' />
        </div>
    )
}

export default PeojectList;