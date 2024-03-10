import React from 'react';

const Info = () => {
    return (
        <div className='text-white flex justify-center items-center'>
            <div className='w-4/5 flex flex-col justify-center items-center gap-3'>
                <div className='text-2xl max-sm:text-xl'>Hey</div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <div className='text-5xl font-bold max-md:text-3xl max-sm:text-2xl max'>I'm Himanshu Mittal</div>
                    <div className='flex gap-2 text-3xl max-sm:text-xl font-bold'>
                        <div>Full Stack</div>
                        <div className='text-red-600'>Developer|</div>
                    </div>
                    <div className='w-5/6 mt-1 max-sm:w-11/12 text-md'>A highly motivated student studying Full Stack development. Actively seeking opportunities to apply my skills and knowledge to real-world projects and contribute to the advancement of the industry.</div>
                </div>
                <div className='flex gap-24 max-sm:gap-10 mt-3'>
                    <div className='text-white w-24 h-10 flex justify-center items-center rounded-xl cursor-pointer max-md:mx-3 navbut'>
                        Learn More
                    </div>
                    <div className='text-white w-24 h-10 flex justify-center items-center rounded-xl cursor-pointer max-md:mx-3 navbut'>
                        Contact Me
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info