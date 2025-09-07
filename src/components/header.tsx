"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import logo from "@/public/logo.svg";

const links = [
	{ name: "Home", href: "/" },
	{ name: "Services", href: "/services" },
	{ name: "About", href: "/about" },
	{ name: "Contact", href: "/contact" },
];

const Header = () => {
	const pathname = usePathname();
	return (
		<header className="">
			<nav>
				<ul className="container mx-auto flex h-20 items-center gap-8 p-4">
					<li>
						<Link href="/">
							<Image src={logo} alt="Fastline Logo" />
						</Link>
					</li>

					{links.map((link, i) => {
						const isActive = pathname.startsWith(link.href);
						return (
							<li key={link.name} className={cn(i === 0 && "ml-auto")}>
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
				</ul>
			</nav>
		</header>
	);
};

export default Header;
