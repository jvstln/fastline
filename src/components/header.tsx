"use client";
import { MenuIcon, XIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { cn } from "@/lib/utils";
import logo from "@/public/logo.svg";
import logoLight from "@/public/logo-light.svg";
import { Button } from "./ui/button";

const links = [
	{ name: "Home", href: "/" },
	{ name: "Services", href: "/services" },
	{ name: "About", href: "/about" },
	{ name: "Contact", href: "/contact" },
];

const fadeInVariants = {
	initial: {
		height: 0,
		opacity: 0,
	},
	animate: {
		height: "auto",
		opacity: 1,
	},
};

export const Header = ({
	showRequestServiceButton = true,
	mode = "dark",
}: {
	showRequestServiceButton?: boolean;
	mode?: "dark" | "light";
}) => {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const isMobile = useBreakpoint("max-lg");

	const isLinkActive = (href: string) => {
		return (
			(pathname.startsWith(href) && href !== "/") ||
			(pathname === "/" && href === "/")
		);
	};

	// Lisen for outside clicks
	useEffect(() => {
		const handler = (e: MouseEvent) => {
			if (
				e.target instanceof HTMLElement &&
				!e.target.closest('[data-slot="header-nav"]')
			) {
				setOpen(false);
			}
		};

		document.addEventListener("click", handler);
		return () => document.removeEventListener("click", handler);
	}, []);

	return (
		<header
			className={cn(
				"relative z-30",
				mode === "dark" ? "bg-black/5" : "bg-white",
				open && isMobile && (mode === "dark" ? "bg-black/80" : "bg-white/80"),
			)}
		>
			<nav data-slot="header-nav" className="px-4">
				<ul className="container mx-auto flex h-20 justify-between gap-8 py-3">
					<li className="self-center">
						<Link href="/">
							<Image
								src={mode === "dark" ? logoLight : logo}
								alt="Fastline Logo"
							/>
						</Link>
					</li>

					<ul className="flex gap-3">
						{links.map((link) => {
							const isActive = isLinkActive(link.href);
							return (
								<li key={link.name} className="flex max-lg:hidden">
									<Link
										href={link.href}
										className={cn(
											"flex items-center px-5",
											isActive
												? "font-bold underline decoration-2 underline-offset-3"
												: "opacity-60 hover:font-bold hover:opacity-100",
										)}
										data-not-link
									>
										{link.name}
									</Link>
								</li>
							);
						})}
						{showRequestServiceButton && (
							<li className="flex items-center max-lg:hidden">
								<Button size="sm" asChild>
									<Link href="/request-service">Request Service</Link>
								</Button>
							</li>
						)}
					</ul>

					{/* Mobile menu trigger */}
					<li className="ml-auto lg:hidden">
						<button
							type="button"
							className="p-4 transition-transform active:scale-90"
							onClick={() => setOpen(!open)}
						>
							{open ? <XIcon /> : <MenuIcon />}
						</button>
					</li>
				</ul>

				{/* Mobile menu */}
				<AnimatePresence>
					{open && (
						<motion.ul
							initial="initial"
							animate="animate"
							exit="initial"
							variants={fadeInVariants}
							className={cn(
								"-mx-4 absolute flex w-full flex-col overflow-hidden border-white/20 border-t",
								mode === "dark" ? "bg-black/80" : "bg-white/80",
							)}
						>
							{links.map((link) => {
								const isActive = isLinkActive(link.href);
								return (
									<li key={link.name}>
										<Link
											href={link.href}
											className={cn(
												"block px-6 py-4",
												mode === "dark"
													? "hover:bg-white/10"
													: "hover:bg-black/10",
												isActive &&
													(mode === "dark" ? "bg-black/10" : "bg-white/10"),
											)}
											data-not-link
										>
											{link.name}
										</Link>
									</li>
								);
							})}
							{showRequestServiceButton && (
								<li
									className={cn(
										"block px-6 py-4",
										mode === "dark" ? "hover:bg-white/10" : "hover:bg-black/10",
									)}
								>
									<Button size="sm" asChild>
										<Link href="/request-service">Request Service</Link>
									</Button>
								</li>
							)}
						</motion.ul>
					)}
				</AnimatePresence>
			</nav>
		</header>
	);
};
