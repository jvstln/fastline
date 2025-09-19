"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { appearVariants, MotionButton, MotionImage } from "@/lib/motion.util";
import riskAndComplianceImage from "@/public/images/risk-and-compliance-solutions.png";
import securityOperationsImage from "@/public/images/security-operations.png";
import trainingAndCapacityBuildingImage from "@/public/images/training-and-capacity-building.png";
import { SectionHeading } from "../hero";
import { DoubleCogIcon, ShieldIcon } from "../icons";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const services = [
	{
		image: securityOperationsImage,
		title: "Security Operations",
		description:
			"Fastline provides dependable physical security through highly trained guards, 24/7 monitoring, and rapid emergency response. We combine expert personnel with real-time surveillance systems to safeguard lives, property, and sensitive environments. Core offerings include Security Guard Services, 24/7 Monitoring, Emergency Response, and Security Systems & Equipment",
		link: "#",
	},
	{
		image: riskAndComplianceImage,
		title: "Risk & Compliance Solutions",
		description:
			"We help organizations identify vulnerabilities, meet industry standards, and maintain regulatory readiness. Our risk and compliance services are designed to reduce exposure and improve operational safety. Core offerings include Risk Assessments, Compliance Support, and Hazard & Incident Management.",
		link: "#",
	},
	{
		image: trainingAndCapacityBuildingImage,
		title: "Training & Capacity Building",
		description:
			"Our expert personnel offers industry-focused training that equips personnel and client teams with the knowledge and skills to act decisively in emergencies and uphold safety standards. Key programs include Safety Training, Security Guard Training, and IED Awareness & Emergency Drills.",
		link: "#",
	},
];

export const HomepageServices = () => {
	const isTablet = useBreakpoint("max-md");

	return (
		<>
			<section className="">
				<div className="container mx-auto">
					<SectionHeading
						title={
							<>
								Protective
								<span className="text-primary">Services </span>
								That Go
								<span className="text-primary">Beyond Guarding</span>
							</>
						}
						subtitle="From security guard services to safety trainings, we provide tailored solutions to protect your various business across multiple sectors."
						badge={
							<Badge>
								<DoubleCogIcon />
								OUR SERVICES
							</Badge>
						}
					/>

					<div className="-mb-20 mt-16 flex flex-col gap-20 md:gap-2">
						{services.map((service, i) => {
							const image = (
								<MotionImage
									variants={appearVariants}
									src={service.image}
									alt={service.title}
									className="max-md:-mb-10 mx-auto h-auto w-113 object-contain"
								/>
							);
							const content = (
								<motion.div className="flex flex-col items-start text-justify">
									<motion.h3
										variants={appearVariants}
										className="mb-3 text-left font-semibold text-xl"
									>
										{service.title}
									</motion.h3>
									<motion.p variants={appearVariants} className="mb-8">
										{service.description}
									</motion.p>
									<MotionButton variants={appearVariants} asChild>
										<Link href={service.link}>Explore Services</Link>
									</MotionButton>
								</motion.div>
							);

							const shouldFlip = i % 2 !== 0 && !isTablet;

							return (
								<motion.div
									whileInView="animate"
									initial="initial"
									viewport={{ amount: 0.2, once: true }}
									key={service.title}
									className="flex items-center gap-10 max-md:flex-col lg:gap-15"
								>
									{shouldFlip ? content : image}
									{shouldFlip ? image : content}
								</motion.div>
							);
						})}
					</div>
				</div>
			</section>

			<section
				className="relative bg-cover text-center text-white"
				style={{
					background:
						"url(/images/homepage-request-service.jpg) center center/cover no-repeat fixed",
				}}
			>
				<div className="container mx-auto flex flex-col items-center">
					<SectionHeading
						title={
							<>
								End-to-End
								<span className="text-primary"> Protection </span>
								Tailored Just For You
							</>
						}
						subtitle="With over 15 years of experience in security industry, we have
						earned the trust of clients across Nigeria through unwavering
						dedication to excellence."
						badge={
							<Badge variant="secondary">
								<ShieldIcon />
								Trusted Security Partner
							</Badge>
						}
						classNames={{ root: "max-w-161.5 mb-20" }}
					/>
					<Button size="lg" className="w-75">
						Request Service
					</Button>
				</div>
			</section>
		</>
	);
};
