import {
	FacebookIcon,
	InstagramIcon,
	LinkedinIcon,
	MailIcon,
	MapPinIcon,
	PhoneIcon,
	TwitterIcon,
} from "lucide-react";
import healthcareImage from "@/public/images/healthcare.png";
import manufacturingImage from "@/public/images/manufacturing.png";
import oilAndGasImage from "@/public/images/oil-and-gas.png";
import residentialImage from "@/public/images/residential.png";

export const stats = [
	{ label: "Industries Served", value: "6+" },
	{ label: "Certifications", value: "7+" },
	{ label: "Years of experience", value: "15+" },
	{ label: "Clients served", value: "50+" },
];

export const clients = [
	{
		title: "Oil & Gas",
		description:
			"Fastline has extensive experience securing high-risk environments in the oil and gas sector, including pipelines, terminals, and gas plants. We've delivered services such as manned security, rapid response teams, safety compliance audits, and training programs tailored to hazardous operations and regulatory requirements. ",
		image: oilAndGasImage,
	},
	{
		title: "Healthcare",
		description:
			"In the healthcare sector, we provide customized security solutions for healthcare facilities, safeguarding patients, staff, and vital medical assets with an understanding of the unique demands of medical environments. Our services ranging from access control and 24/7 monitoring to rapid emergency response, are designed to meet strict operational and regulatory standards.",
		image: healthcareImage,
	},
	{
		title: "Residential",
		description:
			"Our residential security services focus on protecting estates, apartment complexes, and gated communities through trained guards, controlled access, and routine patrols. continue to serve several clients in residences, and private properties throughout Nigeria, ensuring residents enjoy safe and secure living environments.",
		image: residentialImage,
	},
	{
		title: "Manufacturing",
		description:
			"Our team supports manufacturers by securing factory floors, warehouses, and logistics zones. We provide perimeter protection, compliance monitoring, and fire safety drills to safeguard workers, machinery, and production operations.",
		image: manufacturingImage,
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
