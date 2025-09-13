import { Header } from "../header";
import { ShieldIcon } from "../icons";
import { Badge } from "../ui/badge";

export const AboutHero = () => {
	return (
		<div
			className="flex min-h-[50vh] flex-col text-white"
			style={{
				background: `linear-gradient(#0003, #0003), url('/images/about-hero.jpg') no-repeat center center/cover`,
			}}
		>
			<Header />
			{/* Hero content */}
			<div className="container m-auto flex max-w-[60ch] basis-1/2 flex-col gap-4">
				<Badge variant="secondary">
					<ShieldIcon />
					FASTLINE INTEGRATED SERVICES LTD
				</Badge>
				<h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">About Us</h1>
			</div>
		</div>
	);
};
