const CollectionPage = ({
	params: { collection },
}: {
	params: { collection: string };
}) => {
	return (
		<div>
			<h1>Collection Page {collection}</h1>
		</div>
	);
};

export default CollectionPage;
