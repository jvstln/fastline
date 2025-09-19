import { RocketIcon } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "../contact/contact-form";
import { SectionHeading } from "../hero";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export const HomepageGetStarted = () => {
	return (
		<section className="container mx-auto flex flex-col" id={"contact"}>
			<SectionHeading
				title={
					<>
						Secure your Business{" "}
						<span className="text-primary-light">Today</span>
					</>
				}
				subtitle="Don&apos;t wait for security incidents. Our experts will assess risks
				and design a tailored protection plan. Contact us now for expert
				guidance."
				badge={
					<Badge>
						<RocketIcon />
						Ready to get started?
					</Badge>
				}
			/>
			<Button className="mx-auto my-20" asChild>
				<Link href="/request-service">Request service</Link>
			</Button>
			<ContactForm />
		</section>
	);
};
