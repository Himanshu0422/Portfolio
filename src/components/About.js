import React from 'react';
import coding from './../assets/coding.jpeg';

const About = () => {
  return (
    <div className='w-3/4 max-md:w-5/6 flex max-sm:flex-col max-sm:gap-10 justify-center items-center'>
        <div className='sm:w-1/2'>
            <img src={coding} alt='a boy coding' className='h-80 max-lg:h-60 image rounded-2xl' />
        </div>
        <div className='w-1/2 max-sm:w-3/4 text-white flex flex-col gap-4'>
            <div className='text-2xl'>About me</div>
            <div>I am actively seeking opportunities to apply my acquired skills and knowledge to real-world projects. My educational background has equipped me with a solid foundation in AI and ML algorithms, data analysis, and programming languages such as Python. Additionally, I have gained practical experience through hands-on projects, both independently and collaboratively.</div>
        </div>
    </div>
  )
}

export default About