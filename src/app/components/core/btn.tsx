"use client";
import type { ButtonHTMLAttributes, FC } from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "~/utils/utils";

const btnVariants = cva("inline-flex items-center justify-center rounded", {
	variants: {
		variant: {
			default: "bg-primary hover:bg-primary-dark text-white",
			primary: "bg-primary hover:bg-primary-dark text-white",
			secondary: "bg-slate-500 hover:bg-slate-600 text-white",
			danger: "bg-red-500 hover:bg-red-600 text-red-100",
			success: "bg-emerald-500 hover:bg-emerald-600 text-white",
		},
		size: {
			default: "px-3 py-1 text-sm gap-x-2",
			sm: "px-2 py-0.5 text-xs gap-x-2",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
});

interface BtnProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof btnVariants> {}

const Btn: FC<BtnProps> = ({ className, size, variant, ...props }) => {
	return (
		<button
			className={cn(btnVariants({ variant, size, className }))}
			{...props}
		/>
	);
};

export { Btn, btnVariants };
