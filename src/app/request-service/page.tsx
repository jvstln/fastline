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
				image="/images/request-service-hero.png"
				classNames={{ root: "h-162.5" }}
				badge={true}
			/>
			<div className="px-5 pb-20">
				<section
					className="container relative z-10 mx-auto -mt-49.25 bg-background px-4 py-8 md:max-w-230.5 md:px-15 md:py-13.75"
					style={{
						boxShadow: "0px 3px 8px rgba(5, 43, 139, 0.12)",
					}}
				>
					<RequestServiceForm />
				</section>
			</div>
			<Footer />
		</>
	);
};

export default RequestServicePage;
