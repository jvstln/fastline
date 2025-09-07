import Image from "next/image";
import Link from "next/link";
import riskAndComplianceImage from "@/public/images/risk-and-compliance-solutions.png";
import securityOperationsImage from "@/public/images/security-operations.png";
import trainingAndCapacityBuildingImage from "@/public/images/training-and-capacity-building.png";
import { DoubleCogIcon, ShieldIcon } from "../icons";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const services = [
	{
		image: securityOperationsImage,
		title: "Security Operations",
		description:
			"Fastline provides dependable physical security through highly trained guards, 24/7 monitoring, and rapid emergency response. We combine expert personnel with real-time surveillance systems to safeguard lives, property, and sensitive environments. Core offerings include Security Guard Services, 24/7 Monitoring, Emergency Response, and Security Systems & Equipment",
		link: "#",
	},
	{
		image: riskAndComplianceImage,
		title: "Risk & Compliance Solutions",
		description:
			"We help organizations identify vulnerabilities, meet industry standards, and maintain regulatory readiness. Our risk and compliance services are designed to reduce exposure and improve operational safety. Core offerings include Risk Assessments, Compliance Support, and Hazard & Incident Management.",
		link: "#",
	},
	{
		image: trainingAndCapacityBuildingImage,
		title: "Training & Capacity Building",
		description:
			"Our expert personnel offers industry-focused training that equips personnel and client teams with the knowledge and skills to act decisively in emergencies and uphold safety standards. Key programs include Safety Training, Security Guard Training, and IED Awareness & Emergency Drills.",
		link: "#",
	},
];

export const HomepageServices = () => {
	return (
		<>
			<section className="py-12">
				<div className="container mx-auto">
					<div className="mb-8 flex flex-col items-center gap-2 text-center">
						<Badge>
							<DoubleCogIcon />
							OUR SERVICES
						</Badge>
						<h2 className="flex gap-2 font-bold text-3xl">
							Protective
							<span className="text-primary">Services </span>
							That Go
							<span className="text-primary">Beyond Guarding</span>
						</h2>
						<p className="w-[65ch] text-muted-foreground">
							From security guard services to safety trainings, we provide
							tailored solutions to protect your various business across
							multiple sectors.
						</p>
					</div>

					<div className="flex flex-col">
						{services.map((service, i) => {
							const image = (
								<Image
									src={service.image}
									alt={service.title}
									className="mx-auto h-auto w-full object-contain"
								/>
							);
							const content = (
								<div className="col-span-2 flex flex-col items-start gap-4 text-justify">
									<h3 className="font-semibold text-2xl">{service.title}</h3>
									<p>{service.description}</p>
									<Button asChild>
										<Link href={service.link}>Explore Services</Link>
									</Button>
								</div>
							);

							return (
								<div
									key={service.title}
									className="grid grid-cols-3 items-center gap-6"
								>
									{i % 2 === 0 ? image : content}
									{i % 2 === 0 ? content : image}
								</div>
							);
						})}
					</div>
				</div>
			</section>
			<section
				className="border-slate-900 border-b-40 px-4 pt-12 pb-8"
				style={{
					background:
						"url(/images/homepage-request-service.png) center center/cover no-repeat",
				}}
			>
				<div className="container mx-auto flex flex-col items-center gap-6 text-white">
					<Badge variant="secondary">
						<ShieldIcon />
						Trusted Security Partner
					</Badge>
					<h3 className="text-3xl">
						End-to-End Protection Tailored Just For You
					</h3>
					<p className="w-[60ch]">
						With over 15 years of experience in security industry, we have
						earned the trust of clients across Nigeria through unwavering
						dedication to excellence.
					</p>
					<Button>Request Service</Button>
				</div>
			</section>
		</>
	);
};
