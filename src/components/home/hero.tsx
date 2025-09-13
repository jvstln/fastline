import { stats } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Header } from "../header";
import { ShieldIcon } from "../icons";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export const HomepageHero = () => {
	return (
		<div
			className="flex min-h-screen flex-col text-white"
			style={{
				background: `url('/images/homepage-hero.png') no-repeat center center/cover`,
			}}
		>
			<Header />
			{/* Hero content */}
			<div
				className={cn(
					"container m-auto flex items-center justify-between px-4 py-6",
					"max-lg:flex-col max-lg:gap-10",
				)}
			>
				<div className="flex max-w-[60ch] basis-1/2 flex-col gap-4 max-lg:items-center max-lg:text-center">
					<Badge variant="secondary">
						<ShieldIcon />
						FASTLINE INTEGRATED SERVICES LTD
					</Badge>
					<h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">
						Professional <span className="text-primary">Security</span> &{" "}
						<span className="text-primary">Safety</span> Solutions
					</h1>
					<p className="max-w-[60ch] text-sm">
						Experts in security services, compliance audits and professional
						training, safeguarding assets and ensuring compliance across key
						sectors in Nigeria.
					</p>
					<div className="flex gap-4">
						<Button>Request service</Button>
						<Button variant="secondary">Message us</Button>
					</div>
				</div>

				{/* Hero cards */}
				<div
					className={cn(
						"basis-1/2 lg:grid lg:grid-cols-2 lg:justify-items-center xl:gap-12",
						"flex flex-wrap gap-6",
					)}
				>
					{stats.map((stat) => (
						<div
							key={stat.label + stat.value}
							className="flex grow flex-col items-center justify-center gap-2 rounded-md border bg-white/5 p-4 backdrop-blur-xs lg:h-30 lg:w-50"
						>
							<span className="font-bold font-michroma">{stat.value}</span>
							<span>{stat.label}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
