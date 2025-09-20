import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/lib/data";
import logo from "@/public/logo-light.svg";

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
		<footer className="bg-neutral-950 px-4 pt-15 pb-16 text-white">
			<div className="container mx-auto">
				<div className="flex justify-between gap-15 max-lg:flex-col lg:gap-8">
					{/* About content */}
					<div className="flex max-w-143 shrink-0 flex-col gap-8 lg:w-87">
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
							<h3 className="mb-2 flex items-center gap-1.5 opacity-50">
								<MapPinIcon className="size-4" /> Location
							</h3>
							<p>
								House 37a, Road 27, Ikota Villa Estate, Lekki, Lagos, Nigeria.
							</p>
						</div>

						{/* Phone */}
						<div>
							<h3 className="mb-2 flex items-center gap-1.5 opacity-50">
								<PhoneIcon className="size-4" /> Phone number
							</h3>
							<p>+234(0)708-537-5500</p>
						</div>

						{/* Email */}
						<div>
							<h3 className="mb-2 flex items-center gap-1.5 opacity-50">
								<MailIcon className="size-4" /> Email
							</h3>
							<p>info@fastlinelimited.com</p>
						</div>

						{/* Social links */}
						<div className="flex w-78 justify-between gap-4 text-primary">
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
					<div className="flex max-w-165 justify-between gap-15 max-md:flex-wrap md:gap-4">
						{quickLinks.map(({ title, links }) => (
							<div key={title} className="min-w-16">
								<h2 className="mb-6 font-semibold text-[#3389FF] text-lg">
									{title}
								</h2>
								<ul className="space-y-6">
									{links.map((link) => (
										<li key={link.name}>
											<Link
												href={link.href}
												className="opacity-50 hover:opacity-100"
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

				<hr className="my-10 border-b-2 opacity-10" />
				{/* Copyright */}
				<div className="flex items-center justify-between gap-4 max-sm:flex-col max-sm:text-center">
					<p className="opacity-40">
						© 2025 Fastline Integrated Services Limited. All rights reserved.
					</p>
					<div className="flex items-center justify-around gap-10 opacity-50">
						<Link href="/privacy-policy">Privacy Policy</Link>
						<Link href="/terms-of-service">Terms of Service</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};
