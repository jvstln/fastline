"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { services } from "@/lib/data";
import { appearVariants, MotionButton, MotionImage } from "@/lib/motion.util";
import { SectionHeading } from "../hero";
import { DoubleCogIcon, ShieldIcon } from "../icons";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export const HomepageServices = () => {
	const isTablet = useBreakpoint("max-md");

	return (
		<>
			<section className="">
				<div className="container mx-auto">
					<SectionHeading
						title={
							<>
								Protective <span className="text-primary">Services </span>
								That Go <span className="text-primary">Beyond Guarding</span>
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

					<div className="mt-16 flex flex-col gap-20 md:gap-2">
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
										<Link href="/services">Explore Services</Link>
									</MotionButton>
								</motion.div>
							);

							const shouldFlip = i % 2 !== 0 && !isTablet;

							return (
								<motion.div
									id={service.link.replace(/.+#/, "")}
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
						classNames={{ root: "mb-20 max-w-161.5" }}
					/>
					<Button size="lg" className="w-75" asChild>
						<Link href="/request-service">Request Service</Link>
					</Button>
				</div>
			</section>
		</>
	);
};
