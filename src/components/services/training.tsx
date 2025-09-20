"use client";
import { ShieldPlusIcon } from "lucide-react";
import { motion, stagger } from "motion/react";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { appearVariants, appearViewport, MotionImage } from "@/lib/motion.util";
import { cn } from "@/lib/utils";
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
	const isTablet = useBreakpoint("max-lg");

	return (
		<section
			className="p-0 text-white lg:py-20"
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
								root: "mb-13.5 lg:items-start lg:text-left",
							}}
						/>

						{/* For Mobile and Tablet */}

						<div className="flex items-center gap-20 max-md:flex-col-reverse md:gap-10">
							<TrainingList />
							{isTablet && <TrainingImage className="h-95.25 w-90" />}
						</div>
					</div>

					{!isTablet && <TrainingImage />}
				</div>
			</motion.div>
		</section>
	);
};

const TrainingImage = ({
	className,
	...props
}: Partial<React.ComponentProps<typeof MotionImage>>) => (
	<MotionImage
		variants={appearVariants}
		initial="initial"
		whileInView="animate"
		viewport={{ amount: 0.1 }}
		src={trainingImage}
		alt="Training"
		className={cn("h-146 w-134.75 rounded border-2 object-cover", className)}
		{...props}
	/>
);

const TrainingList = ({
	classNames,
}: {
	classNames?: Partial<Record<"root", string>>;
}) => (
	<motion.div
		initial="initial"
		whileInView="animate"
		viewport={{ amount: 0.5, once: true }}
		transition={{ delayChildren: stagger(0.2) }}
		variants={appearVariants}
		className={cn("flex max-w-148 flex-col gap-11", classNames?.root)}
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
