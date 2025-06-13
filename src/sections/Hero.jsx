import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Socials from "../components/Socials";
import SectionDivider from "../components/SectionDivider";
import DownArrow from "../components/DownArrow";
import CodePlaylist from "../components/CodePlaylist";

const Hero = () => {
	const textRef = useRef(null);
	const socialsRef = useRef(null);

	useGSAP(() => {
		gsap.fromTo(
			textRef.current,
			{
				opacity: 0,
				y: 20,
			},
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: "power2.out",
			}
		);

		gsap.fromTo(
			socialsRef.current,
			{
				opacity: 0,
				y: 20,
			},
			{
				opacity: 1,
				y: 0,
				duration: 1,
				delay: 0.5,
				ease: "power2.out",
			}
		);
	}, []);

	return (
		<section
			id="hero"
			className="hero"
		>
			<div className="hero-layout">
				<div className="flex flex-col items-center gap-8">
					<div
						ref={textRef}
						className="flex flex-col items-center justify-center text-center"
					>
						<h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2">
							Hi, I'm <span className="text-gradient">Prashanta D Acharya</span>
						</h1>
						<h2 className="text-md md:text-xl lg:text-2xl text-primary/80 mb-4">
							Frontend <span className="text-gradient2 title-span">Developer</span> & Security <span className="text-gradient2 title-span">Enthusiast</span>
						</h2>
						<p className="hidden md:flex text-primary/60 max-w-lg mb-6">Crafting secure and efficient web solutions with modern technologies</p>
					</div>
					<div className="w-full max-w-2xl">
						<CodePlaylist />
					</div>
				</div>
				<div
					ref={socialsRef}
					className="flex-center"
				>
					<div className="flex-center ">
						<Socials />
					</div>
				</div>
				<div className="flex-center pb-8">
					<a
						href="#about"
						className="hover:scale-110 transition-transform"
					>
						<DownArrow />
					</a>
				</div>
			</div>
			<SectionDivider />
		</section>
	);
};

export default Hero;
