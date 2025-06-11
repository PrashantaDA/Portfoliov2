import React, { useRef, useState, useMemo, Suspense, lazy } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionDivider from "../components/SectionDivider";
import DownArrow from "../components/DownArrow";
import { projectDetails } from "../constants";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Lazy load ProjectCard
const ProjectCard = lazy(() => import("../components/ProjectCard"));

gsap.registerPlugin(ScrollTrigger);

// Loading fallback for ProjectCard
const ProjectCardLoader = () => (
	<div className="w-full h-[400px] bg-accent2/10 rounded-2xl p-5 flex items-center justify-center">
		<div className="w-12 h-12 border-4 border-accent2 border-t-transparent rounded-full animate-spin"></div>
	</div>
);

const Projects = () => {
	const sectionRef = useRef(null);
	const headingRef = useRef(null);
	const filterRef = useRef(null);
	const projectsRef = useRef(null);
	const [activeFilter, setActiveFilter] = useState("All");
	const [currentPage, setCurrentPage] = useState(1);
	const projectsPerPage = 6;

	const filteredProjects = useMemo(() => {
		return activeFilter === "All" ? projectDetails : projectDetails.filter((project) => project.category === activeFilter);
	}, [activeFilter]);

	// Calculate pagination
	const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
	const startIndex = (currentPage - 1) * projectsPerPage;
	const endIndex = startIndex + projectsPerPage;
	const currentProjects = filteredProjects.slice(startIndex, endIndex);

	useGSAP(() => {
		// Animate heading
		gsap.fromTo(
			headingRef.current,
			{
				opacity: 0,
				y: 50,
			},
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: "power2.out",
				scrollTrigger: {
					trigger: headingRef.current,
					start: "top bottom-=100",
					toggleActions: "play none none none",
				},
			}
		);

		// Animate filter buttons
		gsap.fromTo(
			filterRef.current.children,
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
					trigger: filterRef.current,
					start: "top bottom-=50",
					toggleActions: "play none none none",
				},
			}
		);

		// Animate project cards
		gsap.fromTo(
			projectsRef.current?.children,
			{
				opacity: 0,
				y: 50,
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				stagger: 0.1,
				ease: "power2.out",
				scrollTrigger: {
					trigger: projectsRef.current,
					start: "top bottom-=100",
					toggleActions: "play none none none",
				},
			}
		);
	}, [currentProjects]); // Re-run animation when projects change

	const handleFilterChange = (filter) => {
		setActiveFilter(filter);
		setCurrentPage(1); // Reset to first page when filter changes
	};

	const handlePageChange = (newPage) => {
		setCurrentPage(newPage);
		// Scroll to top of projects section
		sectionRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section
			ref={sectionRef}
			id="projects"
			className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-darker"
		>
			<div className="max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-12">
					<h2
						ref={headingRef}
						className="text-4xl font-bold text-gradient mb-4"
					>
						My Projects
					</h2>
					<p className="text-primary/60 max-w-2xl mx-auto">Explore my latest work and personal projects. Each project is a unique journey of problem-solving and creativity.</p>
				</div>

				{/* Filter Buttons */}
				<div
					ref={filterRef}
					className="flex flex-wrap justify-center gap-3 mb-12"
				>
					{["All", "Web App", "UI/UX"].map((filter) => (
						<button
							key={filter}
							onClick={() => handleFilterChange(filter)}
							className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
								activeFilter === filter ? "bg-accent2 text-darker" : "bg-accent2/10 text-primary/60 hover:bg-accent2/20 hover:text-primary"
							}`}
						>
							{filter}
						</button>
					))}
				</div>

				{/* Projects Grid */}
				<div
					ref={projectsRef}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
				>
					<Suspense
						fallback={Array(projectsPerPage)
							.fill(0)
							.map((_, index) => (
								<ProjectCardLoader key={index} />
							))}
					>
						{currentProjects.map((project) => (
							<ProjectCard
								key={project.title}
								{...project}
							/>
						))}
					</Suspense>
				</div>

				{/* Pagination */}
				{totalPages > 1 && (
					<div className="flex justify-center items-center gap-4 mt-12">
						<button
							onClick={() => handlePageChange(currentPage - 1)}
							disabled={currentPage === 1}
							className={`p-2 rounded-full transition-all duration-300 ${
								currentPage === 1 ? "text-primary/30 cursor-not-allowed" : "text-primary hover:text-accent2 hover:bg-accent2/10"
							}`}
							aria-label="Previous page"
						>
							<FaChevronLeft />
						</button>

						<div className="flex gap-2">
							{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
								<button
									key={page}
									onClick={() => handlePageChange(page)}
									className={`w-8 h-8 rounded-full text-sm font-medium transition-all duration-300 ${
										currentPage === page ? "bg-accent2 text-darker" : "bg-accent2/10 text-primary/60 hover:bg-accent2/20 hover:text-primary"
									}`}
								>
									{page}
								</button>
							))}
						</div>

						<button
							onClick={() => handlePageChange(currentPage + 1)}
							disabled={currentPage === totalPages}
							className={`p-2 rounded-full transition-all duration-300 ${
								currentPage === totalPages ? "text-primary/30 cursor-not-allowed" : "text-primary hover:text-accent2 hover:bg-accent2/10"
							}`}
							aria-label="Next page"
						>
							<FaChevronRight />
						</button>
					</div>
				)}
			</div>

			<SectionDivider />
		</section>
	);
};

export default Projects;
