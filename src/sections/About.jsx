import React, { useRef } from "react";
import SectionDivider from "../components/SectionDivider";
import DownArrow from "../components/DownArrow";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { softSkills } from "../constants";
import SoftCard from "../components/SoftCard";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
	const sectionRef = useRef(null);
	const headingRef = useRef(null);
	const contentRef = useRef(null);
	const cardsRef = useRef(null);

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

		// Animate the content
		gsap.fromTo(
			contentRef.current,
			{
				opacity: 0,
				x: -50,
			},
			{
				opacity: 1,
				x: 0,
				duration: 0.8,
				delay: 0.2,
				ease: "power2.out",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top center",
				},
			}
		);

		// Animate the soft skills cards
		gsap.fromTo(
			cardsRef.current.children,
			{
				opacity: 0,
				y: 50,
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.5,
				stagger: 0.1,
				delay: 0.4,
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
			id="about"
		>
			<div className="container">
				<div
					ref={headingRef}
					className="flex-col-center pb-20"
				>
					<h1 className="text-4xl font-semibold">
						About <span className="text-gradient">Me</span>
					</h1>
					<p className="text-xs md:text-sm mt-5">
						Always <span className="text-gradient2 title-span">Learning.</span> Always <span className="text-gradient2 title-span">Growing.</span> Looking for{" "}
						<span className="text-gradient2 title-span">New Challenges.</span>
					</p>
				</div>
				<div className="flex flex-col md:flex-row items-center justify-between gap-10">
					<div
						ref={contentRef}
						className="border border-accent2 rounded-lg p-8 flex-1"
					>
						<h1 className="text-center text-3xl mb-8 font-semibold capitalize text-gradient">My Journey</h1>
						<p className="max-w-[90%]">
							I'm a technology enthusiast with a passion for building things on the web. I enjoy learning new tools and frameworks, and I'm always looking to grow my skills.
							<br />
							<br />
							My core focus is frontend development, especially using React with both JavaScript and TypeScript, along with a variety of modern styling technologies. I've also
							worked with other JavaScript frameworks and enjoy creating clean, user-friendly interfaces.
							<br />
							<br />
							Recently, I've started exploring the world of cybersecurity. The ever-evolving challenge of protecting digital systems and data has captured my curiosity, and I'm
							excited to see how I can blend my frontend expertise with this growing interest.
						</p>
					</div>
					<div
						ref={cardsRef}
						className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4"
					>
						{softSkills.map((skill) => (
							<SoftCard
								key={skill.id}
								{...skill}
							/>
						))}
					</div>
				</div>
			</div>
			<div className="flex-center">
				<a href="#skills">
					<DownArrow />
				</a>
			</div>

			<SectionDivider />
		</section>
	);
};

export default About;
