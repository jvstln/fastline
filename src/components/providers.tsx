"use client";
import { MotionConfig } from "motion/react";
import { Toaster } from "./ui/sonner";

export const RootProviders = ({ children }: { children: React.ReactNode }) => {
	return (
		<MotionConfig
			transition={{ type: "tween", ease: "easeOut", duration: 0.4 }}
		>
			{children}
			<Toaster position="top-center" richColors />
		</MotionConfig>
	);
};
