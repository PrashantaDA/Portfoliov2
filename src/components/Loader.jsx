import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Loader = () => {
	useGSAP(() => {
		// Animate the SVG paths
		gsap.fromTo(
			"#svg path",
			{
				strokeDasharray: "1000",
				strokeDashoffset: "1000",
				stroke: "#ffffff",
				strokeWidth: "2",
				fill: "transparent",
			},
			{
				strokeDashoffset: 0,
				duration: 2,
				ease: "power2.inOut",
				stagger: 0.1,
			}
		);

		// Fade in the fill
		gsap.to("#svg path", {
			fill: "#ffffff",
			duration: 0.5,
			delay: 1.5,
			stagger: 0.1,
		});

		// Fade out the entire loader
		gsap.to(".loader", {
			opacity: 0,
			transform: "translateY(-100%)",
			display: "none",
			duration: 0.5,
			delay: 2.5,
		});
	});

	return (
		<div className="loader fixed inset-0 w-full h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 z-50">
			<svg
				id="svg"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				width="300"
				height="300"
				viewBox="0 0 375 374.999991"
				preserveAspectRatio="xMidYMid meet"
				version="1.0"
				className="w-[300px] md:w-[500px]"
			>
				<defs>
					<g />
				</defs>
				<g
					fill="transparent"
					fillOpacity="1"
				>
					<g transform="translate(73.792927, 311.734237)">
						<g>
							<path d="M 67.296875 -200.125 L 2.5 -200.125 C 1.25 -200.125 0 -198.875 0 -197.875 L 0 -163.359375 L 67.296875 -163.359375 C 71.796875 -163.359375 96.8125 -162.09375 96.8125 -140.09375 C 96.8125 -118.078125 72.296875 -117.578125 67.296875 -117.578125 L 0 -117.578125 L 0 -2.25 C 0 -1.25 1.25 0 2.5 0 L 35.015625 0 C 36.765625 0 37.515625 -1.25 37.515625 -2.25 L 37.515625 -80.546875 L 67.296875 -80.546875 C 72.046875 -80.546875 134.828125 -81.296875 134.828125 -140.09375 C 134.828125 -198.875 75.296875 -200.125 67.296875 -200.125 Z M 67.296875 -200.125 " />
						</g>
					</g>
				</g>
				<g
					fill="transparent"
					fillOpacity="1"
				>
					<g transform="translate(150.499986, 311.734237)">
						<g>
							<path d="M 35.515625 -200.125 L 2.75 -200.125 C 1.25 -200.125 0 -198.875 0 -197.875 L 0 -119.328125 L 38.28125 -119.328125 L 38.28125 -163.609375 C 81.796875 -165.859375 114.078125 -147.59375 114.078125 -100.0625 C 114.078125 -38.28125 62.53125 -35.765625 38.28125 -36.765625 L 38.28125 -80.796875 L 0 -80.796875 L 0 -2.25 C 0 -1.25 1.25 0 2.75 0 L 35.515625 0 C 85.296875 0 152.59375 -14.515625 152.59375 -100.0625 C 152.59375 -188.875 84.296875 -200.125 35.515625 -200.125 Z M 35.515625 -200.125 " />
						</g>
					</g>
				</g>
				<g
					fill="transparent "
					fillOpacity="1"
				>
					<g transform="translate(196.238517, 248.527666)">
						<g>
							<path d="M 53.59375 -1.03125 L 27.65625 -67.765625 C 27.390625 -68.453125 26.203125 -68.453125 25.9375 -67.765625 L 0.078125 -1.03125 C -0.171875 -0.515625 0.171875 0 0.9375 0 L 12.625 0 C 12.96875 0 13.40625 -0.171875 13.484375 -0.515625 L 26.796875 -38.578125 L 40.28125 -0.515625 C 40.375 -0.171875 40.796875 0 41.046875 0 L 52.828125 0 C 53.421875 0 53.859375 -0.515625 53.59375 -1.03125 Z M 53.59375 -1.03125 " />
						</g>
					</g>
				</g>
			</svg>
		</div>
	);
};

export default Loader;
