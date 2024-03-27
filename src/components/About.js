import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import coding from './../assets/coding2.jpeg';

const About = forwardRef((props, externalRef) => {
	const { ref: inViewRef, inView } = useInView({
		triggerOnce: false, // Allow animation to repeat every time the component comes into view
		threshold: 0.5,
	});

	return (
		<div
			ref={externalRef}
			className='w-[70%] max-md:w-5/6 flex max-sm:flex-col max-sm:gap-10 justify-center items-center'
		>
			<motion.div
				ref={inViewRef}
				className='sm:w-1/2'
				initial={{ opacity: 0, x: -50 }} // Initial animation properties from the left side
				animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }} // Animate opacity and x position based on inView
				transition={{ duration: 0.5 }} // Animation duration
			>
				<img
					src={coding}
					alt='a boy coding'
					className='h-72 max-lg:h-60 image rounded-2xl'
				/>
			</motion.div>
			<motion.div
				className='w-1/2 max-sm:w-3/4 text-white flex flex-col gap-4'
				initial={{ opacity: 0, x: 50 }} // Initial animation properties from the right side
				animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }} // Animate opacity and x position based on inView
				transition={{ duration: 0.5, delay: 0.2 }} // Animation duration with a delay
			>
				<div className='text-2xl'>About me</div>
				<div>
					I am a passionate Full Stack Developer with a keen interest in crafting seamless digital experiences. With expertise in the MERN stack alongside HTML, CSS, JavaScript, and C++, I thrive on turning innovative ideas into robust, user-centric solutions. Whether it's building dynamic web applications or optimizing backend functionalities, I bring a versatile skill set and a dedication to excellence to every project I undertake. My journey in software development is driven by a relentless pursuit of learning and a commitment to staying at the forefront of technological advancements. Let's collaborate and bring your digital visions to life!
				</div>
			</motion.div>
		</div>
	);
});

export default About;
