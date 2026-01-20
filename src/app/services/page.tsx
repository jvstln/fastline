import { Footer } from "@/components/footer";
import { PageHero } from "@/components/hero";
import { SecurityOperations } from "@/components/services/security-operations";
import { TrainingAndCapacityBuilding } from "@/components/services/training";

export const metadata = {
  title: "Our Services",
  description: "Our services include security operations and training",
};

const ServicesPage = () => {
  return (
    <>
      <PageHero
        title="See how we can help"
        image="/images/services-hero.webp"
      />
      <SecurityOperations />
      <TrainingAndCapacityBuilding />
      <Footer />
    </>
  );
};

export default ServicesPage;
