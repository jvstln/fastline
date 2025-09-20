"use client";
import { ShieldPlusIcon } from "lucide-react";
import { motion, stagger } from "motion/react";
import Image from "next/image";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { appearVariants, appearViewport } from "@/lib/motion.util";
import trainingImage from "@/public/images/training-and-capacity-building-2.png";
import { SectionHeading } from "../hero";
import { IedAwarenessIcon, PeopleIcon } from "../icons";
import { Badge } from "../ui/badge";

const trainings = [
	{
		title: "Safety Training",
		content:
			"We provide customized safety training covering fire safety, first aid, emergency response, and workplace hazard prevention. These sessions ensure your staff are compliant, confident, and capable.",
		icon: ShieldPlusIcon,
	},
	{
		title: "Security Guard Training",
		content:
			"Our guard training programs cover access control, patrolling, observation, reporting, and professional conduct. We ensure each officer is field-ready and aligned with both local and international security standards.",
		icon: PeopleIcon,
	},
	{
		title: "IED Awareness & Emergency Drills",
		content:
			"We train teams on how to identify, report, and respond to suspicious devices or bomb threats. Emergency drills simulate real-world scenarios to improve response time, coordination, and crisis management.",
		icon: IedAwarenessIcon,
	},
];

export const TrainingAndCapacityBuilding = () => {
	const isTablet = useBreakpoint("max-md");

	return (
		<section
			className="px-0 py-20 text-white"
			style={{
				background: `linear-gradient(#0008, #0008), url('/images/training-and-capacity-building-2.png') no-repeat center center/cover`,
			}}
		>
			<motion.div
				initial="initial"
				whileInView="animate"
				viewport={appearViewport}
				transition={{ delayChildren: stagger(0.2) }}
				variants={{
					initial: {
						background: `linear-gradient(90deg, rgb(0 0 0 / 0.8) 0% 20%, rgb(0 0 0 / ${isTablet ? 0.8 : 0}) 20% 100%)`,
					},
					animate: {
						background: `linear-gradient(90deg, rgb(0 0 0 / 0.8) 0% 80%, rgb(0 0 0 / ${isTablet ? 0.8 : 0}) 80% 100%)`,
					},
				}}
				className="px-4 py-15"
				style={{}}
			>
				<div className="container mx-auto flex items-center justify-between gap-8 *:flex-1">
					<div>
						<SectionHeading
							title={
								<>
									Train for <span className="text-primary">Readiness</span>. Act
									with <span className="text-primary">Confidence</span>.
								</>
							}
							subtitle="We equip your teams and ours with hands-on safety, emergency, and security training—ensuring skill, confidence, and compliance on the job."
							badge={
								<Badge variant="secondary">Training & Capacity Building</Badge>
							}
							classNames={{
								root: "mb-13.5 items-start text-left",
							}}
						/>
						{isTablet && (
							<Image
								src={trainingImage}
								alt="Training"
								className="my-6 h-146 w-134.75 rounded border-2 object-cover"
							/>
						)}
						<TrainingList />
					</div>

					{!isTablet && (
						<Image
							src={trainingImage}
							alt="Training"
							className="h-146 w-134.75 rounded border-2 object-cover"
						/>
					)}
				</div>
			</motion.div>
		</section>
	);
};

const TrainingList = () => (
	<motion.div
		initial="initial"
		whileInView="animate"
		viewport={{ amount: 0.5 }}
		transition={{ delayChildren: stagger(0.2) }}
		variants={appearVariants}
		className="flex w-148 flex-col gap-11"
	>
		{trainings.map((training) => (
			<motion.div
				variants={appearVariants}
				viewport={appearViewport}
				key={training.title}
				className="border-white/40 border-l-2 px-5 py-1"
			>
				<h3 className="mb-3 flex items-center gap-3 font-bold text-lg">
					<training.icon className="size-8 rounded bg-white/10 p-2" />
					{training.title}
				</h3>
				<p className="text-justify">{training.content}</p>
			</motion.div>
		))}
	</motion.div>
);
