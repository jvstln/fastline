"use client";
import {
	ChevronRightIcon,
	HospitalIcon,
	HouseIcon,
	SettingsIcon,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { partners } from "@/lib/data";
import { appearVariants, appearViewport, MotionLink } from "@/lib/motion.util";
import { cn } from "@/lib/utils";
import { SectionHeading } from "../hero";
import { IndustryIcon, OilBarrelIcon } from "../icons";
import { Badge } from "../ui/badge";

const sectors = [
	{
		title: "Oil & Gas",
		description:
			"Specialized security solutions for refineries, drilling sites, and petrochemical facilities with advanced hazmat expertise.",
		link: { label: "High-Risk Security", href: "#" },
		icon: OilBarrelIcon,
		iconColors: ["#008E40CC", "#052B8B"],
	},
	{
		title: "Healthcare",
		description:
			"Efficient and reliable security services for healthcare facilities, ensuring a safe environment for patients, staff, and critical medical assets.",
		link: { label: "Assert Protection", href: "#" },
		icon: HospitalIcon,
		iconColors: ["#052B8B80", "#052B8B"],
	},
	{
		title: "Residential",
		description:
			"Premium security solutions for gated communities, estates, and high-value residential properties across Nigeria, ensuring safety and peace of mind.",
		link: { label: "Personal Security", href: "#" },
		icon: HouseIcon,
		iconColors: ["#008E40CC", "#052B8B"],
	},
	{
		title: "Manufacturing",
		description:
			"Specialized industrial security services for factories, warehouses, production facilities, and comprehensive supply chain protection.",
		link: { label: "Industrial Security", href: "#" },
		icon: SettingsIcon,
		iconColors: ["#8E008CCC", "#052B8B"],
	},
];

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
						const { title, description, link, iconColors, icon: Icon } = sector;

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
								<h4 className="font-bold text-xl">{title}</h4>
								<p>{description}</p>
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
					className="mx-auto mt-12 mb-8 max-w-[66ch] text-center"
				>
					We have a proven track record of delivering meticulous and bespoke
					solutions backed by a commitment to the highest levels of quality,
					service and client care.
				</motion.p>

				<div className="hidden justify-center gap-4 lg:flex">
					{partners.map((partner) => {
						const { name, image } = partner;
						return (
							<div key={name} className="relative size-32">
								<Image src={image} alt={name} className="object-contain" fill />
								<span className="sr-only">{name}</span>
							</div>
						);
					})}
				</div>

				<PartnersMarquee />
			</div>
		</section>
	);
};

const PartnersMarquee = () => {
	return (
		<div className="relative w-full overflow-hidden bg-gray-100 py-6 lg:hidden">
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
				{[...partners, ...partners].map((partner, i) => (
					<Image
						key={partner.name + String(i)}
						src={partner.image}
						alt={partner.name}
						className="h-8 w-auto shrink-0 rounded-lg object-cover shadow-md"
					/>
				))}
			</motion.div>
		</div>
	);
};
