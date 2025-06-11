import React from "react";
import SectionDivider from "../components/SectionDivider";
import DownArrow from "../components/DownArrow";

const Projects = () => {
	return (
		<section id="projects">
			<div className="container">
				<h1>Projects</h1>
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
