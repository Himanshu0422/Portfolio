import React from 'react';

const Card = ({data, projectId}) => {

    const project = data[projectId];

    return (
        <div className='card p-6 rounded-lg flex flex-col gap-4'>
            <img src={project?.image} alt='coding' className='h-56 max-sm:w-[15rem] w-[18rem]' />
            <div className='flex flex-col justify-center items-center gap-2'>
                <div className='text-lg'>{project?.name}</div>
                <div className='text-sm'>{project?.description}</div>
                <div className='flex gap-5 text-2xl'>
                    <a href={project?.demo}><i class="fa-solid fa-play"></i></a>
                    <a href={project?.github}><i class="fa-brands fa-github"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Card;