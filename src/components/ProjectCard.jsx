import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";

const ProjectCard = ({ title, details, img, tech, category, link, github }) => {
	const cardRef = useRef(null);
	const [isHovered, setIsHovered] = useState(false);

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
					toggleActions: "play none none none",
					once: true,
				},
			}
		);
	}, []);

	const handleMouseEnter = () => {
		setIsHovered(true);
		gsap.to(cardRef.current, {
			scale: 1.02,
			duration: 0.3,
			ease: "power2.out",
		});
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
		gsap.to(cardRef.current, {
			scale: 1,
			duration: 0.3,
			ease: "power2.out",
		});
	};

	return (
		<div
			ref={cardRef}
			className="group relative flex flex-col bg-darker/30 backdrop-blur-sm rounded-xl border border-accent2/10 hover:border-accent2/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent2/10"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div className="relative overflow-hidden rounded-t-xl">
				<img
					src={img}
					alt={title}
					className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
					<div className="flex gap-4">
						<a
							href={github}
							target="_blank"
							rel="noreferrer"
							className="p-2 bg-accent2/20 hover:bg-accent2/40 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12"
						>
							<FaGithub className="text-2xl text-primary" />
						</a>
						<a
							href={link}
							target="_blank"
							rel="noreferrer"
							className="p-2 bg-accent2/20 hover:bg-accent2/40 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12"
						>
							<FaExternalLinkAlt className="text-2xl text-primary" />
						</a>
					</div>
				</div>
			</div>
			<div className="p-6 relative">
				<div className="flex items-center justify-between mb-4">
					<h3 className="text-xl font-semibold text-gradient group-hover:text-hover transition-colors duration-300">{title}</h3>
					<span className="text-xs px-3 py-1 bg-accent2/20 text-accent2 rounded-full">{category}</span>
				</div>
				<p className="text-primary/60 text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">{details}</p>
				<div className="flex flex-wrap gap-2">
					{tech.map((item, index) => (
						<span
							key={index}
							className="text-xs px-2 py-1 bg-black/50 text-primary/80 rounded transition-all duration-300 hover:bg-accent2/20 hover:text-accent2"
						>
							{item}
						</span>
					))}
				</div>
				{isHovered && <div className="absolute bottom-0 left-9 w-[90%]  h-1 bg-gradient-to-r from-accent2 via-hover to-accent2 animate-pulse" />}
			</div>
		</div>
	);
};

export default ProjectCard;
