"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
import logoIcon from "@/public/logo-icon.svg";

const links = [
	{ label: "Privacy Policy", href: "/privacy-policy" },
	{ label: "Terms of Service", href: "/terms-of-service" },
];

const LegalLayout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();

	return (
		<>
			<Header mode="light" />
			<section>
				<div className="mb-17.5 flex flex-col items-center text-center font-bold md:mb-25">
					<Image src={logoIcon} alt="Fastline Logo" className="size-20" />
					<h2 className="text-primary-light text-xl md:text-2xl">
						FASTLINE INTEGRATED SERVICES LTD.
					</h2>
					<h1 className="text-lg">Privacy Policy & Terms of Service</h1>
				</div>

				<div className="container mx-auto flex gap-8 max-md:flex-col">
					{/* Sidebar */}
					<ul className="flex shrink-0 gap-3 max-md:*:flex-1 md:w-62.5 md:flex-col">
						{links.map((link) => {
							const isActive = pathname === link.href;

							return (
								<li key={link.label}>
									<Link
										data-not-link
										href={link.href}
										className={cn(
											"block py-2.5 text-center font-semibold text-xl",
											isActive
												? "border-current bg-primary-light/5 text-primary-light max-md:border-b-2 md:border-l-2"
												: "opacity-50",
										)}
									>
										{link.label}
									</Link>
								</li>
							);
						})}
					</ul>

					{/* Main content */}
					<main
						className={cn(
							"p-8 shadow-md md:px-15 md:py-10",
							"[&_h2]:mb-2 [&_h2]:font-bold [&_h2]:text-lg [&_p,li]:text-lg/[1.5] [&_section]:mb-10",
						)}
						style={{
							boxShadow: "0px 1px 8px rgba(5, 43, 139, 0.14)",
						}}
						data-not-section
					>
						{children}
					</main>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default LegalLayout;
