import {
	FacebookIcon,
	HospitalIcon,
	HouseIcon,
	InstagramIcon,
	LinkedinIcon,
	type LucideIcon,
	MailIcon,
	MapPinIcon,
	PhoneIcon,
	SettingsIcon,
	TargetIcon,
	TelescopeIcon,
	TwitterIcon,
} from "lucide-react";
import type { Route } from "next";
import type { StaticImageData } from "next/image";
import { OilBarrelIcon } from "@/components/icons";
import arcticGynaeImage from "@/public/images/brands/arcticgynae.png";
import axxelaImage from "@/public/images/brands/axxela.png";
import ceceyaraImage from "@/public/images/brands/ceceyara.png";
import gaslinkImage from "@/public/images/brands/gaslink.png";
import nnpcImage from "@/public/images/brands/nnpc.png";
import oandoImage from "@/public/images/brands/oando.png";
import technoilImage from "@/public/images/brands/technoil.png";
import wissenImage from "@/public/images/brands/wissen.png";
import healthcareImage from "@/public/images/healthcare.png";
import manufacturingImage from "@/public/images/manufacturing.png";
import maritimeImage from "@/public/images/maritime.png";
import oilAndGasImage from "@/public/images/oil-and-gas.png";
import residentialImage from "@/public/images/residential.png";
import riskAndComplianceImage from "@/public/images/risk-and-compliance-solutions.png";
import securityOperationsImage from "@/public/images/security-operations.png";
import trainingAndCapacityBuildingImage from "@/public/images/training-and-capacity-building.png";

export const EMAIL_ADDRESS = "info@fastlinelimited.com";

export const stats: Array<{ label: string; value: string; link?: Route }> = [
	{ label: "Industries Served", value: "6+", link: "/about#clients" },
	{ label: "Years of experience", value: "15+" },
	{ label: "Clients served", value: "50+" },
];

export const sectors: Array<{
	title: string;
	description: string;
	image: StaticImageData;
	link: { label: string; href: Route };
	briefDescription?: string;
	icon?: LucideIcon | typeof OilBarrelIcon;
	iconColors?: [string, string];
}> = [
	{
		title: "Oil & Gas",
		description:
			"Fastline has extensive experience securing high-risk environments in the oil and gas sector, including pipelines, terminals, and gas plants. We've delivered services such as manned security, rapid response teams, safety compliance audits, and training programs tailored to hazardous operations and regulatory requirements. Our clients in this industry includes Techno Oil and NNPC among others.",
		briefDescription:
			"Specialized security solutions for refineries, drilling sites, and petrochemical facilities with advanced hazmat expertise.",
		image: oilAndGasImage,
		link: { label: "High-Risk Security", href: "/about#oil-and-gas" },
		icon: OilBarrelIcon,
		iconColors: ["#008E40CC", "#052B8B"],
	},
	{
		title: "Healthcare",
		description:
			"In the healthcare sector, we provide customized security solutions for healthcare facilities, safeguarding patients, staff, and vital medical assets with an understanding of the unique demands of medical environments. Our services ranging from access control and 24/7 monitoring to rapid emergency response, are designed to meet strict operational and regulatory standards. Our clients in this industry includes Arctic Gynae Centre among others.",
		briefDescription:
			"Efficient and reliable security services for healthcare facilities, ensuring a safe environment for patients, staff, and critical medical assets.",
		image: healthcareImage,
		link: { label: "Assert Protection", href: "/about#health-care" },
		icon: HospitalIcon,
		iconColors: ["#052B8B80", "#052B8B"],
	},
	{
		title: "Residential",
		description:
			"Our residential security services focus on protecting estates, apartment complexes, and gated communities through trained guards, controlled access, and routine patrols. continue to serve several clients in residences, and private properties throughout Nigeria, ensuring residents enjoy safe and secure living environments.",
		briefDescription:
			"Premium security solutions for gated communities, estates, and high-value residential properties across Nigeria, ensuring safety and peace of mind.",
		image: residentialImage,
		link: { label: "Personal Security", href: "/about#residential" },
		icon: HouseIcon,
		iconColors: ["#008E40CC", "#052B8B"],
	},
	{
		title: "Manufacturing",
		description:
			"Our team supports manufacturers by securing factory floors, warehouses, and logistics zones. We provide perimeter protection, compliance monitoring, and fire safety drills to safeguard workers, machinery, and production operations.",
		briefDescription:
			"Specialized industrial security services for factories, warehouses, production facilities, and comprehensive supply chain protection.",
		image: manufacturingImage,
		link: { label: "Industrial Security", href: "/about#manufacturing" },
		icon: SettingsIcon,
		iconColors: ["#8E008CCC", "#052B8B"],
	},
	{
		title: "Maritime",
		description:
			"Our maritime security services protect ports, vessels, and waterfront facilities through manned security, access control, and continuous monitoring. We help deter unauthorized access, safeguard cargo and assets, and support safe operations across marine and coastal environments.",
		image: maritimeImage,
		link: { label: "Maritime", href: "/about#maritime" },
	},
];

