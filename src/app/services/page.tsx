import { Footer } from "@/components/footer";
import { ServicesHero } from "@/components/services/hero";
import { SecurityOperations } from "@/components/services/security-operations";
import { TrainingAndCapacityBuilding } from "@/components/services/training";

export const metadata = {
	title: "Our Services",
	description: "Our services include security operations and training",
};

const ServicesPage = () => {
	return (
		<>
			<ServicesHero />
			<SecurityOperations />
			<TrainingAndCapacityBuilding />
			<Footer />
		</>
	);
};

export default ServicesPage;
