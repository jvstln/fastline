"use client";
import {
	BiohazardIcon,
	ListChecksIcon,
	ShieldCheckIcon,
	ShieldEllipsisIcon,
	TelescopeIcon,
} from "lucide-react";
import { motion, stagger } from "motion/react";
import { appearVariants, appearViewport, MotionImage } from "@/lib/motion.util";
import { cn } from "@/lib/utils";
import monitoringImage from "@/public/images/24-7-monitoring.jpg";
import riskAndComplianceImage from "@/public/images/risk-and-compliance-solutions-2.png";
import securityGuardServicesImage from "@/public/images/security-guard-services.jpg";
import securitySystemsAndEquipmentImage from "@/public/images/security-systems-and-equipment.jpg";
import { SectionHeading } from "../hero";
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
	return (
		<>
			<section className="overflow-hidden" id={"security-operations"}>
				<div className="container mx-auto">
					<SectionHeading
						title={
							<>
								<span className="text-primary">Protection</span> You Can Rely On
							</>
						}
						subtitle="From trained guards to 24/7 monitoring and rapid emergency response,
							we deliver dependable, on-ground security tailored to your
							environment."
						badge={
							<Badge>
								<ShieldCheckIcon />
								Security Operations
							</Badge>
						}
					/>

					<div className="mt-25 flex flex-col items-center gap-25">
						{operations.map((operation, i) => (
							<motion.div
								initial="initial"
								whileInView="animate"
								transition={{ delayChildren: stagger(0.1), delay: i * 0.2 }}
								variants={appearVariants}
								viewport={appearViewport}
								key={operation.title}
								className="flex max-w-230.5 gap-8 rounded-sm p-4 max-md:flex-col md:p-8"
								style={{
									boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.16)",
								}}
							>
								<MotionImage
									src={operation.image}
									alt={operation.title}
									variants={appearVariants}
									className={cn(
										"md:-my-13 size-full w-full rounded-xs object-cover md:w-72.25",
									)}
								/>
								<motion.div variants={appearVariants}>
									<h3 className="mb-3 flex items-center gap-2.5 font-bold text-lg md:text-xl">
										<operation.icon className="size-8 rounded bg-primary/5 p-1 text-primary" />
										{operation.title}
									</h3>
									<p className="text-justify max-md:text-[15px]">
										{operation.content}
									</p>
								</motion.div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Risk and compliance solutions */}
			<section
				className="overflow-hidden bg-blue-50/50"
				id={"risk-and-compliance-solutions"}
			>
				<div className="container mx-auto">
					<SectionHeading
						title={
							<>
								Stay <span className="text-primary">Secure</span>. Stay{" "}
								<span className="text-primary">Compliant</span>
							</>
						}
						subtitle="We identify risks, close security gaps, and help you meet regulatory
							standards through audits, assessments, and strategic planning."
						badge={
							<Badge>
								<ShieldCheckIcon />
								Risk &amp; Compliance Solutions
							</Badge>
						}
					/>
					<div className="mt-15 flex gap-10 max-md:flex-col lg:gap-22">
						<div className="flex max-w-127.75 justify-center">
							<MotionImage
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ amount: 0.3, once: true }}
								src={riskAndComplianceImage}
								alt="Risk and Compliance Solutions"
								className="-mb-10 -ml-10 w-full object-contain"
							/>
						</div>
						<div className="flex flex-1 flex-col gap-8">
							{riskSolutions.map((solution, i) => (
								<motion.div
									initial="initial"
									whileInView="animate"
									transition={{ delayChildren: stagger(0.1), delay: i * 0.2 }}
									variants={appearVariants}
									viewport={appearViewport}
									key={solution.title}
									className="rounded p-8 shadow-md"
								>
									<motion.h3
										variants={appearVariants}
										className="mb-3 flex items-center gap-3 font-bold text-lg"
									>
										<solution.icon className="size-8 rounded bg-primary/5 p-1 text-primary" />
										{solution.title}
									</motion.h3>
									<motion.p variants={appearVariants} className="text-justify">
										{solution.content}
									</motion.p>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
