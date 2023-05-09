const PublicTitle = ({ id, caption }: { id?: string; caption: string }) => {
	return (
		<h2 id={id} className="mb-4 text-center text-2xl font-extrabold">
			<span className="border-b-2 border-primary px-4">{caption}</span>
		</h2>
	);
};

export default PublicTitle;
