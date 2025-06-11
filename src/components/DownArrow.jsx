import { useRef } from "react";
import { FaCheck, FaChevronDown } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const DownArrow = () => {
	const arrowRef = useRef(null);

	useGSAP(() => {
		gsap.to(arrowRef.current, {
			y: -7,
			duration: 0.7,
			ease: "sine.inOut",
			yoyo: true,
			repeat: -1,
		});
	}, []);

	return (
		<div ref={arrowRef}>
			<FaChevronDown
				size={22}
				className="will-change-transform text-primary/70"
			/>
		</div>
	);
};

export default DownArrow;
