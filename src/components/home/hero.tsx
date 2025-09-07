import Header from "../header";
import { ShieldIcon } from "../icons";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const stats = [
	{ label: "Industries Served", value: "6+" },
	{ label: "Certifications", value: "7+" },
	{ label: "Years of experience", value: "15+" },
	{ label: "Clients served", value: "50+" },
];

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
			<div className="container m-auto flex items-center justify-between">
				<div className="flex max-w-[60ch] flex-col gap-4">
					<Badge variant="secondary">
						<ShieldIcon />
						FASTLINE INTEGRATED SERVICES LTD
					</Badge>
					<h1 className="font-bold text-6xl">
						Professional <span className="text-primary">Security</span> &{" "}
						<span className="text-primary">Safety</span> Solutions
					</h1>
					<p className="w-[60ch] text-sm">
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
				<div className="grid grid-cols-2 gap-12">
					{stats.map((stat) => (
						<div
							key={stat.label + stat.value}
							className="flex h-30 w-50 flex-col items-center justify-center gap-2 rounded-md border p-4"
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
