import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { sectors, socialLinks } from "@/lib/data";
import logo from "@/public/logo-light.svg";

const quickLinks = [
	{
		title: "Our Services",
		links: [
			{ name: "Security Operations", href: "/services#security-operations" },
			{
				name: "Risk & Compliance Solutions",
				href: "/services#risk-and-compliance-solutions",
			},
			{
				name: "Training & Capacity Building",
				href: "/services#training-and-capacity-building",
			},
		],
	},
	{
		title: "Industries",
		links: sectors.map((sector) => ({
			name: sector.title,
			href: sector.link.href,
		})),
	},
	{
		title: "Company",
		links: [
			{ name: "Home", href: "/" },
			{ name: "Our Services", href: "/services" },
			{ name: "About Us", href: "/about" },
			{ name: "Contact Us", href: "/contact" },
		],
	},
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
							Expert in manned security services, risk assessment, planning, and
							security systems solutions in Nigeria.
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
					<div className="flex max-w-165 justify-between gap-15 max-md:flex-wrap md:gap-20">
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
