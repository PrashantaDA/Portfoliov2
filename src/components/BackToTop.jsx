import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const BackToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	useGSAP(() => {
		if (isVisible) {
			gsap.fromTo(
				".back-to-top",
				{
					opacity: 0,
					y: 20,
				},
				{
					opacity: 1,
					y: 0,
					duration: 0.3,
					ease: "power2.out",
				}
			);
		}
	}, [isVisible]);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<button
			onClick={scrollToTop}
			className={`back-to-top fixed bottom-8 right-8 p-3 bg-accent2/20 hover:bg-accent2/30 text-primary rounded-full shadow-lg shadow-accent2/20 transition-all duration-300 hover:scale-110 hover:rotate-12 ${
				isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
			}`}
			aria-label="Back to top"
		>
			<FaArrowUp className="text-xl" />
		</button>
	);
};

export default BackToTop;
