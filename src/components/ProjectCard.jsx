import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";

const ProjectCard = ({ title, details, img, tech, category, link, github }) => {
	const cardRef = useRef(null);
	const [isHovered, setIsHovered] = useState(false);
	const [showDetails, setShowDetails] = useState(false);

	useGSAP(() => {
		gsap.fromTo(
			cardRef.current,
			{
				opacity: 0,
				y: 50,
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
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
			y: -10,
			duration: 0.3,
			ease: "power2.out",
		});
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
		gsap.to(cardRef.current, {
			y: 0,
			duration: 0.3,
			ease: "power2.out",
		});
	};

	const toggleDetails = () => {
		setShowDetails(!showDetails);
	};

	return (
		<div
			ref={cardRef}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className="group relative bg-black/50 rounded-xl overflow-hidden border border-accent2/20 hover:border-accent2/40 transition-all duration-300"
		>
			{/* Image Container */}
			<div className="relative h-48 overflow-hidden">
				<img
					src={img}
					alt={title}
					className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

				{/* Links Overlay - Hidden on mobile */}
				<div className="absolute inset-0 hidden md:flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
					<a
						href={github}
						target="_blank"
						rel="noopener noreferrer"
						className="p-3 bg-accent2/20 hover:bg-accent2/40 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12"
						aria-label="View GitHub repository"
					>
						<FaGithub className="text-2xl text-primary" />
					</a>
					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						className="p-3 bg-accent2/20 hover:bg-accent2/40 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12"
						aria-label="View live project"
					>
						<FaExternalLinkAlt className="text-2xl text-primary" />
					</a>
				</div>
			</div>

			{/* Content */}
			<div className="p-6">
				{/* Title and Category Row */}
				<div className="flex items-center justify-between mb-3">
					<h3 className="text-xl font-semibold text-primary group-hover:text-accent2 transition-colors duration-300">{title}</h3>
					<span className="text-xs font-medium text-accent2 bg-accent2/10 px-3 py-1 rounded-full">{category}</span>
				</div>

				{/* Description */}
				<p className="text-primary/60 text-sm mb-4 line-clamp-2">{details}</p>

				{/* Tech Stack */}
				<div className="flex flex-wrap gap-2">
					{tech.map((item, index) => (
						<span
							key={index}
							className="text-xs text-primary/60 bg-accent2/5 px-2 py-1 rounded"
						>
							{item}
						</span>
					))}
				</div>

				{/* Mobile Action Button */}
				<div className="mt-4 md:hidden">
					<button
						onClick={toggleDetails}
						className="w-full py-2 px-4 bg-accent2/20 hover:bg-accent2/30 rounded-lg text-primary flex items-center justify-center gap-2 transition-colors duration-300"
					>
						<FaInfoCircle className="text-accent2" />
						<span>{showDetails ? "Hide Details" : "Show Details"}</span>
					</button>
				</div>

				{/* Mobile Details Panel */}
				{showDetails && (
					<div className="mt-4 md:hidden space-y-4">
						<div className="flex justify-center gap-4">
							<a
								href={github}
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 bg-accent2/20 hover:bg-accent2/40 rounded-full transition-all duration-300"
								aria-label="View GitHub repository"
							>
								<FaGithub className="text-2xl text-primary" />
							</a>
							<a
								href={link}
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 bg-accent2/20 hover:bg-accent2/40 rounded-full transition-all duration-300"
								aria-label="View live project"
							>
								<FaExternalLinkAlt className="text-2xl text-primary" />
							</a>
						</div>
					</div>
				)}
			</div>

			{/* Hover Gradient Line */}
			<div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent2 via-hover to-accent2 transition-all duration-300 ${isHovered ? "w-full" : "w-0"}`} />
		</div>
	);
};

export default ProjectCard;
