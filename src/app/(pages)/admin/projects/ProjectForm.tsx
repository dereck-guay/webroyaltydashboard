"use client";

import { Project, ProjectStatus } from "@prisma/client";
import { FormEvent, useState, type FC } from "react";
import { Btn } from "~/app/components/core/btn";
import { FaDollarSign, FaCalendar } from "react-icons/fa";
import z from "zod";

type ProjectFormProps = {
	project?: Project;
	statusLst: ProjectStatus[];
	priorityLst: ProjectStatus[];
};

const ProjectForm: FC<ProjectFormProps> = ({
	project,
	statusLst,
	priorityLst,
}) => {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = Object.fromEntries(new FormData(e.currentTarget));
	};

	return (
		<form onSubmit={handleSubmit} method="POST">
			<div className="mb-4">
				<label className="block" htmlFor="project.title">
					Title:
				</label>
				<input
					className="w-full rounded border px-3 py-1"
					id="project.title"
					type="text"
					name="title"
					defaultValue={project?.title}
				/>
			</div>

			<div className="mb-4">
				<label className="block" htmlFor="project.description">
					Description:
				</label>
				<textarea
					className="w-full rounded border px-3 py-1"
					id="project.description"
					name="description"
					defaultValue={project?.description || ""}
				></textarea>
			</div>

			<div className="mb-4 flex items-center gap-x-2">
				<div className="w-1/3">
					<label className="block" htmlFor="project.budget">
						Budget:
					</label>
					<div className="flex items-center">
						<input
							className="w-full rounded-l border px-3 py-1"
							id="project.budget"
							type="number"
							name="budget"
							defaultValue={project?.budget?.toString()}
						/>
						<div className="w rounded-r border-b border-r border-t bg-slate-100 px-3 py-2 text-slate-800">
							<FaDollarSign />
						</div>
					</div>
				</div>
				<div className="w-1/3">
					<label className="block" htmlFor="project.startAt">
						Start At:
					</label>
					<div className="flex items-center">
						<input
							className="w-full rounded-l border px-3 py-1"
							id="project.startAt"
							type="text"
							name="startAt"
							defaultValue={project?.startAt?.toDateString()}
						/>
						<div className="w rounded-r border-b border-r border-t bg-slate-100 px-3 py-2 text-slate-800">
							<FaCalendar />
						</div>
					</div>
				</div>
				<div className="w-1/3">
					<label className="block" htmlFor="project.endAt">
						End At:
					</label>
					<div className="flex items-center">
						<input
							className="w-full rounded-l border px-3 py-1"
							id="project.endAt"
							type="text"
							name="endAt"
							defaultValue={project?.endAt?.toDateString()}
						/>
						<div className="w rounded-r border-b border-r border-t bg-slate-100 px-3 py-2 text-slate-800">
							<FaCalendar />
						</div>
					</div>
				</div>
			</div>

			<Btn type="submit">Submit</Btn>
		</form>
	);
};

export default ProjectForm;
