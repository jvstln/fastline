"use client";
import { ShieldPlusIcon } from "lucide-react";
import Image from "next/image";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import trainingImage from "@/public/images/training-and-capacity-building-2.png";
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
			className="text-white md:py-10"
			style={{
				background: `linear-gradient(#0008, #0008), url('/images/training-and-capacity-building-2.png') no-repeat center center/cover`,
			}}
		>
			<div
				className="px-4 py-12 md:py-8"
				style={{
					background: `linear-gradient(90deg, rgb(0 0 0 / 0.9) 0% 80%, rgb(0 0 0 / ${isTablet ? 0.9 : 0}) 80% 100%)`,
				}}
			>
				<div className="container mx-auto flex items-center justify-between gap-8 *:flex-1">
					<div>
						<TrainingSectionTitle />
						{isTablet && (
							<Image
								src={trainingImage}
								alt="Training"
								className="my-6 size-full max-h-64 rounded border-2 object-cover"
							/>
						)}
						<TrainingList />
					</div>

					{!isTablet && (
						<Image
							src={trainingImage}
							alt="Training"
							className="size-full rounded border-2 object-cover"
						/>
					)}
				</div>
			</div>
		</section>
	);
};

const TrainingSectionTitle = () => (
	<div className="mb-12 flex flex-col items-center gap-2">
		<Badge variant="secondary" className="uppercase">
			Training & Capacity Building
		</Badge>
		<h2 className="font-bold text-3xl max-md:text-center">
			Train for <span className="text-primary">Readiness</span>. Act with{" "}
			<span className="text-primary">Confidence</span>.
		</h2>
		<p className="max-w-[65ch] text-muted-foreground">
			We equip your teams and ours with hands-on safety, emergency, and security
			training—ensuring skill, confidence, and compliance on the job.
		</p>
	</div>
);

const TrainingList = () => (
	<div className="flex flex-col gap-6">
		{trainings.map((training) => (
			<div
				key={training.title}
				className="border-white/50 border-l-2 px-4 py-2"
			>
				<h3 className="mb-2 flex items-center gap-3 font-bold text-lg">
					<training.icon className="size-8 rounded bg-white/10 p-2" />
					{training.title}
				</h3>
				<p className="text-justify">{training.content}</p>
			</div>
		))}
	</div>
);
