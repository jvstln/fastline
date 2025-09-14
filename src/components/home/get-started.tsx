import { RocketIcon } from "lucide-react";
import { ContactForm } from "../contact/contact-form";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export const HomepageGetStarted = () => {
	return (
		<section className="container mx-auto px-4 py-12">
			<div className="flex flex-col items-center gap-2 text-center">
				<Badge className="uppercase">
					<RocketIcon />
					Ready to get started?
				</Badge>
				<h2 className="flex flex-wrap justify-center gap-2 font-bold text-3xl">
					Secure your Business <span className="text-primary">Today</span>
				</h2>
				<p className="max-w-[65ch] text-muted-foreground">
					Don&apos;t wait for security incidents. Our experts will assess risks
					and design a tailored protection plan. Contact us now for expert
					guidance.
				</p>
				<Button className="mx-auto my-10">Request service</Button>
			</div>
			<ContactForm />
		</section>
	);
};
