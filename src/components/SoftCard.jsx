const SoftCard = ({ icon, title, content }) => {
	return (
		<div className="border-accent2 border-1 bg-darker backdrop-blur-sm rounded-2xl p-6 transition-all shadow-xs shadow-accent2 hover:shadow-md w-full max-w-xl md:max-w-xs">
			<div className="flex items-center justify-center w-14 h-14 bg-black  text-accent2 rounded-full mb-4">{icon}</div>
			<h3 className="text-xl font-semibold text-gradient  mb-2">{title}</h3>
			<p className="text-primary/60 text-sm">{content}</p>
		</div>
	);
};

export default SoftCard;
