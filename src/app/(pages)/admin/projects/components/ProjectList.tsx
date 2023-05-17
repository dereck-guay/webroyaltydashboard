"use client";
import { useAuth } from "@clerk/nextjs";
import { type FC, useState, type ChangeEventHandler } from "react";
import { Btn } from "~/app/core/components/btn";
import {
	FaBan,
	FaPencilAlt,
	FaPlus,
	FaTrashAlt,
	FaMoneyBill,
} from "react-icons/fa";
import Link from "next/link";
import Modal from "~/app/core/components/modal";
import type {
	Customer,
	Project,
	ProjectActions,
	ProjectPriority,
	ProjectStatus,
} from "@prisma/client";
import { createProject } from "~/app/_actions/projectActions";

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
	const { userId } = useAuth();
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

	if (!userId) return <div>Not authed</div>;

	const handleSubmit = async (formData: FormData) => {
		await createProject(formData);
		closeProjectModal();
	};

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
										className="hover:text-primary-dark text-primary"
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
					handleClose={closeProjectModal}
				>
					<form action={handleSubmit} className="flex flex-col gap-y-2">
						<input name="userId" type="hidden" value={userId} />
						<div>
							<label htmlFor="title">Title</label>
							<input
								className="w-full rounded-sm border-slate-200 px-2 py-0.5 text-sm"
								type="text"
								id="title"
								name="title"
								placeholder="Project title"
							/>
						</div>

						<div>
							<label htmlFor="description">Description</label>
							<textarea
								rows={5}
								className="w-full resize-none rounded-sm border-slate-200 px-2 py-0.5 text-sm"
								name="description"
								placeholder="We're going to do this, and that!"
							></textarea>
						</div>

						<div>
							<label htmlFor="budget">Budget</label>
							<div className="flex">
								<input
									className="w-full rounded-l-sm border-slate-200 px-2 py-0.5 text-sm"
									type="text"
									name="budget"
									placeholder="1000"
								/>
								<div className="flex items-center justify-center rounded-r-sm border border-slate-200 bg-slate-100 px-2">
									<FaMoneyBill />
								</div>
							</div>
						</div>

						<div className="flex items-center gap-x-2">
							<div className="w-full">
								<label htmlFor="statusId">Status</label>
								<select
									id="statusId"
									name="statusId"
									className="w-full rounded-sm border-slate-200 px-2 py-0.5 text-sm"
								>
									{statuses.map((status) => {
										return (
											<option key={status.id} value={status.id}>
												{status.title}
											</option>
										);
									})}
								</select>
							</div>
							<div className="w-full">
								<label htmlFor="priorityId">Status</label>
								<select
									id="priorityId"
									name="priorityId"
									className="w-full rounded-sm border-slate-200 px-2 py-0.5 text-sm"
								>
									{priorities.map((priority) => {
										return (
											<option key={priority.id} value={priority.id}>
												{priority.title}
											</option>
										);
									})}
								</select>
							</div>
							<div className="w-full">
								<label htmlFor="customerId">Status</label>
								<select
									id="customerId"
									name="customerId"
									className="w-full rounded-sm border-slate-200 px-2 py-0.5 text-sm"
								>
									{customers.map((customer) => {
										return (
											<option key={customer.id} value={customer.id}>
												{customer.name}
											</option>
										);
									})}
								</select>
							</div>
						</div>

						<div className="mt-4 flex items-center justify-between">
							<div></div>
							<div className="flex items-center gap-x-2">
								<Btn type="submit">
									<FaPlus />
									Let&apos;s Go!
								</Btn>
								<Btn
									onClick={closeProjectModal}
									type="button"
									variant={"secondary"}
								>
									<FaBan />
									Cancel
								</Btn>
							</div>
						</div>
					</form>
				</Modal>
			)}
		</>
	);
};

export default ProjectList;
