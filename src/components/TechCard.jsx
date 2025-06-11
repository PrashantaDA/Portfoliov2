import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TechCard = ({ icon, name, level }) => {
	const cardRef = useRef(null);

	useGSAP(() => {
		gsap.fromTo(
			cardRef.current,
			{
				opacity: 0,
				y: 50,
				scale: 0.8,
			},
			{
				opacity: 1,
				y: 0,
				scale: 1,
				duration: 0.5,
				ease: "power2.out",
				scrollTrigger: {
					trigger: cardRef.current,
					start: "top bottom-=100",
					toggleActions: "play none none reverse",
				},
			}
		);
	}, []);

	return (
		<div
			ref={cardRef}
			className="group relative flex flex-col items-center justify-center p-4 bg-darker/30 backdrop-blur-sm rounded-xl border border-accent2/10 hover:border-accent2/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent2/10 hover:-translate-y-1 perspective"
		>
			<div className="text-primary/70 group-hover:text-accent2 transition-all duration-1000 mb-2 transform transform-gpu group-hover:scale-110 group-hover:rotate-[360deg]">
				{icon}
			</div>
			<h3 className="text-base font-semibold text-gradient mb-1 group-hover:text-hover transition-colors duration-300">{name}</h3>
			<span className="text-xs text-primary/60 group-hover:text-primary/80">{level}</span>
		</div>
	);
};

export default TechCard;
