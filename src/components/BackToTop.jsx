import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const BackToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
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
					scale: 0.8,
				},
				{
					opacity: 1,
					y: 0,
					scale: 1,
					duration: 0.3,
					ease: "back.out(1.7)",
				}
			);
		} else {
			gsap.to(".back-to-top", {
				opacity: 0,
				y: 20,
				scale: 0.8,
				duration: 0.2,
				ease: "power2.in",
			});
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
			className={`back-to-top cursor-pointer fixed bottom-8 right-8 p-4 bg-accent2/20 backdrop-blur-sm hover:bg-accent2/30 text-primary rounded-full shadow-lg shadow-accent2/20 transition-all duration-300 hover:scale-110 hover:rotate-12 border border-accent2/30 ${
				isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
			}`}
			aria-label="Back to top"
		>
			<FaArrowUp className="text-xl" />
		</button>
	);
};

export default BackToTop;
