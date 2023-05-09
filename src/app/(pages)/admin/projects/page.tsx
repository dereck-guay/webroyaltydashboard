import prisma from "~/utils/prisma";
import { currentUser } from "@clerk/nextjs";
import ProjectList from './ProjectList';

async function getProjects() {
	const user = await currentUser();
	if (!user) return [];

	const projects = await prisma.project.findMany({
		where: {
			userId: user.id,
		},
		include: {
			customer: true,
			actions: true,
			status: true,
			priority: true,
		},
	});

	return projects;
}

async function getProjectStatuses() {
	const statuses = await prisma.projectStatus.findMany();
	return statuses;
}

async function getProjectPriorities() {
	const priorities = await prisma.projectPriority.findMany();
	return priorities;
}

async function getCustomers() {
	const user = await currentUser();
	if (!user) return [];

	const customers = await prisma.customer.findMany({
		where: {
			userId: user.id,
		},
	});

	return customers;
}

const ProjectsPage = async () => {
	const projectsPromise = getProjects();
	const statusesPromise = getProjectStatuses();
	const prioritiesPromise = getProjectPriorities();
	const customersPromise = getCustomers();

	const [projects, statuses, priorities, customers] = await Promise.all([
		projectsPromise,
		statusesPromise,
		prioritiesPromise,
		customersPromise,
	]);

	return (
		<>
			<div className="text-xl font-semibold">Projects</div>
			<hr />
			<ProjectList
				projects={projects}
				statuses={statuses}
				priorities={priorities}
				customers={customers}
			/>
		</>
	);
};

export default ProjectsPage;
