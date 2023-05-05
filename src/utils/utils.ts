import { type ClassValue } from "class-variance-authority/dist/types";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export { cn };
