import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

import CursorTrail from "./components/CursorTrail";

const App = () => {
	return (
		<main>
			<CursorTrail />
			<Navbar />
			<Hero />
			<About />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</main>
	);
};

export default App;
