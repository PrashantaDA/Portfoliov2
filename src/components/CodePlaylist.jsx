import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaPlay, FaPause, FaMusic, FaCode } from "react-icons/fa";

const CodePlaylist = () => {
	const playlistRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTrack, setCurrentTrack] = useState(0);

	const tracks = [
		{
			title: "Coding Session",
			artist: "Lo-Fi Beats",
			duration: "2:45",
			icon: <FaCode className="text-blue-400" />,
		},
		{
			title: "Debug Mode",
			artist: "Synthwave",
			duration: "3:20",
			icon: <FaCode className="text-purple-400" />,
		},
		{
			title: "Security Check",
			artist: "Ambient",
			duration: "4:15",
			icon: <FaCode className="text-green-400" />,
		},
	];

	useGSAP(() => {
		// Animate the playlist container
		gsap.fromTo(
			playlistRef.current,
			{
				opacity: 0,
				y: 20,
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: "power2.out",
			}
		);
	}, []);

	const togglePlay = () => {
		setIsPlaying(!isPlaying);
	};

	const nextTrack = () => {
		setCurrentTrack((prev) => (prev + 1) % tracks.length);
	};

	return (
		<div
			ref={playlistRef}
			className="relative w-full bg-black/20 backdrop-blur-sm rounded-lg p-3 border border-white/10"
		>
			<div className="absolute top-2 left-2 flex gap-1.5">
				<div className="w-2 h-2 rounded-full bg-red-500" />
				<div className="w-2 h-2 rounded-full bg-yellow-500" />
				<div className="w-2 h-2 rounded-full bg-green-500" />
			</div>
			<div className="mt-4">
				<div className="flex items-center justify-between mb-3">
					<div className="flex items-center gap-2">
						<FaMusic className="text-lg text-gradient" />
						<h3 className="text-sm font-semibold text-gradient">Coding Playlist</h3>
					</div>
					<button
						onClick={togglePlay}
						className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
					>
						{isPlaying ? <FaPause className="text-sm text-primary" /> : <FaPlay className="text-sm text-primary" />}
					</button>
				</div>
				<div className="space-y-1.5">
					{tracks.map((track, index) => (
						<div
							key={index}
							className={`flex items-center gap-2 p-1.5 rounded-lg transition-colors cursor-pointer ${index === currentTrack ? "bg-white/10" : "hover:bg-white/5"}`}
							onClick={() => setCurrentTrack(index)}
						>
							<div className="w-6 h-6 flex items-center justify-center rounded bg-black/20">{track.icon}</div>
							<div className="flex-1">
								<h4 className="text-xs font-medium text-primary">{track.title}</h4>
								<p className="text-[10px] text-primary/70">{track.artist}</p>
							</div>
							<span className="text-[10px] text-primary/50">{track.duration}</span>
						</div>
					))}
				</div>
				<div className="mt-2 pt-2 border-t border-white/10">
					<div className="flex items-center justify-between text-[10px] text-primary/50">
						<span>Now Playing: {tracks[currentTrack].title}</span>
						<button
							onClick={nextTrack}
							className="hover:text-primary transition-colors"
						>
							Next →
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CodePlaylist;
