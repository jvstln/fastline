import { AboutApproach } from "@/components/about/approach";
import { AboutClients } from "@/components/about/clients";
import { AboutCompanyOverview } from "@/components/about/company-overview";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/hero";

export const metadata = {
  title: "About Us",
  description: "About Fastline Integrated Services Limited",
};

const AboutUsPage = () => {
  return (
    <>
      <PageHero
        title="About Us"
        image="/images/about-hero.webp"
        classNames={{ root: "h-135.75" }}
      />
      <AboutCompanyOverview />
      <AboutApproach />
      <AboutClients />
      <Footer />
    </>
  );
};

export default AboutUsPage;
