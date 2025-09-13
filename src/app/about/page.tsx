import { AboutApproach } from "@/components/about/approach";
import { AboutClients } from "@/components/about/clients";
import { AboutCompanyOverview } from "@/components/about/company-overview";
import { AboutHero } from "@/components/about/hero";
import { Footer } from "@/components/footer";

export const metadata = {
	title: "About Us",
	description: "About Fastline Integrated Services Limited",
};

const AboutUsPage = () => {
	return (
		<>
			<AboutHero />
			<AboutCompanyOverview />
			<AboutApproach />
			<AboutClients />
			<Footer />
		</>
	);
};

export default AboutUsPage;
