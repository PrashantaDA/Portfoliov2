import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionDivider from "../components/SectionDivider";
import ContactForm from "../components/ContactForm";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
	const sectionRef = useRef(null);
	const headingRef = useRef(null);
	const infoRef = useRef(null);

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

		// Animate the contact info
		gsap.fromTo(
			infoRef.current.children,
			{
				opacity: 0,
				x: -50,
			},
			{
				opacity: 1,
				x: 0,
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
	}, []);

	return (
		<section
			ref={sectionRef}
			id="contact"
		>
			<div className="container">
				<div
					ref={headingRef}
					className="flex-col-center pb-12"
				>
					<h1 className="text-4xl font-semibold">
						Get In <span className="text-gradient">Touch</span>
					</h1>
					<p className="text-xs md:text-sm mt-5">
						Let's <span className="text-gradient2 title-span">Connect</span> and <span className="text-gradient2 title-span">Create.</span>
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 ">
					{/* Contact Information */}
					<div
						ref={infoRef}
						className="lg:col-span-1 space-y-8"
					>
						<div className="flex items-start gap-4 p-6 bg-black/30 rounded-xl border border-accent2/10 hover:border-accent2/50 transition-all duration-300">
							<div className="p-3 bg-accent2/20 rounded-lg">
								<FaEnvelope className="text-2xl text-accent2" />
							</div>
							<div>
								<h3 className="text-lg font-semibold text-gradient mb-2">Email</h3>
								<a
									href="mailto:apras.dixit@gmail.com"
									className="text-primary/60"
								>
									apras.dixit@gmail.com
								</a>
							</div>
						</div>

						<div className="flex items-start gap-4 p-6 bg-black/30 rounded-xl border border-accent2/10 hover:border-accent2/50 transition-all duration-300">
							<div className="p-3 bg-accent2/20 rounded-lg">
								<FaMapMarkerAlt className="text-2xl text-accent2" />
							</div>
							<div>
								<h3 className="text-lg font-semibold text-gradient mb-2">Location</h3>
								<p className="text-primary/60">Kathmandu, Nepal</p>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div className="lg:col-span-2">
						<ContactForm />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
