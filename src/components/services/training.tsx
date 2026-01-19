"use client";
import { ShieldCheckIcon, WrenchIcon } from "lucide-react";
import { motion, stagger } from "motion/react";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { appearVariants, appearViewport, MotionImage } from "@/lib/motion.util";
import { cn } from "@/lib/utils";
import securitSystemsAndEquipmentSolutions from "@/public/images/security-systems-and-equipment-solutions.png";
import { SectionHeading } from "../hero";
import { DatabaseSettingsIcon, SecurityEquipmentIcon } from "../icons";
import { Badge } from "../ui/badge";

const trainings = [
	{
		title: "Security Equipment Procurement",
		content:
			"We source reliable, industry-standard security equipment, including CCTV cameras, access control systems, alarms, and monitoring tools suited to your operational needs.",
		icon: SecurityEquipmentIcon,
	},
	{
		title: "System Installation & Configuration",
		content:
			"Our technicians handle professional installation and setup, ensuring systems are correctly positioned, configured, and optimized for maximum effectiveness.",
		icon: WrenchIcon,
	},
	{
		title: "System Management & Support",
		content:
			"Ongoing system oversight, maintenance coordination, and performance checks help ensure your security equipment remains functional, reliable, and responsive over time.",
		icon: DatabaseSettingsIcon,
	},
];

export const TrainingAndCapacityBuilding = () => {
	const isTablet = useBreakpoint("max-lg");

	return (
		<section
			id={"training-and-capacity-building"}
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
									Powered by{" "}
									<span className="text-primary-light">Technology</span>. Driven
									by <span className="text-primary-light">Safety</span>.
								</>
							}
							subtitle="We deliver fully integrated security equipment solutions that enhance protection through expert selection, installation, and ongoing system management."
							badge={
								<Badge variant="secondary">
									<ShieldCheckIcon />
									Security Systems &amp; Equipment Solutions
								</Badge>
							}
							classNames={{
								root: "mb-13.5 lg:items-start lg:text-left",
								title: "max-md:text-2xl",
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
		src={securitSystemsAndEquipmentSolutions}
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
