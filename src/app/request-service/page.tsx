import { Footer } from "@/components/footer";
import { PageHero } from "@/components/hero";
import { RequestServiceForm } from "@/components/request-service/request-service-form";

export const metadata = {
	title: "Request Service",
	description: "Request Service from Fastline Integrated Services Limited",
};

const RequestServicePage = () => {
	return (
		<>
			<PageHero
				image="/images/request-service-hero.jpg"
				classNames={{ root: "h-162.5" }}
				badge={true}
			/>
			<section
				className="-mt-49.25 mx-auto max-w-230.5 bg-background px-15 py-13.75"
				style={{
					boxShadow: "0px 3px 8px rgba(5, 43, 139, 0.12)",
				}}
			>
				<RequestServiceForm />
			</section>
			<Footer />
		</>
	);
};

export default RequestServicePage;
