"use client";
import Link from "next/link";
import { Fragment } from "react";
import { contactInfo, socialLinks } from "@/lib/data";

export const ContactInfo = () => {
	return (
		<section className="px-4 py-12">
			{/* Contact info */}
			<div className="container mx-auto flex justify-between gap-8 max-md:flex-col max-md:items-center md:gap-4">
				{contactInfo.map((info, i) => (
					<Fragment key={info.title}>
						<div className="flex max-w-[40ch] flex-1 flex-col items-center gap-2 text-center">
							<info.icon className="size-10 rounded bg-primary/5 p-2 text-primary" />
							<h3 className="font-bold text-primary">{info.title}</h3>
							<p>{info.value}</p>
						</div>
						{i + 1 !== contactInfo.length && (
							<div className="w-24 shrink-0 md:w-0">
								<hr className="h-full flex-0 self-center border border-primary" />
							</div>
						)}
					</Fragment>
				))}
			</div>

			{/* Socials */}
			<div className="my-8 text-center">
				<h2 className="mb-4 font-bold text-lg">Connect with us</h2>
				<div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
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
