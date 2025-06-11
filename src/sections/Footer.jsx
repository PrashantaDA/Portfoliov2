const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="footer shadow-sm shadow-accent2">
			<h1 className="text-xl text-gradient ">
				© {currentYear}.{" "}
				<a
					href="https://github/com/prashantada"
					className="text-gradient text-gradient-hover transition-all duration-300"
				>
					{" "}
					Prashanta D Acharya
				</a>
			</h1>
		</footer>
	);
};

export default Footer;
