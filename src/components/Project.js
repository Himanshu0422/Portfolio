import React from 'react'
import ProjectName from './projectcomp/ProjectName';
import Card from './projectcomp/Card';
import ProjectList from './projectcomp/PeojectList';

const Project = () => {
    return (
        <div className='w-[70%] max-md:w-5/6 text-white flex flex-col gap-16'>
            <div>
                <div className='text-2xl'>Projects</div>
                <div className="line"></div>
            </div>
            <ProjectName />
            <div className='flex sm:justify-evenly gap-10 max-sm:flex-col-reverse max-sm:items-center'>
                <ProjectList />
                <Card />
            </div>
        </div>
    )
}

export default Project;