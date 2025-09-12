import {
	ChevronRightIcon,
	HospitalIcon,
	HouseIcon,
	SettingsIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IndustryIcon, OilBarrelIcon } from "../icons";
import { Badge } from "../ui/badge";

const partners = [
	{ name: "Arctic Gynae", image: "/images/brands/arcticgynae.png" },
	{ name: "Axxela", image: "/images/brands/axxela.png" },
	{ name: "Ceceyara", image: "/images/brands/ceceyara.png" },
	{ name: "Gaslink", image: "/images/brands/gaslink.png" },
	{ name: "NNPC", image: "/images/brands/nnpc.png" },
	{ name: "Oando", image: "/images/brands/oando.png" },
	{ name: "Technoil", image: "/images/brands/technoil.png" },
	{ name: "Wissen", image: "/images/brands/wissen.png" },
];
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
		<section className="px-4 py-12">
			<div className="container mx-auto">
				<div className="mb-8 flex flex-col items-center gap-2 text-center">
					<Badge>
						<IndustryIcon />
						INDUSTRIES WE SERVE
					</Badge>
					<h2 className="flex flex-wrap justify-center gap-2 font-bold text-3xl">
						Trusted Across Multiple{" "}
						<span className="text-primary">Sectors</span>
					</h2>
					<p className="max-w-[65ch] text-muted-foreground">
						We deliver specialized security solutions tailored to the unique
						operational demands of industries ranging from energy and
						infrastructure to critical facilities.
					</p>
				</div>

				<div className="grid justify-center gap-16 md:grid-cols-2">
					{sectors.map((sector) => {
						const { title, description, link, iconColors, icon: Icon } = sector;

						return (
							<div
								key={title}
								className="flex max-w-112 flex-col items-start gap-4 rounded-md border border-slate-100 p-6 shadow-md"
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
								<Link
									href={link.href}
									className="flex gap-2 font-bold text-primary"
								>
									{link.label} <ChevronRightIcon />
								</Link>
							</div>
						);
					})}
				</div>

				<p className="mx-auto mt-12 mb-8 max-w-[66ch] text-center">
					We have a proven track record of delivering meticulous and bespoke
					solutions backed by a commitment to the highest levels of quality,
					service and client care.
				</p>

				<div className="flex justify-center gap-4">
					{partners.map((partner) => {
						const { name, image } = partner;
						return (
							<div key={name} className="relative size-16">
								<Image src={image} alt={name} className="object-contain" fill />
								<span className="sr-only">{name}</span>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
