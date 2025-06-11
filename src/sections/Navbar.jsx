import { navLinks } from "../constants";
import MovingLine from "../components/MovingLine";

const Navbar = () => {
	return (
		<header className="navbar">
			<div className="inner shadow-lg shadow-dark backdrop-blur-xl py-4 px-8 rounded-full">
				<a
					href="#hero"
					className="logo flex-center text-gradient"
				>
					<img
						className="w-[40px]"
						src="/Logo_No_Bg.svg"
						alt="Prashanta D Acharya"
					/>
					<h1 className="ml-2 hidden sm:flex">{"<PrasDixit />"}</h1>
				</a>
				<nav className="desktop">
					<ul>
						{navLinks.map((link) => (
							<li
								key={link.id}
								className="group text-gradient text-gradient-hover"
							>
								<a href={link.link}>
									<span>{link.title}</span>
									<span className="underline" />
								</a>
							</li>
						))}
					</ul>
				</nav>
				<a
					href="#contact"
					className="contact-btn group"
				>
					<div className="inner text-gradient text-gradient-hover">
						<span>Contact Me</span>
					</div>
				</a>
			</div>
			<MovingLine />
		</header>
	);
};

export default Navbar;
