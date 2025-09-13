import { ListIcon, QuoteIcon, TargetIcon, TelescopeIcon } from "lucide-react";
import Image from "next/image";
import { stats } from "@/lib/data";
import visionAndMissionImage from "@/public/images/vision-and-mission.png";
import { Badge } from "../ui/badge";

export const AboutCompanyOverview = () => {
	return (
		<section className="overflow-hidden px-4 py-12">
			<div className="container mx-auto flex items-start gap-8 *:flex-1 max-md:flex-col max-md:text-center">
				{/* Company Overview */}
				<div className="flex flex-col gap-2 max-md:items-center">
					<Badge className="uppercase">
						<ListIcon />
						Company Overview
					</Badge>
					<h2 className="font-bold text-3xl">
						Driven by <span className="text-primary">values</span>, guided by{" "}
						<span className="text-primary">purpose</span>, committed to{" "}
						<span className="text-primary">protection</span>
					</h2>
					<p className="max-w-[65ch] text-muted-foreground md:text-justify">
						Fastline Integrated Services Limited (FISL) is a Nigerian-based
						security and safety solutions company committed to protecting
						people, property, and operations across a wide range of industries.
						With over 15 years of experience, we specialize in manned security,
						risk assessment, compliance auditing, and professional training
						programs tailored to client-specific environments.
					</p>
				</div>

				{/* Quote */}
				<div className="relative">
					<div className="relative z-20 flex flex-col gap-2 rounded bg-background p-4 shadow-md">
						<QuoteIcon className="text-primary" />
						<blockquote>
							Committed to securing what matters most, with{" "}
							<span className="text-primary">integrity</span>,{" "}
							<span className="text-primary">professionalism</span>, and{" "}
							<span className="text-primary">vigilance</span>.
						</blockquote>
					</div>
					<div
						aria-hidden
						className="translate-1/2 pointer-events-none absolute inset-0 z-10 rounded bg-blue-100"
					/>
				</div>
			</div>

			<div className="my-8 flex gap-8 *:flex-1 max-md:mt-16 max-md:flex-col-reverse">
				{/* Hero cards */}
				<div className="grid grid-cols-2 gap-4">
					{stats.map((stat) => (
						<div
							key={stat.label + stat.value}
							className="flex grow flex-col items-center justify-center gap-2 rounded-md border bg-white/5 p-4 text-center backdrop-blur-xs"
						>
							<span className="font-bold font-michroma">{stat.value}</span>
							<span>{stat.label}</span>
						</div>
					))}
				</div>

				<p>
					Our services are designed to meet the evolving security demands of
					sectors such as oil and gas, telecommunications, finance, residential
					estates, private properties, and commercial facilities. From guard
					deployment to crisis response, we apply precision, integrity, and
					industry best practices to every assignment.
				</p>
			</div>

			{/* Vision and mission */}
			<div className="flex gap-8 *:flex-1 max-md:flex-col">
				<Image
					src={visionAndMissionImage}
					alt="Vision and Mission"
					className="size-full"
				/>
				<div className="flex flex-col gap-4 text-primary">
					{/* Vision */}
					<div className="flex grow flex-col justify-center gap-2 rounded bg-linear-45 from-5% from-primary/5 p-4 shadow-md">
						<h3 className="flex items-center gap-2 font-bold text-lg">
							<TelescopeIcon />
							Vision
						</h3>
						<p>
							We have structured our organization to be your preferred and
							internationally recognized best-in-class professional Security and
							Safety solutions services provider.
						</p>
					</div>

					{/* Mission */}
					<div className="flex grow flex-col justify-center gap-2 rounded bg-linear-45 from-5% from-primary/5 p-4 shadow-md">
						<h3 className="flex items-center gap-2 font-bold text-lg">
							<TargetIcon />
							Our Mission
						</h3>
						<p>
							FastLine Integrated Services Limited shall provide Security and
							Safety Management solutions and related services nationwide, with
							a focus on high quality, reliability, ethics and integrity.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
