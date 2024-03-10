import React from 'react'

const data = [
  {
    "name": "Study "
  },
  {
    "name": "Challenges"
  },
  {
    "name": "Expense "
  }
]

const ProjectName = () => {
  return (
    <div className='flex sm:justify-between gap-3 projectname'>
      {data.map((i) => {
        return <div className='flex justify-center items-center max-sm:text-sm text-white h-12 w-40 rounded-2xl cursor-pointer navbut'>
                    {i.name}
                </div>
      })}
    </div>
  )
}

export default ProjectName;