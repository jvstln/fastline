"use client";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { cn } from "@/lib/utils";
import logo from "@/public/logo.svg";
import { Button } from "./ui/button";

const links = [
	{ name: "Home", href: "/" },
	{ name: "Services", href: "/services" },
	{ name: "About", href: "/about" },
	{ name: "Contact", href: "/contact" },
];

const Header = () => {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const isMobile = useBreakpoint("max-md");

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
		<header className={cn("relative z-30", open && isMobile && "bg-black")}>
			<nav data-slot="header-nav">
				<ul className="container mx-auto flex h-20 items-center gap-8 p-4">
					<li>
						<Link href="/">
							<Image src={logo} alt="Fastline Logo" />
						</Link>
					</li>

					{links.map((link, i) => {
						const isActive = pathname.startsWith(link.href);
						return (
							<li
								key={link.name}
								className={cn("max-md:hidden", i === 0 && "ml-auto")}
							>
								<Link
									href={link.href}
									className={cn(
										"text-sm",
										isActive
											? "font-bold underline decoration-2 underline-offset-3"
											: "opacity-60 hover:underline hover:decoration-1 hover:underline-offset-3",
									)}
								>
									{link.name}
								</Link>
							</li>
						);
					})}

					{/* Mobile menu trigger */}
					<li className="ml-auto md:hidden">
						<Button size="icon" variant="ghost" onClick={() => setOpen(!open)}>
							<MenuIcon />
						</Button>
					</li>
				</ul>

				{/* Mobile menu */}
				{open && (
					<ul className="absolute flex w-full flex-col bg-black py-2">
						{links.map((link) => {
							const isActive = pathname.startsWith(link.href);

							return (
								<li key={link.name}>
									<Link
										href={link.href}
										className={cn(
											"block px-6 py-4 hover:bg-white/10",
											isActive && "bg-white/10",
										)}
										data-not-link
									>
										{link.name}
									</Link>
								</li>
							);
						})}
					</ul>
				)}
			</nav>
		</header>
	);
};

export default Header;
