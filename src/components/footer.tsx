import {
	FacebookIcon,
	InstagramIcon,
	LinkedinIcon,
	MailIcon,
	MapPinIcon,
	PhoneIcon,
	TwitterIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";

const socialLinks = [
	{ name: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon },
	{ name: "X", href: "https://x.com", icon: TwitterIcon },
	{ name: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
	{ name: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
];

const serviceLinks = [
	{ name: "Security Operations", href: "#" },
	{ name: "Risk & Compliance Solutions", href: "#" },
	{ name: "Training & Capacity Building", href: "#" },
	{ name: "Security Systems & Equipment", href: "#" },
];

const industryLinks = [
	{ name: "Oil & Gas", href: "#" },
	{ name: "Healthcare", href: "#" },
	{ name: "Residential", href: "#" },
	{ name: "Manufacturing", href: "#" },
];

const companyLinks = [
	{ name: "Home", href: "/" },
	{ name: "Our Services", href: "/services" },
	{ name: "About Us", href: "/about" },
	{ name: "Contact Us", href: "/contact" },
];

const quickLinks = [
	{ title: "Our Services", links: serviceLinks },
	{ title: "Industries", links: industryLinks },
	{ title: "Company", links: companyLinks },
];

export const Footer = () => {
	return (
		<footer className="bg-slate-950 px-4 py-12 text-sm text-white">
			<div className="container mx-auto">
				<div className="flex justify-between gap-10 max-md:flex-col">
					{/* About content */}
					<div className="flex basis-1/3 flex-col gap-6">
						<Link href="/">
							<Image src={logo} alt="Logo" />
						</Link>
						<p>
							Experts in security services, compliance audits and professional
							training, safeguarding assets and ensuring compliance across key
							sectors in Nigeria.
						</p>

						{/* Location */}
						<div>
							<h3 className="mb-1 flex items-center gap-2 opacity-70">
								<MapPinIcon className="size-4" /> Location
							</h3>
							<p>
								House 37a, Road 27, Ikota Villa Estate, Lekki, Lagos, Nigeria.
							</p>
						</div>

						{/* Phone */}
						<div>
							<h3 className="mb-1 flex items-center gap-2 opacity-70">
								<PhoneIcon className="size-4" /> Phone number
							</h3>
							<p>+234(0)708-537-5500</p>
						</div>

						{/* Email */}
						<div>
							<h3 className="mb-1 flex items-center gap-2 opacity-70">
								<MailIcon className="size-4" /> Email
							</h3>
							<p>info@fastlinelimited.com</p>
						</div>

						{/* Social links */}
						<div className="flex justify-between gap-4 text-primary">
							{socialLinks.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									target="_blank"
									rel="noreferrer"
									className="hover:-translate-y-1 transition-transform"
								>
									<link.icon />
								</Link>
							))}
						</div>
					</div>

					{/* Quick links */}
					<div className="flex basis-2/3 justify-between gap-6 max-md:flex-wrap">
						{quickLinks.map(({ title, links }) => (
							<div key={title} className="flex-1">
								<h2 className="mb-4 text-lg text-primary">{title}</h2>
								<ul className="space-y-4">
									{links.map((link) => (
										<li key={link.name}>
											<Link
												href={link.href}
												className="opacity-70 hover:opacity-100"
											>
												{link.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

				{/* Copyright */}
				<hr className="my-8 opacity-50" />
				<div className="flex items-center gap-4 opacity-70 *:first:mr-auto max-sm:flex-col max-sm:text-center">
					<p>
						© 2025 Fastline Integrated Services Limited. All rights reserved.
					</p>
					<Link href="/privacy-policy">Privacy Policy</Link>
					<Link href="/terms-of-service">Terms of Service</Link>
				</div>
			</div>
		</footer>
	);
};