export const contactInfo = [
	{
		title: "Location",
		value: "House 37a, Road 27, Ikota Villa Estate, Lekki, Lagos, Nigeria.",
		icon: MapPinIcon,
	},
	{
		title: "Phone",
		value: "+234(0)708-537-5500",
		icon: PhoneIcon,
		hash: "phone",
	},
	{
		title: "Email",
		value: "info@fastlinelimited.com",
		icon: MailIcon,
	},
];

export const socialLinks = [
	{ name: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon },
	{ name: "X", href: "https://x.com", icon: TwitterIcon },
	{ name: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
	{ name: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
];

export const partners = [
	{ name: "Arctic Gynae", image: arcticGynaeImage },
	{ name: "Axxela", image: axxelaImage },
	{ name: "Ceceyara", image: ceceyaraImage },
	{ name: "Gaslink", image: gaslinkImage },
	{ name: "NNPC", image: nnpcImage },
	{ name: "Oando", image: oandoImage },
	{ name: "Technoil", image: technoilImage },
	{ name: "Wissen", image: wissenImage },
];

export const vissionAndMission = [
	{
		title: "Vision",
		icon: TelescopeIcon,
		description:
			"We have structured our organization to be your preferred and internationally recognized best-in-class professional Security and Safety solutions services provider.",
	},
	{
		title: "Mission",
		icon: TargetIcon,
		description:
			"FastLine Integrated Services Limited shall provide Security and Safety Management solutions and related services nationwide, with a focus on high quality, reliability, ethics and integrity.",
	},
];

export const homepageServices = [
	{
		image: securityOperationsImage,
		title: "Manned Security Services",
		description:
			"Fastline delivers reliable manned security services designed to protect people, property, and operations across diverse environments. Our professionally trained guards provide a visible deterrent, maintain strict access control, mobile patrols and respond swiftly to security incidents. Every deployment is tailored to the client's risk profile, site requirements, and operational needs.",
		link: "/#security-operations",
	},
	{
		image: riskAndComplianceImage,
		title: "Security Risk Assessment & Strategic Planning",
		description:
			"Our experts conduct detailed security evaluations to identify vulnerabilities and design effective protection strategies. Through systematic assessments, we help clients understand their risk exposure and implement practical, prioritized measures that strengthen security posture and operational resilience.",
		link: "/#risk-and-compliance-solutions",
	},
	{
		image: trainingAndCapacityBuildingImage,
		title: "Security Systems & Equipment Solutions",
		description:
			"We provide end-to-end security equipment solutions that enhance physical protection and situational awareness. From system selection to installation and ongoing management, we ensure security technologies are properly deployed and fully integrated into your protection strategy.",
		link: "/#training-and-capacity-building",
	},
];
