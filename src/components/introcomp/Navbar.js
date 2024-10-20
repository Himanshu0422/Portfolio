import React from 'react';
import { motion } from 'framer-motion';
import Navbut from './Navbut';

const Navbar = ({ scrollToAbout, scrollToProject, scrollToSkills, scrollToContact }) => {

  const data = [
    {
      "name": "Contact",
      "scrollFunction": scrollToContact
    },
    {
      "name": "Skills",
      "scrollFunction": scrollToSkills
    },
    {
      "name": "About",
      "scrollFunction": scrollToAbout
    },
    {
      "name": "Projects",
      "scrollFunction": scrollToProject
    }
  ]

  return (
    <div className='flex justify-between'>
      {data.map((i, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          onClick={i.scrollFunction}
        >
          <Navbut name={i.name} />
        </motion.div>
      ))}
    </div>
  );
};

export default Navbar;
