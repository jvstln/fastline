import type { Metadata } from "next";
import { Michroma, Onest } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { RootProviders } from "@/components/providers";

const onest = Onest({ subsets: ["latin"], variable: "--font-onest" });
const michroma = Michroma({
	subsets: ["latin"],
	variable: "--font-michroma",
	weight: "400",
});

export const metadata: Metadata = {
	title: {
		template: "%s | Fastline - Professional Security & Safety Solutions",
		default: "Fastline - Professional Security & Safety Solutions",
	},
	description:
		"Experts in security services, compliance audits and professional training, safeguarding assets and ensuring compliance across key sectors in Nigeria.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					onest.className,
					michroma.variable,
					onest.variable,
					"antialiased",
				)}
			>
				<RootProviders>{children}</RootProviders>
			</body>
		</html>
	);
}
