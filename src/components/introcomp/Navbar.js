import React from 'react'
import Navbut from './Navbut';

const data = [
  {
    "name": "Contact"
  },
  {
    "name": "Skills"
  },
  {
    "name": "About"
  },
  {
    "name": "Certificate"
  },
  {
    "name": "Projects"
  }
]

const Navbar = () => {
  return (
    <div className='flex justify-between'>
      {data.map((i) => {
        return <Navbut name={i.name} />
      })}
    </div>
  )
}

export default Navbar;