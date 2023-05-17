"use server";

import { getAuth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { zact } from "zact/server";
import prisma from "~/utils/prisma";
import { projectSchema } from "~/utils/types";

export const createProject = async (data: FormData) => {
	const projectData = projectSchema.parse({
		userId: data.get("userId"),
		title: data.get("title"),
		description: data.get("description"),
		budget: Number(data.get("budget")),
		priorityId: data.get("priorityId"),
		statusId: data.get("statusId"),
		customerId: data.get("customerId"),
	});

	const newProject = await prisma.project.create({
		data: {
			userId: projectData.userId,
			title: projectData.title,
			description: projectData.description,
			projectPriorityId: projectData.priorityId,
			projectStatusId: projectData.statusId,
			customerId: projectData.customerId,
		},
	});
	
	revalidatePath("/admin/projects");
};
