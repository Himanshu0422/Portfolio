import React, { useRef } from "react";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Intro from "./components/Intro";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import { Toaster } from "react-hot-toast";

function App() {

	const aboutRef = useRef(null);
	const projectRef = useRef(null);
	const skillsRef = useRef(null);
	const contactRef = useRef(null);

	const scrollToSection = (ref) => {
		ref.current.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<div>
			<Toaster position="top-center" reverseOrder={false} />
			<div className="gap-20 app my-8 mx-14 max-lg:mx-2 bg-gray-900 border border-black rounded-2xl flex flex-col justify-center items-center">
				<Intro
					scrollToAbout={() => scrollToSection(aboutRef)}
					scrollToProject={() => scrollToSection(projectRef)}
					scrollToSkills={() => scrollToSection(skillsRef)}
					scrollToContact={() => scrollToSection(contactRef)}
				/>
				<About ref={aboutRef} />
				<Skills ref={skillsRef} />
				<Experience />
				<Project ref={projectRef} />
				<ContactMe ref={contactRef} />
			</div>
		</div>
	);
}

export default App;
