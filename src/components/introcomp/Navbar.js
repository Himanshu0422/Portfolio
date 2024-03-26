import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import Navbut from './Navbut';

const Navbar = ({ scrollToAbout, scrollToProject, scrollToSkills, scrollToContact }) => {

  const data = [
    {
      "name": "Contact",
      "scrollFunction": scrollToContact // Pass down the scroll function for Contact
    },
    {
      "name": "Skills",
      "scrollFunction": scrollToSkills // Pass down the scroll function for Skills
    },
    {
      "name": "About",
      "scrollFunction": scrollToAbout // Pass down the scroll function for About
    },
    {
      "name": "Projects",
      "scrollFunction": scrollToProject // Pass down the scroll function for Projects
    }
  ]

  return (
    <div className='flex justify-between'>
      {data.map((i, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1 }} // Example animation on hover, you can customize this
          whileTap={{ scale: 0.9 }} // Example animation on tap, you can customize this
          transition={{ duration: 0.2 }} // Example transition duration
          onClick={i.scrollFunction} // Call the corresponding scroll function when clicked
        >
          <Navbut name={i.name} />
        </motion.div>
      ))}
    </div>
  );
};

export default Navbar;
