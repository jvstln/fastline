"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Fragment } from "react";
import { contactInfo, socialLinks } from "@/lib/data";
import { appearVariants, appearViewport } from "@/lib/motion.util";

export const ContactInfo = () => {
	return (
		<section data-not-section className="pt-20">
			{/* Contact info */}
			<motion.div className="container mx-auto mb-8 flex items-center justify-between gap-11 max-md:flex-col max-md:items-center md:gap-15">
				{contactInfo.map((info, i) => (
					<Fragment key={info.title}>
						<motion.div
							variants={appearVariants}
							whileInView="animate"
							viewport={appearViewport}
							transition={{ delay: i * 0.1 }}
							className="flex h-50 max-w-75 flex-1 shrink-0 flex-col items-center gap-3 text-center"
							id={info.hash}
						>
							<info.icon className="size-11.25 rounded bg-primary/5 p-2 text-primary" />
							<h3 className="font-bold text-primary">{info.title}</h3>
							<p>{info.value}</p>
						</motion.div>
						{i + 1 !== contactInfo.length && (
							<div className="w-24 shrink-0 md:h-28 md:w-0">
								<hr className="h-full flex-0 self-center border border-primary" />
							</div>
						)}
					</Fragment>
				))}
			</motion.div>

			{/* Socials */}
			<div className="mx-auto my-8 max-w-87.5 text-center">
				<h2 className="mb-4 font-bold text-lg">Connect with us</h2>
				<div className="flex flex-wrap items-center justify-around gap-4 md:justify-between md:gap-8">
					{socialLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							target="_blank"
							rel="noreferrer"
							className="hover:-translate-y-1 rounded bg-primary/5 p-2 text-primary transition-transform"
						>
							<link.icon />
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};
