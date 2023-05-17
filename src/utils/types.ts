import type { FC } from "react";
export type LayoutComponent = FC<{ children: React.ReactNode }>;
import { z } from "zod";

export const projectSchema = z.object({
	userId: z.string(),
	title: z.string(),
	description: z.string().optional(),
	budget: z.number().optional(),
	statusId: z.string(),
	priorityId: z.string(),
	customerId: z.string(),
});
