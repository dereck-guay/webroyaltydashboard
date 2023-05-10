const PublicTitle = ({ id, caption }: { id?: string; caption: string }) => {
	return (
		<h2 id={id} className="mb-4 text-2xl font-extrabold">
			<span className="border-b-2 border-primary pr-4">{caption}</span>
		</h2>
	);
};

export default PublicTitle;
