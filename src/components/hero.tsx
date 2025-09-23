"use client";
import { motion, stagger } from "motion/react";
import { usePathname } from "next/navigation";
import {
	appearVariants,
	appearViewport,
	MotionBadge,
	MotionImage,
} from "@/lib/motion.util";
import { cn } from "@/lib/utils";
import { Header } from "./header";
import { ShieldIcon } from "./icons";

type PageHeroProps = {
	image: string;
	title?: string;
	classNames?: Partial<Record<"root" | "content" | "title" | "badge", string>>;
	badge?: React.ReactNode;
};

export const PageHero = (props: PageHeroProps) => {
	const pathname = usePathname();

	return (
		<div
			// causes animations to replay on navigation
			key={pathname}
			className={cn(
				"relative flex h-155 flex-col overflow-hidden text-white",
				props.classNames?.root,
			)}
			style={{
				background: "linear-gradient(to right, #000c 30%, #0000)",
			}}
		>
			<MotionImage
				src={props.image}
				initial={{ scale: 1.2 }}
				animate={{ scale: 1 }}
				transition={{ duration: 1 }}
				alt={props.title || ""}
				className="-z-10 absolute inset-0 size-full object-cover"
				fill
			/>
			<Header />
			{/* Hero content */}
			<div className="my-auto p-4">
				<motion.div
					animate="animate"
					initial="initial"
					variants={appearVariants}
					transition={{ delayChildren: stagger(0.1), duration: 1 }}
					className={cn(
						"container mx-auto flex basis-1/2 flex-col gap-6",
						props.classNames?.content,
					)}
				>
					{props.badge || (
						<MotionBadge
							variants={appearVariants}
							variant="secondary"
							className={cn(props.classNames?.badge)}
						>
							<ShieldIcon />
							FASTLINE INTEGRATED SERVICES LTD
						</MotionBadge>
					)}
					{props.title && (
						<motion.h1
							variants={appearVariants}
							className={cn(
								"font-extrabold text-[2.75rem]",
								props.classNames?.title,
							)}
						>
							{props.title}
						</motion.h1>
					)}
				</motion.div>
			</div>
		</div>
	);
};

type SectionHeadingProps = {
	title?: React.ReactNode;
	subtitle?: string;
	badge?: React.ReactNode;
	classNames?: Partial<Record<"root" | "title" | "subtitle" | "badge", string>>;
};
export const SectionHeading = (props: SectionHeadingProps) => {
	return (
		<motion.div
			variants={appearVariants}
			initial="initial"
			whileInView="animate"
			viewport={appearViewport}
			transition={{ delayChildren: stagger(0.1) }}
			className={cn(
				"mx-auto flex max-w-160.5 flex-col items-center overflow-hidden text-center lg:max-w-180.5",
				props.classNames?.root,
			)}
		>
			<motion.div variants={appearVariants}>{props.badge}</motion.div>
			<motion.h2
				variants={appearVariants}
				className={cn(
					"mt-5 mb-3 font-bold text-[1.75rem] md:text-[2rem]",
					props.classNames?.title,
				)}
			>
				{props.title}
			</motion.h2>
			<motion.p
				variants={appearVariants}
				className={cn("opacity-60 md:text-lg", props.classNames?.subtitle)}
			>
				{props.subtitle}
			</motion.p>
		</motion.div>
	);
};
