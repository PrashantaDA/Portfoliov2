import React, { useRef, useState, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionDivider from "../components/SectionDivider";
import DownArrow from "../components/DownArrow";
import ProjectCard from "../components/ProjectCard";
import { projectDetails } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
	const sectionRef = useRef(null);
	const headingRef = useRef(null);
	const [activeFilter, setActiveFilter] = useState("All");

	// Get unique categories
	const categories = useMemo(() => {
		const uniqueCategories = new Set(projectDetails.map((project) => project.category));
		return ["All", ...Array.from(uniqueCategories)];
	}, []);

	// Filter projects
	const filteredProjects = useMemo(() => {
		if (activeFilter === "All") return projectDetails;
		return projectDetails.filter((project) => project.category === activeFilter);
	}, [activeFilter]);

	useGSAP(() => {
		// Animate the heading
		gsap.fromTo(
			headingRef.current,
			{
				opacity: 0,
				y: -50,
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: "power2.out",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top center",
					toggleActions: "play none none none",
					once: true,
				},
			}
		);

		// Animate the filter buttons
		gsap.fromTo(
			".filter-btn",
			{
				opacity: 0,
				y: 20,
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.5,
				stagger: 0.1,
				ease: "power2.out",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top center",
					toggleActions: "play none none none",
					once: true,
				},
			}
		);

		// Animate the project cards with stagger
		gsap.fromTo(
			".project-card",
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
				stagger: 0.1,
				ease: "power2.out",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top center",
					toggleActions: "play none none none",
					once: true,
				},
			}
		);
	}, [activeFilter]); // Re-run animations when filter changes

	return (
		<section
			ref={sectionRef}
			id="projects"
		>
			<div className="container">
				<div
					ref={headingRef}
					className="flex-col-center pb-12"
				>
					<h1 className="text-4xl font-semibold">
						My <span className="text-gradient">Projects</span>
					</h1>
					<p className="text-xs md:text-sm mt-5">
						Some of my <span className="text-gradient2 title-span">Recent</span> work
					</p>
				</div>

				{/* Filter Buttons */}
				<div className="flex flex-wrap justify-center gap-4 mb-12">
					{categories.map((category) => (
						<button
							key={category}
							className={`filter-btn px-4 py-2 rounded-full text-sm transition-all duration-300 ${
								activeFilter === category ? "bg-accent2 text-primary shadow-lg shadow-accent2/20" : "bg-black/50 text-primary/60 hover:bg-accent2/20 hover:text-primary"
							}`}
							onClick={() => setActiveFilter(category)}
						>
							{category}
						</button>
					))}
				</div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{filteredProjects.map((project) => (
						<div
							key={project.id}
							className="project-card"
						>
							<ProjectCard {...project} />
						</div>
					))}
				</div>
			</div>
			<div className="flex-center">
				<a href="#contact">
					<DownArrow />
				</a>
			</div>
			<SectionDivider />
		</section>
	);
};

export default Projects;
