import React from "react";

export const ExperienceCard = ({ experience }) => {
  return (
    <div className="bg-[#2D2F36] shadow-lg p-6 rounded-lg mb-6">
      <h3 className="text-2xl font-semibold text-white">{experience.title}</h3>
      <p className="text-gray-400">{experience.company} | {experience.location}</p>
      <p className="text-gray-500 text-sm mb-4">{experience.duration}</p>
      <ul className="list-disc list-inside space-y-2">
        {experience.responsibilities.map((responsibility, index) => (
          <li key={index} className="text-gray-300">{responsibility}</li>
        ))}
      </ul>
      <div className="mt-4">
        <h4 className="font-semibold text-white">Technologies Used:</h4>
        <div className="flex flex-wrap gap-4 mt-2">
          {experience.tools.map((tool, index) => (
            <span key={index} className="bg-gray-700 text-gray-200 px-2 py-1 rounded text-sm">{tool}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
