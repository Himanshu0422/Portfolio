import React from 'react';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express', 'MongoDB', 'Mongoose', 'Redux','TailwindCSS', 'C++', 'Java'];

const Skills = () => {
	return (
		<div className='w-[70%] max-md:w-5/6 text-white flex flex-col gap-16'>
			<div>
				<div className='flex justify-end text-2xl'>Skills</div>
				<div className="line mt-2"></div>
			</div>
			<div className='flex flex-wrap justify-evenly gap-10'>
				{skills.map((skill, index) => (
					<div className='w-[25%] max-sm:w-[35%] flex justify-center items-center max-sm:text-sm text-white h-12 rounded-2xl navbut'>
						{skill}
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;