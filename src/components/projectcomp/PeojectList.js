import React, { useEffect, useState } from 'react';

const PeojectList = ({ data, setProjectId }) => {

    const [activeButton, setActiveButton] = useState(0);

    useEffect(() => {
        setActiveButton(0);
    }, [data])

    const handleClick = (index) => {
        setActiveButton(index);
        setProjectId(index)
    };

    return (
        <div className='flex flex-wrap max-sm:justify-center sm:flex-col justify-between max-sm:gap-5'>
            <img src={data[0]?.image} alt='coding' className={`rounded-full h-[6rem] w-[6rem] cursor-pointer ${activeButton === 0 ? 'active2' : ''}`} onClick={() => handleClick(0)} />
            <img src={data[1]?.image} alt='coding' className={`rounded-full h-[6rem] w-[6rem] cursor-pointer ${activeButton === 1 ? 'active2' : ''}`} onClick={() => handleClick(1)} />
            <img src={data[2]?.image} alt='coding' className={`rounded-full h-[6rem] w-[6rem] cursor-pointer ${activeButton === 2 ? 'active2' : ''}`} onClick={() => handleClick(2)} />
        </div>
    )
}

export default PeojectList;