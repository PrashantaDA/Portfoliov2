import { BsTwitterX, BsLinkedin, BsGithub, BsRocketTakeoff } from "react-icons/bs";
import { FaCode, FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaLock } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { LuLightbulb, LuChartNoAxesCombined } from "react-icons/lu";
import { SiTypescript, SiTailwindcss, SiVite, SiMongodb, SiKalilinux, SiWireshark, SiMetasploit } from "react-icons/si";

// ProjectImg
import { Gamexrip, Pokedex, Rexipe, Hotelix } from "../assets/sites/index";

// NavLinks
const navLinks = [
	{
		id: 1,
		title: "About",
		link: "#about",
	},
	{
		id: 2,
		title: "Skills",
		link: "#skills",
	},
	{
		id: 3,
		title: "Projects",
		link: "#projects",
	},
];

// Social Icons
const socials = [
	{
		id: 1,
		name: "X | Twitter",
		icon: <BsTwitterX size={20} />,
		link: "https://x.com/prdix_1",
	},
	{
		id: 2,
		name: "LinkedIn",
		icon: <BsLinkedin size={20} />,
		link: "#",
	},
	{
		id: 3,
		name: "Github",
		icon: <BsGithub size={20} />,
		link: "https://github.com/prashantada",
	},
];

// Soft Skills
const softSkills = [
	{
		id: 1,
		icon: <BsRocketTakeoff />,
		title: "Problem Solver",
		content: "I approach complex challenges with analytical thinking and break them down into manageable solutions.",
	},
	{
		id: 2,
		icon: <FaCode />,
		title: "Clean Code",
		content: "I value maintainable, well-structured code that follows best practices and industry standards.",
	},
	{
		id: 3,
		icon: <LuLightbulb />,
		title: "Innovative Thinker",
		content: "I tend to explore new technologies and approaches to solve problems more efficiently.",
	},
	{
		id: 4,
		icon: <LuChartNoAxesCombined />,
		title: "User Focused",
		content: "I prioritize creating intuitive, accessible experiences that aids in user growth.",
	},
];

// Tech Skills
const technicalSkills = [
	{
		id: 1,
		name: "React",
		icon: <FaReact size={32} />,
		level: "Advanced",
	},
	{
		id: 2,
		name: "JavaScript",
		icon: <FaJs size={32} />,
		level: "Advanced",
	},
	{
		id: 3,
		name: "TypeScript",
		icon: <SiTypescript size={32} />,
		level: "Intermediate",
	},
	{
		id: 4,
		name: "Node.js",
		icon: <FaNodeJs size={32} />,
		level: "Intermediate",
	},
	{
		id: 5,
		name: "HTML5",
		icon: <FaHtml5 size={32} />,
		level: "Advanced",
	},
	{
		id: 6,
		name: "CSS3",
		icon: <FaCss3Alt size={32} />,
		level: "Advanced",
	},
	{
		id: 7,
		name: "Tailwind CSS",
		icon: <SiTailwindcss size={32} />,
		level: "Advanced",
	},
	{
		id: 8,
		name: "Git",
		icon: <FaGitAlt size={32} />,
		level: "Intermediate",
	},
	{
		id: 9,
		name: "Vite",
		icon: <SiVite size={32} />,
		level: "Intermediate",
	},
	{
		id: 10,
		name: "MongoDB",
		icon: <SiMongodb size={32} />,
		level: "Basic",
	},
	{
		id: 11,
		name: "Kali Linux",
		icon: <SiKalilinux size={32} />,
		level: "Intermediate",
	},
	{
		id: 12,
		name: "Wireshark",
		icon: <SiWireshark size={32} />,
		level: "Intermediate",
	},
	{
		id: 13,
		name: "Metasploit",
		icon: <SiMetasploit size={32} />,
		level: "Basic",
	},
	{
		id: 14,
		name: "Network Security",
		icon: <FaShieldAlt size={32} />,
		level: "Intermediate",
	},
	{
		id: 15,
		name: "Cryptography",
		icon: <FaLock size={32} />,
		level: "Basic",
	},
];

// Projects

const projectDetails = [
	{
		id: 1,
		title: "GameXrip",
		details: "The ultimate destination for game information and details.",
		img: Gamexrip,
		tech: ["React + Vite", "Redux", "Styled-Components", "RAWG API"],
		category: "Web App",
		link: "https://gamexrip.netlify.app/",
		github: "https://github.com/PrashantaDA/GameXRip",
	},
	{
		id: 2,
		title: "Rexipe",
		details: "The Modern Application for discovering and exploring recipes from around the world",
		img: Rexipe,
		tech: ["React + Vite", "TailwindCss", "Framer Motion", "Spoonacular API"],
		category: "Web App",
		link: "https://rexipe.netlify.app/",
		github: "https://github.com/PrashantaDA/Rexipe",
	},
	{
		id: 3,
		title: "Oakédex",
		details: "The ultimate destination for game information and details.",
		img: Pokedex,
		tech: ["React + Vite", "SCSS", "Poké API"],
		category: "Web App",
		link: "https://oakedex.netlify.app/",
		github: "https://github.com/PrashantaDA/Pokedex",
	},
	{
		id: 4,
		title: "HotelIX",
		details: "The Modern hotel landing page.",
		img: Hotelix,
		tech: ["React + Vite", "TailwindCSS"],
		category: "Web App",
		link: "https://hotelix.netlify.app/",
		github: "https://github.com/PrashantaDA/HotelIX",
	},
];

export { navLinks, socials, softSkills, technicalSkills, projectDetails };
