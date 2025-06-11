import { useEffect } from "react";

const PreloadHints = () => {
	useEffect(() => {
		// Preload critical components
		const preloadComponents = ["/src/sections/Hero.jsx", "/src/sections/Navbar.jsx", "/src/components/Loader.jsx"];

		preloadComponents.forEach((component) => {
			const link = document.createElement("link");
			link.rel = "modulepreload";
			link.href = component;
			document.head.appendChild(link);
		});

		// Preload critical images
		const preloadImages = [
			"/bg-hero.png",
			// Add other critical images here
		];

		preloadImages.forEach((image) => {
			const link = document.createElement("link");
			link.rel = "preload";
			link.as = "image";
			link.href = image;
			document.head.appendChild(link);
		});

		// Cleanup function
		return () => {
			document.querySelectorAll('link[rel="modulepreload"]').forEach((link) => link.remove());
			document.querySelectorAll('link[rel="preload"]').forEach((link) => link.remove());
		};
	}, []);

	return null;
};

export default PreloadHints;
