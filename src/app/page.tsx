import { Footer } from "@/components/footer";
import { HomepageGetStarted } from "@/components/home/get-started";
import { HomepageHero } from "@/components/home/hero";
import { HomepageSectors } from "@/components/home/sectors";
import { HomepageServices } from "@/components/home/services";
import { HomepageWhyUs } from "@/components/home/why-us";

const Home = () => {
	return (
		<>
			<HomepageHero />
			<HomepageServices />
			<HomepageSectors />
			<HomepageWhyUs />
			<HomepageGetStarted />
			<Footer />
		</>
	);
};

export default Home;
