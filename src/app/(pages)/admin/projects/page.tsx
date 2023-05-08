import prisma from "~/utils/prisma";
import { currentUser } from "@clerk/nextjs";
import { Btn } from "~/app/components/core/btn";
import { FaPencilAlt, FaPlus, FaTrashAlt } from "react-icons/fa";
import Link from "next/link";

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
	if (! user) return [];

	const customers = await prisma.customer.findMany({
		where: {
			userId: user.id,
		}
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
		customersPromise
	]);

	return (
		<>
			<div className="text-xl font-semibold">Projects</div>
			<hr />

			<div className="my-4 flex items-center gap-x-2">
				<Btn size={"sm"}>
					<FaPlus />
					Create Project
				</Btn>

				<input
					type="text"
					placeholder="Keywords"
					className="flex-grow rounded-sm border-slate-200 px-2 py-0.5 text-sm"
				/>
				<select className="flex-grow rounded-sm border-slate-200 px-2 py-0.5 text-sm">
					<option value="-1">Filter by status</option>
					{statuses.map((status) => {
						return (
							<option key={status.id} value={status.id}>
								{status.title}
							</option>
						);
					})}
				</select>
				<select className="flex-grow rounded-sm border-slate-200 px-2 py-0.5 text-sm">
					<option value="-1">Filter by Priority</option>
					{priorities.map((priority) => {
						return (
							<option key={priority.id} value={priority.id}>
								{priority.title}
							</option>
						);
					})}
				</select>
				<select className="flex-grow rounded-sm border-slate-200 px-2 py-0.5 text-sm">
					<option value="-1">Filter by Customer</option>
					{customers.map((customer) => {
						return (
							<option key={customer.id} value={customer.id}>
								{customer.name}
							</option>
						);
					})}
				</select>
				<input
					type="text"
					placeholder="Filter by dates"
					className="flex-grow rounded-sm border-slate-200 px-2 py-0.5 text-sm"
				/>
			</div>

			<table className="w-full rounded-sm px-2 py-1 text-left text-sm">
				<thead className="bg-slate-200">
					<tr>
						<th className="w-2 border px-2 py-1 text-center">#</th>
						<th className="border px-2 py-1">Project</th>
						<th className="border px-2 py-1">Status</th>
						<th className="border px-2 py-1">Priority</th>
						<th className="border px-2 py-1">Customer</th>
						<th className="border px-2 py-1">Start At</th>
						<th className="border px-2 py-1">End At</th>
						<th className="border px-2 py-1"> </th>
					</tr>
				</thead>
				<tbody>
					{projects.map((project) => {
						return (
							<tr className="hover:bg-slate-50" key={project.number}>
								<td className="w-2 border px-2 py-1 text-center">
									{project.number}
								</td>
								<td className="border px-2 py-1">
									<Link
										className="text-primary hover:text-primary-dark"
										href={`/admin/projects/${project.number}`}
									>
										{project.title}
									</Link>
								</td>
								<td className="border px-2 py-1">
									{project.status.title ?? "Not assigned"}
								</td>
								<td className="border px-2 py-1">
									{project.priority.title ?? "Not assigned"}
								</td>
								<td className="border px-2 py-1">
									{project.customer?.name ?? "None"}
								</td>
								<td className="border px-2 py-1">
									{project.startAt?.toLocaleDateString()}
								</td>
								<td className="border px-2 py-1">
									{project.endAt?.toLocaleDateString()}
								</td>
								<td className="w-2 border px-2 py-1 ">
									<div className="flex items-center gap-x-2">
										<Btn variant={"primary"} size={"icon"}>
											<FaPencilAlt />
										</Btn>
										<Btn variant={"danger"} size={"icon"}>
											<FaTrashAlt />
										</Btn>
									</div>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default ProjectsPage;
