"use client";
import { MotionConfig } from "motion/react";

export const RootProviders = ({ children }: { children: React.ReactNode }) => {
	return (
		<MotionConfig
			transition={{ type: "tween", ease: "easeOut", duration: 0.4 }}
		>
			{children}
		</MotionConfig>
	);
};
