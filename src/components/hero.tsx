"use client";
import { motion, stagger } from "motion/react";
import { appearVariants, appearViewport } from "@/lib/motion.util";
import { cn } from "@/lib/utils";
import { Header } from "./header";
import { ShieldIcon } from "./icons";
import { Badge } from "./ui/badge";

type PageHeroProps = {
	image: string;
	title?: string;
	classNames?: Record<"root" | "content" | "title" | "badge", string>;
};

export const PageHero = (props: PageHeroProps) => {
	return (
		<div
			className={cn(
				"flex min-h-[50vh] flex-col text-white",
				props.classNames?.root,
			)}
			style={{
				background: `linear-gradient(#0008, #0008), url('${props.image || "/images/homepage-hero.png"}') no-repeat center center/cover`,
			}}
		>
			<Header />
			{/* Hero content */}
			<div className="my-auto p-4">
				<div
					className={cn(
						"container mx-auto flex basis-1/2 flex-col gap-4",
						props.classNames?.content,
					)}
				>
					<Badge variant="secondary" className={cn(props.classNames?.badge)}>
						<ShieldIcon />
						FASTLINE INTEGRATED SERVICES LTD
					</Badge>
					{props.title && (
						<h1
							className={cn(
								"font-bold text-4xl md:text-5xl lg:text-6xl",
								props.classNames?.title,
							)}
						>
							{props.title}
						</h1>
					)}
				</div>
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
				"mx-auto flex max-w-160.5 flex-col items-center text-center lg:max-w-180.5",
				props.classNames?.root,
			)}
		>
			<motion.div variants={appearVariants}>{props.badge}</motion.div>
			<motion.h2
				variants={appearVariants}
				className={cn(
					"mt-5 mb-3 flex flex-wrap justify-center gap-2 font-bold text-[2rem]",
					props.classNames?.title,
				)}
			>
				{props.title}
			</motion.h2>
			<motion.p
				variants={appearVariants}
				className={cn("text-lg opacity-60", props.classNames?.subtitle)}
			>
				{props.subtitle}
			</motion.p>
		</motion.div>
	);
};
