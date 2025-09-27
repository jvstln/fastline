"use client";
import { ListIcon, QuoteIcon } from "lucide-react";
import { motion, stagger } from "motion/react";
import { stats, vissionAndMission } from "@/lib/data";
import { appearVariants, appearViewport, MotionImage } from "@/lib/motion.util";
import visionAndMissionImage from "@/public/images/vision-and-mission.png";
import { SectionHeading } from "../hero";
import { Badge } from "../ui/badge";

export const AboutCompanyOverview = () => {
	return (
		<section className="overflow-hidden px-4 py-12">
			<div className="container mx-auto mb-8 flex items-start gap-8 *:flex-1 max-md:text-center max-lg:flex-col lg:mb-13.5">
				{/* Company Overview */}
				<SectionHeading
					title={
						<>
							Driven by <span className="text-primary">values</span>, guided by{" "}
							<span className="text-primary">purpose</span>, committed to{" "}
							<span className="text-primary">protection</span>
						</>
					}
					subtitle="Fastline Integrated Services Limited (FISL) is a Nigerian-based security and safety solutions company committed to protecting people, property, and operations across a wide range of industries. With over 15 years of experience, we specialize in manned security, risk assessment, compliance auditing, and professional training programs tailored to client-specific environments."
					badge={
						<Badge>
							<ListIcon />
							Company Overview
						</Badge>
					}
					classNames={{
						root: "lg:items-start lg:text-left",
						subtitle:
							"text-justify max-md:text-[15px]/[1.7] md:text-center lg:text-justify",
					}}
				/>

				<QuoteCard />
			</div>

			<div className="container mx-auto my-8 flex items-center gap-20 *:flex-1 max-lg:mt-16 max-lg:flex-col-reverse">
				{/* Hero cards */}
				<motion.div
					variants={appearVariants}
					whileInView="animate"
					viewport={appearViewport}
					transition={{ delayChildren: stagger(0.2) }}
					className="grid max-w-123 grid-cols-2 gap-4 sm:gap-12.5 sm:gap-y-13.5 md:gap-x-13"
				>
					{stats.map((stat) => (
						<motion.div
							variants={appearVariants}
							key={stat.label + stat.value}
							className="flex max-w-42.5 grow flex-col items-center justify-center gap-2 rounded-md border bg-background px-2 py-7 text-center shadow-md backdrop-blur-xs md:max-w-55 md:px-6"
						>
							<span className="font-bold font-michroma text-3xl text-primary-light">
								{stat.value}
							</span>
							<span className="font-semibold md:text-lg">{stat.label}</span>
						</motion.div>
					))}
				</motion.div>

				<motion.p
					variants={appearVariants}
					whileInView="animate"
					viewport={appearViewport}
					className="text-justify text-[15px]/[1.7] md:text-center md:text-lg lg:text-justify"
				>
					Our services are designed to meet the evolving security demands of
					sectors such as oil and gas, telecommunications, finance, residential
					estates, private properties, and commercial facilities. From guard
					deployment to crisis response, we apply precision, integrity, and
					industry best practices to every assignment.
				</motion.p>
			</div>

			{/* Vision and mission */}
			<div className="container mx-auto flex items-center justify-between gap-8 max-lg:flex-col max-lg:items-center">
				<MotionImage
					variants={appearVariants}
					initial="initial"
					whileInView="animate"
					viewport={appearViewport}
					src={visionAndMissionImage}
					alt="Vision and Mission"
					className="-mb-12 size-full max-w-129.5"
				/>
				<motion.div className="flex flex-col gap-10 text-primary-light">
					{vissionAndMission.map((item) => (
						<motion.div
							key={item.title}
							variants={appearVariants}
							whileInView="animate"
							viewport={appearViewport}
							className="flex max-w-125 grow flex-col justify-center gap-6 rounded-sm px-8 py-12"
							style={{
								background:
									"linear-gradient(252.65deg, #F4F7FB 5.21%, #FFFFFF 82%, #F4F7FB 100.01%)",
								boxShadow:
									"0px 2px 4px rgba(5, 43, 139, 0.04), 0px 3px 8px rgba(5, 43, 139, 0.16)",
							}}
						>
							<h3 className="flex items-center gap-2 font-bold text-lg">
								<item.icon />
								{item.title}
							</h3>
							<p>{item.description}</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default function QuoteCard() {
	return (
		<div className="relative">
			<div className="relative z-20 flex max-w-151.5 flex-col gap-6 rounded-sm bg-background px-8 py-12 font-semibold text-xl shadow-md md:text-2xl">
				<QuoteIcon className="text-primary" />
				<blockquote>
					Committed to securing what matters most, with{" "}
					<span className="text-primary">integrity</span>,{" "}
					<span className="text-primary">professionalism</span>, and{" "}
					<span className="text-primary">vigilance</span>.
				</blockquote>
			</div>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 z-10 size-full translate-x-10 translate-y-10 rounded bg-blue-100"
			/>
		</div>
	);
}
