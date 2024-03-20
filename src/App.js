import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Intro from "./components/Intro";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
	return (
		<div className="gap-20 app my-8 mx-14 max-lg:mx-2 bg-gray-900 border border-black rounded-2xl flex flex-col justify-center items-center">
			<Intro />
			<About />
			<Project />
			<Skills />
			<ContactMe />
		</div>
	);
}

export default App;
