import React from 'react';
import coding from './../../assets/coding.jpeg';

const Image = () => {
  return (
    <div className='flex justify-center items-center'>
        <img src={coding} alt='a boy coding' className='h-72 rounded-full image' />
    </div>
  )
}

export default Image;