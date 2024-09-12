import React, { forwardRef, useEffect, useState } from 'react';
import ProjectName from './projectcomp/ProjectName';
import Card from './projectcomp/Card';
import ProjectList from './projectcomp/PeojectList';

const mernData = [
	{
		"id": "0",
		"name": "Air Wave",
		"description": "Flight Booing website",
		"github": "https://github.com/Himanshu0422/Flight-Booking",
		"demo": "https://air-wave.vercel.app/",
		"image": "https://res.cloudinary.com/ds6nhnm3n/image/upload/v1726155775/gdgqay1wnpeqeug8gfkd.png"
	},
	{
		"id": "1",
		"name": "Edunex",
		"description": "A ed-tech project",
		"github": "https://github.com/Himanshu0422/EdunexFrontend",
		"demo": "https://edunex.vercel.app/",
		"image": "https://res.cloudinary.com/ds6nhnm3n/image/upload/v1711476746/mdktub6wnor6a1ou8dmb.png"
	},
	{
		"id": "2",
		"name": "Challenges app",
		"description": "React Challenges app",
		"github": "https://github.com/Himanshu0422/Challanges-App",
		"demo": "https://challanges-app.vercel.app/",
		"image": "https://res.cloudinary.com/ds6nhnm3n/image/upload/v1711476737/umuosndkfjaurhdlopci.png"
	},
];

const reactData = [
	{
		"id": "0",
		"name": "Quizzical app",
		"description": "Quiz Question app",
		"github": "https://github.com/Himanshu0422/Quizzical-App",
		"demo": "https://quizzical-app-rouge.vercel.app/",
		"image": "https://res.cloudinary.com/ds6nhnm3n/image/upload/v1711476736/dl5qhko8uyqoexl1g2j4.png"
	},
	{
		"id": "1",
		"name": "Tenzies Game",
		"description": "Fun game to play",
		"github": "https://github.com/Himanshu0422/Tenzies-Game",
		"demo": "https://tenzies-game-gamma-seven.vercel.app/",
		"image": "https://res.cloudinary.com/ds6nhnm3n/image/upload/v1711476737/tbomhylm6synhc1smihc.png"
	},
	{
		"id": "2",
		"name": "Food App",
		"description": "Order food online",
		"github": "https://github.com/himanshu0422/food-app",
		"demo": "https://food-app-theta-nine.vercel.app/",
		"image": "https://res.cloudinary.com/ds6nhnm3n/image/upload/v1711477022/so3vvcvgazciq7kznclo.png"
	}
];

const basicData = [
	{
		"id": "0",
		"name": "Todo List",
		"description": "Add all your todo list items",
		"github": "https://github.com/Himanshu0422/Todo-List",
		"demo": "https://github.com/Himanshu0422/Todo-List/",
		"image": "https://res.cloudinary.com/ds6nhnm3n/image/upload/v1711476737/cnfqzoosprmnswvd6axu.png"
	},
	{
		"id": "1",
		"name": "Calculator",
		"description": "Calculator app",
		"github": "https://github.com/Himanshu0422/Calculator",
		"demo": "https://calculator-phi-six-99.vercel.app/",
		"image": "https://res.cloudinary.com/ds6nhnm3n/image/upload/v1711476736/nty9q3rnexmnggjecqew.png"
	},
	{
		"id": "2",
		"name": "Simon-Game",
		"description": "Amazing game",
		"github": "https://github.com/Himanshu0422/Simon-Game",
		"demo": "https://simon-game-9qew.vercel.app/",
		"image": "https://res.cloudinary.com/ds6nhnm3n/image/upload/v1711476735/bdkaatg2qcqlrmk6szaf.png"
	}
];

const Project = forwardRef((props, externalRef) => {
	const [projectId, setProjectId] = useState(1);
	const [data, setData] = useState([]);
	const [projectType, setProjectType] = useState('MERN');

	useEffect(() => {
		if (projectType === 'MERN') {
			setData(mernData);
		} else if (projectType === 'React') {
			setData(reactData);
		} else {
			setData(basicData);
		}
		setProjectId(0);
	}, [projectType]);

	return (
		<div className='w-[70%] max-md:w-5/6 text-white flex flex-col gap-16' ref={externalRef}>
			<div>
				<div className='text-2xl'>Projects</div>
				<div className="line mt-2"></div>
			</div>
			<div className='flex justify-center'>
				<ProjectName setProjectType={setProjectType} />
			</div>
			<div className='flex sm:justify-evenly gap-10 max-sm:flex-col-reverse max-sm:items-center'>
				<ProjectList data={data} setProjectId={setProjectId} />
				<Card data={data} projectId={projectId} />
			</div>
		</div>
	)
});

export default Project;
