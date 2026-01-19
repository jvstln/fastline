"use client";
import { motion, stagger } from "motion/react";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { sectors } from "@/lib/data";
import { appearVariants, MotionImage } from "@/lib/motion.util";
import { SectionHeading } from "../hero";
import { PartnershipIcon } from "../icons";
import { Badge } from "../ui/badge";

export const AboutClients = () => {
	const isTablet = useBreakpoint("max-md");

	return (
		<section id="clients">
			<div className="container mx-auto">
				<SectionHeading
					title={
						<>
							Trusted by <span className="text-primary">leaders</span> across{" "}
							<span className="text-primary">industries</span>.
						</>
					}
					subtitle="Fastline Integrated Services is trusted by top organizations across
						key sectors, including oil & gas, healthcare and manufacturing."
					badge={
						<Badge>
							<PartnershipIcon />
							Our Clients
						</Badge>
					}
				/>

				<div className="mt-15 flex flex-col gap-10 lg:gap-15">
					{sectors.map((client, i) => {
						const image = (
							<MotionImage
								src={client.image}
								alt={client.title}
								className="mx-auto -mb-12 h-auto w-113.75 object-contain max-md:size-80"
							/>
						);
						const content = (
							<motion.div
								variants={appearVariants}
								className="flex flex-col items-start gap-3 text-justify lg:col-span-2"
							>
								<motion.h3
									variants={appearVariants}
									className="text-left font-bold text-lg md:text-2xl"
								>
									{client.title}
								</motion.h3>
								<motion.p
									variants={appearVariants}
									className="max-md:text-[15px]/[1.7]"
								>
									{client.description}
								</motion.p>
							</motion.div>
						);

						const shouldFlip = i % 2 !== 0 && !isTablet;

						return (
							<motion.div
								initial="initial"
								whileInView="animate"
								animate="animate"
								transition={{
									delayChildren: stagger(0.2),
								}}
								variants={appearVariants}
								key={client.title}
								id={client.link.href.replace(/.+#/, "")}
								className="flex items-center gap-10 max-md:flex-col"
							>
								{shouldFlip ? content : image}
								{shouldFlip ? image : content}
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
