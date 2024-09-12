import React from 'react';
import { ExperienceCard } from './experience/ExperienceCard';

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'enAct eServices Pvt Ltd',
    location: 'Mohali, India',
    duration: 'May 2024 - Present',
    tools: ['React Native', 'Firebase', 'Stripe', 'Kotlin', 'Expo', 'RevenueCat', 'React.js'],
    responsibilities: [
      'Developed and refined mobile app user interfaces with React Native, leading to a 20% boost in user engagement on both iOS and Android.',
      'Integrated Firebase for real-time data management and authentication, efficiently handling data for over 5,000 active users.',
      'Incorporated Stripe for secure payment transactions.',
      'Implemented Brother Print SDK on the native Android (Kotlin) side and integrated it into an Expo app, enabling seamless printing functionality.',
      'Added a subscription modal using RevenueCat to manage in-app subscriptions, streamlining the payment flow for recurring services.',
      'Built an admin panel in React.js to efficiently manage users and chefs, including approving dishes uploaded by chefs, enhancing operational efficiency.'
    ]
  }
];

const Experience = () => {
  return (
    <div className='w-[70%] max-md:w-5/6 text-white flex flex-col gap-16'>
      <div>
        <div className='flex justify-end text-2xl'>Experience</div>
        <div className="line mt-2"></div>
      </div>
      <section id="experience" className="py-12">
        <div className="container mx-auto px-4">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
