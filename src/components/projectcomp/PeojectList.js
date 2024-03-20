import React from 'react';
import coding from './../../assets/coding.jpeg';

const PeojectList = ({setProjectId}) => {
    return (
        <div className='flex sm:flex-col justify-between max-sm:gap-5'>
            <img src={coding} alt='coding' className='rounded-full h-[5rem]' onClick={() => setProjectId(0)}/>
            <img src={coding} alt='coding' className='rounded-full h-[5rem]' onClick={() => setProjectId(1)}/>
            <img src={coding} alt='coding' className='rounded-full h-[5rem]' onClick={() => setProjectId(2)}/>
        </div>
    )
}

export default PeojectList;