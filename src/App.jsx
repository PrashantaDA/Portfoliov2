import { Toaster } from "react-hot-toast";
import CursorTrail from "./components/CursorTrail";
import BackToTop from "./components/BackToTop";
import { Navbar, Hero, About, Skills, Projects, Contact, Footer } from "./sections/index";

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
