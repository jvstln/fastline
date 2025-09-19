import { ScrollTextIcon } from "lucide-react";
import { PageHero } from "@/components/hero";
import { RequestServiceForm } from "@/components/request-service/request-service-form";
import { Button } from "@/components/ui/button";

export const metadata = {
	title: "Request Service",
	description: "Request Service from Fastline Integrated Services Limited",
};

const RequestServicePage = () => {
	return (
		<>
			<PageHero image="/images/request-service-hero.jpg" />
			<section className="container mx-auto px-4 pb-12">
				<RequestServiceForm />
			</section>
		</>
	);
};

const SuccessfulRequest = () => (
	<>
		<ScrollTextIcon className="size-24 text-primary" />

		<h1 className="font-bold">Thank you!</h1>
		<p>
			Your request has been received. Our team will review the details and
			contact you within 1–2 business days.
		</p>
		<p className="font-bold">
			Need urgent support? Feel free to call us directly.
		</p>
		<Button>Back to Home</Button>
	</>
);
export default RequestServicePage;
