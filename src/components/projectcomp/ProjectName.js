import React from 'react'

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
]

const ProjectName = ({setProjectType}) => {
  return (
    <div className='w-[90%] flex sm:justify-between gap-3 projectname'>
      {data.map((i) => {
        return <div className='flex justify-center items-center max-sm:text-sm text-white h-12 w-40 rounded-2xl cursor-pointer navbut' onClick={() => setProjectType(i.name)}>
                    {i.name}
                </div>
      })}
    </div>
  )
}

export default ProjectName;