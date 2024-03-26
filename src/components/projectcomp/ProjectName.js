import React, { useState } from 'react';

const data = [
	{
		"name": "MERN"
	},
	{
		"name": "React"
	},
	{
		"name": "Basic"
	}
];

const ProjectName = ({ setProjectType }) => {
	const [activeButton, setActiveButton] = useState(0);

	const handleClick = (name, index) => {
		setProjectType(name);
		setActiveButton(index);
	};

	return (
		<div className='w-[90%] flex sm:justify-between gap-3 projectname'>
			{data.map((item, index) => (
				<div
					key={index}
					className={`flex justify-center items-center max-sm:text-sm text-white h-12 w-40 rounded-2xl cursor-pointer navbut ${activeButton === index ? 'active' : ''
						}`}
					onClick={() => handleClick(item.name, index)}
				>
					{item.name}
				</div>
			))}
		</div>
	);
};

export default ProjectName;
