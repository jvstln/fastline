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
						subtitle: "lg:text-justify",
					}}
				/>

				{/* Quote */}
				<div className="relative pr-22.75 pb-32">
					<div className="relative z-20 flex max-w-151.5 flex-col gap-6 rounded-sm bg-background px-8 py-12 font-semibold text-2xl shadow-md">
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
						className="pointer-events-none absolute right-0 bottom-0 z-10 h-75 w-151.5 rounded bg-blue-100"
					/>
				</div>
			</div>

			<div className="my-8 flex items-center gap-20 *:flex-1 max-lg:mt-16 max-lg:flex-col-reverse">
				{/* Hero cards */}
				<motion.div
					variants={appearVariants}
					whileInView="animate"
					viewport={appearViewport}
					transition={{ delayChildren: stagger(0.2) }}
					className="grid grid-cols-[repeat(2,auto)] gap-3"
				>
					{stats.map((stat) => (
						<motion.div
							variants={appearVariants}
							key={stat.label + stat.value}
							className="flex max-w-55 grow flex-col items-center justify-center gap-2 rounded-md border bg-background px-8 py-7 text-center shadow-md backdrop-blur-xs"
						>
							<span className="font-bold font-michroma text-3xl text-primary-light">
								{stat.value}
							</span>
							<span className="font-semibold text-lg">{stat.label}</span>
						</motion.div>
					))}
				</motion.div>

				<motion.p
					variants={appearVariants}
					whileInView="animate"
					viewport={appearViewport}
					className="text-lg max-lg:text-center"
				>
					Our services are designed to meet the evolving security demands of
					sectors such as oil and gas, telecommunications, finance, residential
					estates, private properties, and commercial facilities. From guard
					deployment to crisis response, we apply precision, integrity, and
					industry best practices to every assignment.
				</motion.p>
			</div>

			{/* Vision and mission */}
			<div className="flex gap-8 *:flex-1 max-lg:flex-col max-lg:items-center">
				<MotionImage
					variants={appearVariants}
					initial="initial"
					whileInView="animate"
					viewport={appearViewport}
					src={visionAndMissionImage}
					alt="Vision and Mission"
					className="-mb-12 size-full"
				/>
				<motion.div className="flex flex-col gap-10 text-primary-light">
					{vissionAndMission.map((item) => (
						<motion.div
							key={item.title}
							variants={appearVariants}
							whileInView="animate"
							viewport={appearViewport}
							className="flex max-w-125 grow flex-col justify-center gap-6 rounded-sm bg-linear-45 from-5% from-primary/5 px-8 py-12 shadow-md"
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
