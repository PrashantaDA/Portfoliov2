import { useEffect, useState, Suspense, lazy } from "react";
import CursorTrail from "./components/CursorTrail";
import Loader from "./components/Loader";
import BackToTop from "./components/BackToTop";

// Lazy load sections
const Navbar = lazy(() => import("./sections/Navbar"));
const Hero = lazy(() => import("./sections/Hero"));
const About = lazy(() => import("./sections/About"));
const Skills = lazy(() => import("./sections/Skills"));
const Projects = lazy(() => import("./sections/Projects"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

import { Toaster } from "react-hot-toast";

// Loading fallback component
const SectionLoader = () => (
	<div className="w-full h-screen flex items-center justify-center">
		<div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
	</div>
);

const App = () => {
	const [loading, setLoading] = useState(true);
	const [showMainContent, setShowMainContent] = useState(false);

	useEffect(() => {
		// Add no-scroll class to body and html
		document.body.classList.add("no-scroll");
		document.documentElement.classList.add("no-scroll");

		const timer = setTimeout(() => {
			setLoading(false);
			setTimeout(() => {
				setShowMainContent(true);
				// Remove no-scroll class
				document.body.classList.remove("no-scroll");
				document.documentElement.classList.remove("no-scroll");
			}, 400); // Slight delay after loader disappears
		}, 1800); // Match with loader animation duration

		return () => {
			clearTimeout(timer);
			// Cleanup: Remove no-scroll class
			document.body.classList.remove("no-scroll");
			document.documentElement.classList.remove("no-scroll");
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
				<Suspense fallback={<SectionLoader />}>
					<Navbar />
					<main className="relative">
						<Suspense fallback={<SectionLoader />}>
							<Hero />
						</Suspense>
						<Suspense fallback={<SectionLoader />}>
							<About />
						</Suspense>
						<Suspense fallback={<SectionLoader />}>
							<Skills />
						</Suspense>
						<Suspense fallback={<SectionLoader />}>
							<Projects />
						</Suspense>
						<Suspense fallback={<SectionLoader />}>
							<Contact />
						</Suspense>
					</main>
					<Suspense fallback={<SectionLoader />}>
						<Footer />
					</Suspense>
				</Suspense>
				<BackToTop />
			</div>
		</>
	);
};

export default App;
