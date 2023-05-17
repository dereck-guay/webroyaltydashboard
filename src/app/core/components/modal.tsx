"use client";
import { type FC, useState, MouseEventHandler } from "react";

export type ModalProps = {
	title?: React.ReactNode;
	children: React.ReactNode;
	footer?: React.ReactNode;
	width?: "md" | "lg" | "xl" | "2xl" | "3xl";
	handleClose: () => void;
};

const Modal: FC<ModalProps> = ({
	title,
	children,
	footer,
	handleClose,
	width,
}) => {
	return (
		<div
			onClick={handleClose}
			className="absolute inset-0 flex items-center justify-center bg-[#00000044] backdrop-blur-sm"
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className={`w-full max-w-3xl rounded-sm bg-white`}
			>
				{!!title && (
					<div className="rounded-t-sm border-b bg-slate-200 p-2">{title}</div>
				)}
				<div className="p-2">{children}</div>
				{!!footer && (
					<div className="rounded-b-sm border-t bg-slate-100 p-2">{footer}</div>
				)}
			</div>
		</div>
	);
};

export default Modal;
