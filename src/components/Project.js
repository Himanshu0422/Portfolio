import React, { useEffect, useState } from 'react'
import ProjectName from './projectcomp/ProjectName';
import Card from './projectcomp/Card';
import ProjectList from './projectcomp/PeojectList';

const mernData =[
    {
        "id": "0",
        "name": "Study Notion",
        "description": "A ed-tech project",
        "github": "https://github.com/Himanshu0422/Study-NotionFrontend",
        "demo": "https://study-notion-frontend-flame.vercel.app/"
    },
    {
        "id": "1",
        "name": "Challenges app",
        "description": "React Challenges app",
        "github": "https://github.com/Himanshu0422/Challanges-App",
        "demo": "https://challanges-app.vercel.app/"
    },
    {
        "id": "2",
        "name": "Expense Tracker",
        "description": "Expense management app",
        "github": "https://github.com/Himanshu0422/Expense-TrackerApp",
        "demo": "https://expensetracker.cyclic.app/"
    }
];

const reactData =[
    {
        "id": "0",
        "name": "Quizzical app",
        "description": "Quiz Question app",
        "github": "https://github.com/Himanshu0422/Quizzical-App",
        "demo": "https://quizzical-app-rouge.vercel.app/"
    },
    {
        "id": "1",
        "name": "Tenzies Game",
        "description": "Fun game to play",
        "github": "https://github.com/Himanshu0422/Tenzies-Game",
        "demo": "https://tenzies-game-gamma-seven.vercel.app/"
    },
    {
        "id": "2",
        "name": "Food App",
        "description": "Order food online",
        "github": "https://github.com/himanshu0422/food-app",
        "demo": "https://food-app-theta-nine.vercel.app/"
    }
]

const basicData = [
    {
        "id": "0",
        "name": "Todo List",
        "description": "Add all your todo list items",
        "github": "https://github.com/Himanshu0422/Todo-List",
        "demo": "https://github.com/Himanshu0422/Todo-List/"
    },
    {
        "id": "1",
        "name": "Calculator",
        "description": "Calculator app",
        "github": "https://github.com/Himanshu0422/Calculator",
        "demo": "https://github.com/Himanshu0422/Calculator/"
    },
    {
        "id": "2",
        "name": "Simon-Game",
        "description": "Amazing game",
        "github": "https://github.com/Himanshu0422/Simon-Game",
        "demo": "https://simon-game-9qew.vercel.app/"
    }
]

const Project = () => {

    const [projectId, setProjectId] = useState(1);
    const [data, setData] = useState([]);
    const [projectType, setProjectType] = useState('MERN');

    useEffect(() => {
        if(projectType === 'MERN') {
            setData(mernData);
        }else if(projectType === 'React'){
            setData(reactData);
        }else{
            setData(basicData);
        }
        setProjectId(0);
    }, [projectType]);

    return (
        <div className='w-[70%] max-md:w-5/6 text-white flex flex-col gap-16'>
            <div>
                <div className='text-2xl'>Projects</div>
                <div className="line mt-2"></div>
            </div>
            <div className='flex justify-center'>
                <ProjectName setProjectType={setProjectType} />
            </div>
            <div className='flex sm:justify-evenly gap-10 max-sm:flex-col-reverse max-sm:items-center'>
                <ProjectList setProjectId={setProjectId}/>
                <Card data={data} projectId={projectId} />
            </div>
        </div>
    )
}

export default Project;