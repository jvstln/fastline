import {
	BadgeCheck,
	ClockIcon,
	CpuIcon,
	HandshakeIcon,
	ShieldQuestionMarkIcon,
} from "lucide-react";
import { CertifiedCardIcon, PeopleIcon, ShieldIcon } from "../icons";
import { Badge } from "../ui/badge";

const reasons = [
	{
		title: "Certified Excellence",
		description:
			"Our personnel are certified and equipped to handle a wide range of security challenges with professionalism and precision.",
		icon: CertifiedCardIcon,
	},
	{
		title: "24/7 Availaility",
		description:
			"With 24/7 monitoring and rapid response teams on standby, we ensure your security is active, reliable, and never off duty.",
		icon: ClockIcon,
	},
	{
		title: "Advanced Technology",
		description:
			"We deploy modern surveillance, access control, and emergency response tools to keep your people and property secure—24/7.",
		icon: CpuIcon,
	},

	{
		title: "Tailored Solutions",
		description:
			"We provide tailored security strategies aligned with your industry's requirements and risk profile for effective protection.",
		icon: HandshakeIcon,
	},
	{
		title: "Expert Team",
		description:
			"Professionally trained and field-tested security experts drawn from military, law enforcement, and corporate security backgrounds.",
		icon: PeopleIcon,
	},
	{
		title: "Proven Results",
		description:
			"Trusted by top brands and institutions, we consistently deliver safe, compliant, and secure environments across sectors.",
		icon: BadgeCheck,
	},
];

export const HomepageWhyUs = () => {
	return (
		<section className="relative bg-slate-950 py-12 text-white">
			<ShieldIcon className="translate-1/2 pointer-events-none absolute right-1/2 bottom-1/2 z-0 grid size-80 place-items-center rounded-full border-4 border-white p-8 opacity-50 blur-sm" />

			<div className="container relative z-10 mx-auto">
				<div className="flex flex-col items-center gap-2 text-center">
					<Badge variant="secondary">
						<ShieldQuestionMarkIcon />
						WHY CHOOSE FASTLINE
					</Badge>
					<h2 className="flex gap-2 font-bold text-3xl">
						Providing <span className="text-primary">High-Value</span>
						Security <span className="text-primary">Solutions</span>
					</h2>
					<p className="w-[65ch] text-muted-foreground">
						At Fastline, we&apos;re more than service providers, we&apos;re
						trusted partners known for delivering reliable protection, tailored
						strategies, and a firm commitment to safer, more resilient
						organizations across Nigeria.
					</p>
				</div>

				<div className="mt-8 grid grid-cols-2 justify-items-center gap-8">
					{reasons.map((reason) => {
						const { title, description, icon: Icon } = reason;
						return (
							<div key={title} className="flex w-[40ch] items-start gap-4">
								<div className="flex-0 rounded bg-white/5 p-4">
									<Icon className="size-6" />
								</div>
								<div>
									<h3 className="font-semibold text-lg">{title}</h3>
									<p>{description}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
