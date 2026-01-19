import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/hero";

export const metadata = {
	title: "Contact Us",
	description: "Contact Fastline Integrated Services Limited",
};

const ContactPage = () => {
	return (
		<>
			<PageHero title="Talk to us today" image="/images/contact-hero.png" />
			<ContactInfo />
			<section className="container mx-auto px-4 pb-12">
				<ContactForm />
			</section>
			<Footer />
		</>
	);
};

export default ContactPage;
