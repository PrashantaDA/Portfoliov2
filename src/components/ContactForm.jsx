/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
	const formRef = useRef(null);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	useGSAP(() => {
		gsap.fromTo(
			formRef.current,
			{
				opacity: 0,
				y: 50,
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: "power2.out",
				scrollTrigger: {
					trigger: formRef.current,
					start: "top bottom-=100",
					toggleActions: "play none none none",
					once: true,
				},
			}
		);
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const serviceID = import.meta.env.VITE_APP_SERVICE_KEY;
		const templateID = import.meta.env.VITE_APP_TEMPLATE_KEY;
		const userID = import.meta.env.VITE_APP_PUBLIC_KEY;
		setIsSubmitting(true);

		// Basic validation
		if (!formData.name || !formData.email || !formData.message) {
			toast.error("Please fill in all required fields");
			setIsSubmitting(false);
			return;
		}

		// Email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formData.email)) {
			toast.error("Please enter a valid email address");
			setIsSubmitting(false);
			return;
		}

		// Validate userID
		if (!userID) {
			toast.error("Configuration error. Please contact support.");
			setIsSubmitting(false);
			return;
		}

		try {
			const result = await emailjs.sendForm(serviceID, templateID, formRef.current, userID);

			if (result.status === 200) {
				toast.success("Message sent successfully!");
				setFormData({
					name: "",
					email: "",
					subject: "",
					message: "",
				});
			} else {
				throw new Error("Failed to send message");
			}
		} catch (error) {
			console.error("EmailJS Error:", error);
			toast.error(error.text || "Failed to send message. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<form
			ref={formRef}
			onSubmit={handleSubmit}
			className="w-full max-w-2xl mx-auto space-y-6"
		>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="form-group">
					<label
						htmlFor="name"
						className="block text-sm font-medium text-primary/80 mb-2"
					>
						Name <span className="text-accent2">*</span>
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className="w-full px-4 py-3 bg-black/50 border border-accent2/20 rounded-lg focus:outline-none focus:border-accent2 text-primary placeholder-primary/40 transition-colors duration-300"
						placeholder="Your name"
						required
						autoComplete="name"
					/>
				</div>
				<div className="form-group">
					<label
						htmlFor="email"
						className="block text-sm font-medium text-primary/80 mb-2"
					>
						Email <span className="text-accent2">*</span>
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className="w-full px-4 py-3 bg-black/50 border border-accent2/20 rounded-lg focus:outline-none focus:border-accent2 text-primary placeholder-primary/40 transition-colors duration-300"
						placeholder="Your email"
						required
						autoComplete="email"
					/>
				</div>
			</div>
			<div className="form-group">
				<label
					htmlFor="subject"
					className="block text-sm font-medium text-primary/80 mb-2"
				>
					Subject
				</label>
				<input
					type="text"
					id="subject"
					name="subject"
					value={formData.subject}
					onChange={handleChange}
					className="w-full px-4 py-3 bg-black/50 border border-accent2/20 rounded-lg focus:outline-none focus:border-accent2 text-primary placeholder-primary/40 transition-colors duration-300"
					placeholder="What's this about?"
					autoComplete="off"
				/>
			</div>
			<div className="form-group">
				<label
					htmlFor="message"
					className="block text-sm font-medium text-primary/80 mb-2"
				>
					Message <span className="text-accent2">*</span>
				</label>
				<textarea
					id="message"
					name="message"
					value={formData.message}
					onChange={handleChange}
					rows="5"
					className="w-full px-4 py-3 bg-black/50 border border-accent2/20 rounded-lg focus:outline-none focus:border-accent2 text-primary placeholder-primary/40 transition-colors duration-300 resize-none"
					placeholder="Your message here..."
					required
					autoComplete="off"
				/>
			</div>
			<button
				type="submit"
				disabled={isSubmitting}
				className="cursor-pointer w-full md:w-auto px-8 py-3 bg-accent2/20 hover:bg-accent2/30 text-primary rounded-lg flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
			>
				{isSubmitting ? (
					<>
						<FaSpinner className="animate-spin" />
						Sending...
					</>
				) : (
					<>
						Send Message
						<FaPaperPlane className="group-hover:-translate-x-1 transition-transform duration-300" />
					</>
				)}
			</button>
		</form>
	);
};

export default ContactForm;
