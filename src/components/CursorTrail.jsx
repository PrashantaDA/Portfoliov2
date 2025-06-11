import { useEffect, useRef } from "react";

export default function CursorTrail() {
	const canvasRef = useRef(null);
	const points = useRef([]);
	const maxPoints = 20;
	const hue = useRef(0);
	const lastMoveTime = useRef(Date.now());

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");

		const resize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			ctx.lineCap = "round";
			ctx.lineJoin = "round";
		};
		resize();

		window.addEventListener("resize", resize);

		const animate = () => {
			// Clear with transparent background
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Check if mouse has been stationary for more than 100ms
			const currentTime = Date.now();
			if (currentTime - lastMoveTime.current > 100) {
				points.current = [];
				requestAnimationFrame(animate);
				return;
			}

			// Update hue for color cycling
			hue.current = (hue.current + 1) % 360;

			// Draw the trail
			if (points.current.length > 1) {
				ctx.beginPath();
				ctx.moveTo(points.current[0].x, points.current[0].y);

				for (let i = 1; i < points.current.length; i++) {
					const xc = (points.current[i].x + points.current[i - 1].x) / 2;
					const yc = (points.current[i].y + points.current[i - 1].y) / 2;
					ctx.quadraticCurveTo(points.current[i - 1].x, points.current[i - 1].y, xc, yc);
				}

				// Create multiple gradient layers for glow effect
				const gradient = ctx.createLinearGradient(
					points.current[0].x,
					points.current[0].y,
					points.current[points.current.length - 1].x,
					points.current[points.current.length - 1].y
				);

				// Add color stops with different hues
				gradient.addColorStop(0, `hsla(${hue.current}, 100%, 70%, 0.8)`);
				gradient.addColorStop(0.5, `hsla(${(hue.current + 60) % 360}, 100%, 70%, 0.4)`);
				gradient.addColorStop(1, `hsla(${(hue.current + 120) % 360}, 100%, 70%, 0.1)`);

				// Draw glow effect
				ctx.shadowBlur = 15;
				ctx.shadowColor = `hsla(${hue.current}, 100%, 70%, 0.5)`;
				ctx.strokeStyle = gradient;
				ctx.lineWidth = 3;
				ctx.stroke();
			}

			requestAnimationFrame(animate);
		};
		requestAnimationFrame(animate);

		const handleMouseMove = (e) => {
			lastMoveTime.current = Date.now();
			points.current.push({ x: e.clientX, y: e.clientY });
			if (points.current.length > maxPoints) {
				points.current.shift();
			}
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("resize", resize);
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-50"
		/>
	);
}
