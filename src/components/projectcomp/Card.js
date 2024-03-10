import React from 'react';
import coding from './../../assets/coding.jpeg';

const Card = () => {
    return (
        <div className='card p-5 rounded-lg card'>
            <img src={coding} alt='coding' className='h-56 w-[15rem]' />
            <div className='flex flex-col justify-center items-center'>
                <div>Study Notion</div>
                <div>An Ed-tech Project</div>
                <div className='flex gap-5'>
                    <div>Link</div>
                    <div>Github</div>
                </div>
            </div>
        </div>
    )
}

export default Card