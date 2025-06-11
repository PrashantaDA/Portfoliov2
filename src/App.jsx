import { Toaster } from "react-hot-toast";
import { CursorTrail } from "./components/CursorTrail";
import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { BackToTop } from "./components/BackToTop";

function App() {
	return (
		<>
			<Toaster
				position="top-right"
				toastOptions={{
					success: {
						style: {
							background: "#1a1a1a",
							color: "#fff",
							border: "1px solid #4ade80",
						},
						iconTheme: {
							primary: "#4ade80",
							secondary: "#fff",
						},
					},
					error: {
						style: {
							background: "#1a1a1a",
							color: "#fff",
							border: "1px solid #ef4444",
						},
						iconTheme: {
							primary: "#ef4444",
							secondary: "#fff",
						},
					},
				}}
			/>
			<CursorTrail />
			<Navbar />
			<main className="relative">
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Contact />
			</main>
			<Footer />
			<BackToTop />
		</>
	);
}

export default App;
