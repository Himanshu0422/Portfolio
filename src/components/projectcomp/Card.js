import React from 'react';
import coding from './../../assets/coding.jpeg';

const Card = ({data, projectId}) => {

    const project = data[projectId];

    return (
        <div className='card p-5 rounded-lg flex flex-col gap-2'>
            <img src={coding} alt='coding' className='h-56 max-sm:w-[15rem] w-[16rem]' />
            <div className='flex flex-col justify-center items-center'>
                <div className='text-lg'>{project?.name}</div>
                <div className='text-sm'>{project?.description}</div>
                <div className='flex gap-5'>
                    <a href={project?.demo}>Demo</a>
                    <a href={project?.github}>Source Code</a>
                </div>
            </div>
        </div>
    )
}

export default Card;