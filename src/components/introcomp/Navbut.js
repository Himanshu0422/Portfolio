import React from 'react'

const Navbut = ({name}) => {
  return (
    <div className='text-white w-24 h-10 flex justify-center items-center rounded-xl cursor-pointer max-md:mx-3 navbut'>
        {name}
    </div>
  )
}

export default Navbut;