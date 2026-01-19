"use client";
import { ChevronRightIcon } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { partners, sectors } from "@/lib/data";
import { appearVariants, appearViewport, MotionLink } from "@/lib/motion.util";
import { cn } from "@/lib/utils";
import { SectionHeading } from "../hero";
import { IndustryIcon } from "../icons";
import { Badge } from "../ui/badge";

export const HomepageSectors = () => {
	return (
		<section className="-mt-5">
			<div className="container mx-auto">
				<SectionHeading
					title={
						<>
							Trusted Across Multiple{" "}
							<span className="text-primary-light">Sectors</span>
						</>
					}
					subtitle="We deliver specialized security solutions tailored to the unique
						operational demands of industries ranging from energy and
						infrastructure to critical facilities."
					badge={
						<Badge>
							<IndustryIcon />
							INDUSTRIES WE SERVE
						</Badge>
					}
				/>

				<div className="mt-15 grid justify-center gap-15 md:grid-cols-[repeat(2,auto)] md:gap-20">
					{sectors.map((sector, i) => {
						const {
							title,
							briefDescription,
							link,
							iconColors,
							icon: Icon,
						} = sector;

						if (!iconColors || !Icon || !briefDescription) return null;

						return (
							<MotionLink
								variants={appearVariants}
								initial="initial"
								whileInView="animate"
								viewport={appearViewport}
								transition={{ delay: i * 0.1 }}
								href={link.href}
								key={title}
								className={cn(
									"group flex max-w-112.5 flex-col items-start gap-4 rounded-xl p-6 transition-colors duration-500",
									"from-[#052B8B] to-[#8E008CCC] hover:bg-linear-45 hover:text-white",
								)}
								style={{
									boxShadow:
										"0px 2px 4px rgba(5, 43, 139, 0.04), 0px 3px 8px rgba(5, 43, 139, 0.16)",
								}}
								data-not-link
							>
								<div
									className="rounded p-4"
									style={{
										background: `linear-gradient(45deg, ${iconColors[0]}, ${iconColors[1]})`,
									}}
								>
									<Icon className="size-6 text-white" />
								</div>
								<h4 className="font-bold text-lg md:text-xl">{title}</h4>
								<p>{briefDescription}</p>
								<span className="flex gap-2 font-bold text-primary group-hover:hidden">
									{link.label} <ChevronRightIcon />
								</span>
								<span className="hidden gap-2 font-bold group-hover:flex">
									Learn more <ChevronRightIcon />
								</span>
							</MotionLink>
						);
					})}
				</div>

				<motion.p
					variants={appearVariants}
					initial="initial"
					whileInView="animate"
					className="mx-auto mt-12 mb-8 max-w-196 text-center font-medium text-lg"
				>
					We have a proven track record of delivering meticulous and bespoke
					solutions backed by a commitment to the highest levels of quality,
					service and client care.
				</motion.p>

				<PartnersMarquee />
			</div>
		</section>
	);
};

const PartnersMarquee = () => {
	return (
		<div className="relative w-full overflow-hidden bg-gray-100 py-6">
			<motion.div
				className="flex gap-6"
				animate={{ x: ["0%", "-100%"] }}
				transition={{
					repeat: Number.POSITIVE_INFINITY,
					duration: 10, // ⏱ adjust speed
					ease: "linear",
				}}
			>
				{/* Duplicate the images twice for seamless looping */}
				{[...partners, ...partners, ...partners].map((partner, i) => (
					<Image
						key={partner.name + String(i)}
						src={partner.image}
						alt={partner.name}
						className="h-8 w-auto shrink-0 rounded-lg object-cover shadow-md lg:h-9"
					/>
				))}
			</motion.div>
		</div>
	);
};
