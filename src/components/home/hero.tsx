"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { stats } from "@/lib/data";
import { MotionBadge, MotionImage } from "@/lib/motion.util";
import homepageHeroImage from "@/public/images/homepage-hero.png";
import { Header } from "../header";
import { ShieldIcon } from "../icons";
import { Button } from "../ui/button";

const heroContentVariants = {
	initial: (custom: number) => ({ opacity: 0, y: (custom + 1) * 30 }),
	animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export const HomepageHero = () => {
	return (
		<div className="relative flex h-218.75 flex-col overflow-hidden text-white md:h-218.75 lg:h-193.75">
			<MotionImage
				src={homepageHeroImage}
				initial={{ scale: 1.2 }}
				animate={{ scale: 1 }}
				alt=""
				className="-z-10 absolute inset-0 size-full object-cover max-md:object-[75%]"
			/>
			<Header showRequestServiceButton={false} />
			<div className="mt-20 px-4">
				<motion.div
					initial="initial"
					animate="animate"
					className="container mx-auto flex items-center justify-between max-lg:flex-col md:gap-10 lg:gap-4"
				>
					{/* Hero content */}
					<motion.div
						variants={heroContentVariants}
						custom={1}
						className="flex max-w-137.5 basis-1/2 flex-col max-lg:items-center max-lg:text-center"
					>
						<MotionBadge
							variants={heroContentVariants}
							custom={1}
							variant="secondary"
						>
							<ShieldIcon />
							FASTLINE INTEGRATED SERVICES LTD
						</MotionBadge>
						<motion.h1
							variants={heroContentVariants}
							custom={2}
							className="my-8 font-bold text-5xl md:text-[54px] lg:my-6 lg:text-6xl"
						>
							Professional <span className="text-primary-light">Security</span>{" "}
							& <span className="text-primary-light">Safety</span> Solutions
						</motion.h1>
						<motion.p
							variants={heroContentVariants}
							custom={3}
							className="max-w-[60ch] text-xl"
						>
							Experts in security services, compliance audits and professional
							training, safeguarding assets and ensuring compliance across key
							sectors in Nigeria.
						</motion.p>
						<motion.div
							variants={heroContentVariants}
							custom={4}
							className="mt-15 mb-25 flex gap-4 self-stretch *:flex-1 md:mb-15 lg:mt-11"
						>
							<Button asChild>
								<Link href="/request-service">Request service</Link>
							</Button>
							<Button variant="secondary" asChild>
								<Link href="#contact-form">Message us</Link>
							</Button>
						</motion.div>
					</motion.div>

					{/* Hero cards */}
					<div className="grid grid-cols-[repeat(2,180px)] gap-6.5 text-center max-md:mb-23.5 max-lg:justify-center max-lg:self-stretch md:grid-cols-[repeat(4,170px)] lg:grid-cols-[repeat(2,210px)] lg:gap-20">
						{stats.map((stat, i) => (
							<motion.div
								initial={{ opacity: 0, scale: 0.3 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.1 * i }}
								key={stat.label + stat.value}
								className="flex h-27.5 flex-col items-center justify-center gap-2 rounded-md border bg-white/5 px-2 py-8 backdrop-blur-xs lg:h-30"
							>
								<span className="font-bold font-michroma text-2xl">
									{stat.value}
								</span>
								<span className="lg:text-lg">{stat.label}</span>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
};
