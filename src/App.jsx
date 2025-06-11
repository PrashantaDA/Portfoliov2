import { useEffect, useState } from "react";
import CursorTrail from "./components/CursorTrail";
import Loader from "./components/Loader";
import BackToTop from "./components/BackToTop";
import { Navbar, Hero, About, Skills, Projects, Contact, Footer } from "./sections/index";

import { Toaster } from "react-hot-toast";

const App = () => {
	const [loading, setLoading] = useState(true);
	const [showMainContent, setShowMainContent] = useState(false);

	useEffect(() => {
		// Disable scrolling while loading
		document.body.style.overflow = "hidden";

		const timer = setTimeout(() => {
			setLoading(false);
			setTimeout(() => {
				setShowMainContent(true);
				document.body.style.overflow = "auto"; // Re-enable scrolling
			}, 500); // Slight delay after loader disappears
		}, 2500); // Match with loader animation duration

		return () => {
			clearTimeout(timer);
			document.body.style.overflow = "auto"; // Cleanup
		};
	}, []);

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
			{loading && <Loader />}
			<div className={`main-content transition-opacity duration-500 ${showMainContent ? "opacity-100" : "opacity-0"}`}>
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
			</div>
		</>
	);
};

export default App;
