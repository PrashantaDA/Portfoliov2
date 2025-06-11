import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { socials } from "../constants";

const Socials = () => {
	const socialsRef = useRef(null);

	useGSAP(() => {
		const icons = socialsRef.current.children;

		gsap.fromTo(
			icons,
			{
				opacity: 0,
				scale: 0,
				rotation: -180,
			},
			{
				opacity: 1,
				scale: 1,
				rotation: 0,
				duration: 0.5,
				stagger: 0.1,
				ease: "back.out(1.7)",
			}
		);
	}, []);

	return (
		<ul
			ref={socialsRef}
			className="flex-center gap-4"
		>
			{socials.map((social) => (
				<li
					key={social.id}
					className="social-icons group"
				>
					<a
						href={social.link}
						target="_blank"
						rel="noreferrer"
						className="block transform transition-all duration-300 hover:scale-110 hover:rotate-12"
					>
						{social.icon}
					</a>
				</li>
			))}
		</ul>
	);
};

export default Socials;
