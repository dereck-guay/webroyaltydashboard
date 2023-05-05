const Dashboard = async () => {
	const res = await fetch("http://localhost:3000/api/hello");
	const data = await res.json();
	console.log(data);

	return (
		<div>
			<div>Dashboard</div>
			<div>{data.message}</div>
		</div>
	);
};

export default Dashboard;
