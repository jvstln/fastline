"use client";
import { motion, type ViewportOptions } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";

export const MotionButton = motion.create(Button);
export const MotionImage = motion.create(Image);
export const MotionLink = motion.create(Link);

export const appearVariants = {
	initial: {
		opacity: 0,
		y: 30,
	},
	animate: {
		opacity: 1,
		y: 0,
	},
};

export const appearViewport: ViewportOptions = {
	amount: "some",
	margin: "-10%",
	once: true,
};
