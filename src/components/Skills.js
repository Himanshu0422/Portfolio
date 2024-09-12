import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node',
  'Express',
  'MongoDB',
  'Mongoose',
  'Redux',
  'TailwindCSS',
  'React Native',
  'Sequelize',
  'Redis',
  'C++',
  'Java',
];

const Skills = forwardRef((props, externalRef) => {
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <div className='w-[70%] max-md:w-5/6 text-white flex flex-col gap-16' ref={externalRef}>
      <div>
        <div className='flex justify-end text-2xl'>Skills</div>
        <div className="line mt-2"></div>
      </div>
      <motion.div
        className='flex flex-wrap justify-evenly gap-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        ref={inViewRef}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className='w-[25%] max-sm:w-[35%] flex justify-center items-center max-sm:text-sm text-white h-12 rounded-2xl navbut'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            ref={inViewRef}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
});

export default Skills;
