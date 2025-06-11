import React, { useRef, Suspense, lazy } from "react";
import DownArrow from "../components/DownArrow";
import SectionDivider from "../components/SectionDivider";
import { technicalSkills } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Lazy load TechCard
const TechCard = lazy(() => import("../components/TechCard"));

gsap.registerPlugin(ScrollTrigger);

// Loading fallback for TechCard
const TechCardLoader = () => (
	<div className="w-full aspect-square bg-accent2/10 rounded-xl p-4 flex items-center justify-center">
		<div className="w-8 h-8 border-4 border-accent2 border-t-transparent rounded-full animate-spin"></div>
	</div>
);

const Skills = () => {
	const sectionRef = useRef(null);
	const headingRef = useRef(null);

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
				},
			}
		);

		// Animate the grid items with stagger
		gsap.fromTo(
			".tech-card",
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
				},
			}
		);
	}, []);

	return (
		<section
			ref={sectionRef}
			id="skills"
		>
			<div className="container">
				<div
					ref={headingRef}
					className="flex-col-center pb-12"
				>
					<h1 className="text-4xl font-semibold">
						Tech <span className="text-gradient">Stack</span>{" "}
					</h1>
					<p className="text-xs md:text-sm mt-5">
						What <span className="text-gradient2 title-span ">I</span> bring to the <span className="text-gradient2 title-span ">Table.</span>
					</p>
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
					<Suspense
						fallback={Array(technicalSkills.length)
							.fill(0)
							.map((_, index) => (
								<div
									key={index}
									className="tech-card"
								>
									<TechCardLoader />
								</div>
							))}
					>
						{technicalSkills.map((skill) => (
							<div
								key={skill.id}
								className="tech-card"
							>
								<TechCard {...skill} />
							</div>
						))}
					</Suspense>
				</div>
			</div>
			<div className="flex-center">
				<a href="#projects">
					<DownArrow />
				</a>
			</div>
			<SectionDivider />
		</section>
	);
};

export default Skills;
