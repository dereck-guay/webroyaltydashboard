"use client";
import { type FC, useState, type ChangeEventHandler } from "react";
import { Btn } from "~/app/components/core/btn";
import { FaPencilAlt, FaPlus, FaTrashAlt } from "react-icons/fa";
import Link from "next/link";
import Modal from "~/app/components/core/modal";
import type {
	Customer,
	Project,
	ProjectActions,
	ProjectPriority,
	ProjectStatus,
} from "@prisma/client";

export type ProjectListProps = {
	projects: (Project & {
		actions: ProjectActions[];
		status: ProjectStatus;
		priority: ProjectPriority;
		customer: Customer | null;
	})[];
	statuses: ProjectStatus[];
	priorities: ProjectPriority[];
	customers: Customer[];
};

const ProjectList: FC<ProjectListProps> = ({
	projects,
	statuses,
	priorities,
	customers,
}) => {
	const [projectModalIsOpen, setProjectModalIsOpen] = useState(false);
	const [newProjectState, setNewProjectState] = useState<Project>();
	const [filters, setFilters] = useState({
		keywords: "",
		statusId: "-1",
		priorityId: "-1",
		customerId: "-1",
	});

	projects = projects.filter(
		(p) =>
			!(filters.customerId != "-1" && p.customerId != filters.customerId) &&
			!(filters.statusId != "-1" && p.projectStatusId != filters.statusId) &&
			!(
				filters.priorityId != "-1" && p.projectPriorityId != filters.priorityId
			) &&
			p.title.indexOf(filters.keywords) != -1
	);

	const closeProjectModal = () => setProjectModalIsOpen(false);
	const openProjectModal = () => setProjectModalIsOpen(true);

	const onKeywordsFilterChange: ChangeEventHandler<HTMLInputElement> = (e) =>
		setFilters((prevFilters) => {
			return {
				...prevFilters,
				keywords: e.target?.value ?? "",
			};
		});

	const onStatusFilterChange: ChangeEventHandler<HTMLSelectElement> = (e) =>
		setFilters((prevFilters) => {
			return {
				...prevFilters,
				statusId: e.target?.value ?? "-1",
			};
		});

	const onPriorityFilterChange: ChangeEventHandler<HTMLSelectElement> = (e) =>
		setFilters((prevFilters) => {
			return {
				...prevFilters,
				priorityId: e.target?.value ?? "-1",
			};
		});

	const onCustomerFilterChange: ChangeEventHandler<HTMLSelectElement> = (e) =>
		setFilters((prevFilters) => {
			return {
				...prevFilters,
				customerId: e.target?.value ?? "-1",
			};
		});

	return (
		<>
			<div className="my-4">
				<div className="mb-2">
					<Btn size={"sm"} onClick={openProjectModal}>
						<FaPlus />
						Create Project
					</Btn>
				</div>

				<div className="flex items-center gap-x-2">
					<input
						onChange={onKeywordsFilterChange}
						type="text"
						placeholder="Keywords"
						className="w-full rounded-sm border-slate-200 px-2 py-0.5 text-sm"
					/>
					<select
						onChange={onStatusFilterChange}
						className="w-full rounded-sm border-slate-200 px-2 py-0.5 text-sm"
					>
						<option value="-1">Filter by Status</option>
						{statuses.map((status) => {
							return (
								<option key={status.id} value={status.id}>
									{status.title}
								</option>
							);
						})}
					</select>
					<select
						onChange={onPriorityFilterChange}
						className="w-full rounded-sm border-slate-200 px-2 py-0.5 text-sm"
					>
						<option value="-1">Filter by Priority</option>
						{priorities.map((priority) => {
							return (
								<option key={priority.id} value={priority.id}>
									{priority.title}
								</option>
							);
						})}
					</select>
					<select
						onChange={onCustomerFilterChange}
						className="w-full rounded-sm border-slate-200 px-2 py-0.5 text-sm"
					>
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
						placeholder="Filter by Dates"
						className="w-full rounded-sm border-slate-200 px-2 py-0.5 text-sm"
					/>
				</div>
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
					{!projects.length && (
						<tr>
							<td className="border px-2 py-1" colSpan={8}>
								Wow... Such empty...
							</td>
						</tr>
					)}
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

			{!!projectModalIsOpen && (
				<Modal
					title={<div className="font-semibold">Create New Project</div>}
					footer={<div>Footer</div>}
					handleClose={closeProjectModal}
				>
					Some text
				</Modal>
			)}
		</>
	);
};

export default ProjectList;
