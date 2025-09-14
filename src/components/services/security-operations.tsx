"use client";
import {
	BiohazardIcon,
	ListChecksIcon,
	ShieldCheckIcon,
	ShieldEllipsisIcon,
	TelescopeIcon,
} from "lucide-react";
import Image from "next/image";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { cn } from "@/lib/utils";
import monitoringImage from "@/public/images/24-7-monitoring.jpg";
import riskAndComplianceImage from "@/public/images/risk-and-compliance-solutions-2.png";
import securityGuardServicesImage from "@/public/images/security-guard-services.jpg";
import securitySystemsAndEquipmentImage from "@/public/images/security-systems-and-equipment.jpg";
import { SecurityGuardIcon, TriangleSearchIcon } from "../icons";
import { Badge } from "../ui/badge";

const operations = [
	{
		title: "Security Guard Services",
		content:
			"We deploy licensed, professionally trained guards to secure individuals, residential, commercial, and industrial facilities. Our personnel are disciplined, alert, and capable of handling both routine security tasks and high-risk situations with confidence.",
		icon: SecurityGuardIcon,
		image: securityGuardServicesImage,
	},
	{
		title: "24/7 Monitoring",
		content:
			"Using CCTV systems, control rooms, and surveillance protocols, we monitor premises around the clock. Our monitoring teams ensure early threat detection, real-time incident reporting, and coordinated response at any hour.",
		icon: TelescopeIcon,
		image: monitoringImage,
	},
	{
		title: "Security Systems & Equipment",
		content:
			"We provide complete solutions for the supply, installation, and management of security systems and equipment. From CCTV cameras and access control to alarm systems and monitoring tools, our team ensures seamless setup and reliable performance to keep your facilities fully protected.",
		icon: ShieldEllipsisIcon,
		image: securitySystemsAndEquipmentImage,
	},
];

const riskSolutions = [
	{
		title: "Risk Assessments",
		content:
			"We evaluate your facility, operations, and surroundings to identify security gaps and safety risks. Each assessment delivers practical, prioritized recommendations to strengthen your protection strategy.",
		icon: TriangleSearchIcon,
	},
	{
		title: "Hazard & Incident Management",
		content:
			"Our team develops proactive plans for hazard identification, incident investigation, and response documentation. These protocols improve readiness and ensure lessons are captured and applied.",
		icon: BiohazardIcon,
	},
	{
		title: "Compliance Support",
		content:
			"We guide businesses in meeting regulatory and industry-specific safety requirements through audits, documentation, and implementation of best practices, helping you avoid penalties and downtime.",
		icon: ListChecksIcon,
	},
];

export const SecurityOperations = () => {
	const isMobile = useBreakpoint("max-md");

	const boxClassName = "rounded shadow border";
	const gridTemplateStyles = {
		gridTemplateColumns: "1rem 1fr 1fr 1fr 1rem",
		gridTemplateRows: "1rem 1fr auto 1rem",
	};

	return (
		<>
			<section className="overflow-hidden px-4 py-12">
				<div className="container mx-auto mb-12 flex flex-col items-center gap-2 text-center">
					<Badge className="uppercase">
						<ShieldCheckIcon />
						Security Operations
					</Badge>
					<h2 className="font-bold text-3xl">
						<span className="text-primary">Protection</span> You Can Rely On
					</h2>
					<p className="max-w-[65ch] text-muted-foreground">
						From trained guards to 24/7 monitoring and rapid emergency response,
						we deliver dependable, on-ground security tailored to your
						environment.
					</p>
				</div>

				<div className="container mx-auto flex flex-col items-center gap-4 md:gap-8">
					{operations.map((operation) => (
						<div
							key={operation.title}
							className={cn("grid max-md:max-w-80", isMobile && boxClassName)}
							style={gridTemplateStyles}
						>
							<div
								className={cn(
									!isMobile && boxClassName,
									isMobile
										? "col-[2/-2] row-[3/4]"
										: "col-[1/-1] row-[2/3] grid gap-4",
								)}
								style={gridTemplateStyles}
							>
								<div
									className={cn("col-[3/-1] row-[1/-1]", isMobile && "pt-4")}
								>
									<h3 className="mb-2 flex items-center gap-3 font-bold text-lg">
										<operation.icon className="size-8 rounded bg-primary/5 p-1 text-primary" />
										{operation.title}
									</h3>
									<p>{operation.content}</p>
								</div>
							</div>
							<Image
								src={operation.image}
								alt={operation.title}
								className={cn(
									"size-full rounded object-cover",
									isMobile ? "col-[2/-2] row-[2/3]" : "col-[2/3] row-[1/-1]",
								)}
							/>
						</div>
					))}
				</div>
			</section>

			{/* Risk and compliance solutions */}
			<section className="overflow-hidden bg-blue-50/50 px-4 py-12">
				<div className="container mx-auto mb-12 flex flex-col items-center gap-2 text-center">
					<Badge className="uppercase">
						<ShieldCheckIcon />
						Risk &amp; Compliance Solutions
					</Badge>
					<h2 className="font-bold text-3xl">
						Stay <span className="text-primary">Secure</span>. Stay{" "}
						<span className="text-primary">Compliant</span>
					</h2>
					<p className="max-w-[65ch] text-muted-foreground">
						We identify risks, close security gaps, and help you meet regulatory
						standards through audits, assessments, and strategic planning.
					</p>
				</div>

				<div className="container mx-auto flex gap-8 max-md:flex-col">
					<Image
						src={riskAndComplianceImage}
						alt="Risk and Compliance Solutions"
						className="w-full flex-1 object-cover"
					/>
					<div className="flex flex-1 flex-col gap-4">
						{riskSolutions.map((solution) => (
							<div key={solution.title} className="rounded p-4 shadow">
								<h3 className="mb-2 flex items-center gap-3 font-bold text-lg">
									<solution.icon className="size-8 rounded bg-primary/5 p-1 text-primary" />
									{solution.title}
								</h3>
								<p className="text-justify">{solution.content}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};
