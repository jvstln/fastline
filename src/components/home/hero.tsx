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
		<div className="relative flex h-299 flex-col overflow-hidden text-white md:h-218.75 lg:h-193.75">
			<MotionImage
				src={homepageHeroImage}
				initial={{ scale: 1.2 }}
				animate={{ scale: 1 }}
				alt=""
				className="-z-10 absolute inset-0 size-full object-cover max-md:object-[75%]"
			/>
			<Header showRequestServiceButton={false} />
			<div className="my-auto px-4">
				<motion.div
					initial="initial"
					animate="animate"
					className="container mx-auto flex items-center justify-between max-lg:flex-col max-lg:gap-10"
				>
					{/* Hero content */}
					<motion.div
						variants={heroContentVariants}
						custom={1}
						className="flex max-w-137.5 basis-1/2 flex-col gap-8 max-lg:items-center max-lg:text-center md:gap-6"
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
							className="font-bold text-5xl md:text-[54px] lg:text-6xl"
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
							className="mt-15 flex gap-4 self-stretch *:flex-1 max-md:mb-15 lg:mt-16"
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
					<div className="grid grid-cols-[repeat(2,auto)] gap-4 text-center max-lg:justify-between max-lg:self-stretch lg:grid-cols-2 lg:gap-20">
						{stats.map((stat, i) => (
							<motion.div
								initial={{ opacity: 0, scale: 0.3 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.1 * i }}
								key={stat.label + stat.value}
								className="flex max-w-42.5 flex-col items-center justify-center gap-2 rounded-md border bg-white/5 p-4 py-8 backdrop-blur-xs max-md:h-27.5 max-md:grow lg:h-30 lg:w-52.5"
							>
								<span className="font-bold font-michroma text-2xl">
									{stat.value}
								</span>
								<span className="md:text-lg">{stat.label}</span>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
};
