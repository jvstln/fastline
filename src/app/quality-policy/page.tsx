import Image from "next/image";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/hero";
import logoIcon from "../../../public/logo-icon.svg";

export const metadata = {
  title: "Quality Management Policy",
  description:
    "Fastline Integrated Services Limited - Quality Management Policy",
};

export default function QualityPolicyPage() {
  return (
    <>
      <PageHero
        image="/images/request-service-hero.webp"
        classNames={{ root: "h-162.5" }}
        badge={true}
      />
      <div className="px-5 pb-20">
        <section
          data-not-section
          className="container relative z-10 mx-auto -mt-49.25 flex flex-col items-center gap-8 bg-background px-4 py-10 md:max-w-230.5 md:px-15 md:py-10"
          style={{
            boxShadow: "0px 1px 8px rgba(5, 43, 139, 0.14)",
          }}
        >
          {/* Logo and Company Name */}
          <div className="flex flex-col items-center gap-0.5">
            <div className="flex size-20 items-center justify-center overflow-hidden rounded-full">
              <Image
                src={logoIcon}
                alt="Fastline Logo"
                width={80}
                height={80}
              />
            </div>
            <h1 className="text-center font-bold font-onest text-2xl text-primary-light leading-[150%]">
              FASTLINE INTEGRATED SERVICES LTD.
            </h1>
          </div>

          {/* Title */}
          <h2 className="text-center font-bold font-onest text-black/90 text-xl leading-[150%]">
            Quality Management Policy
          </h2>

          {/* Policy Description */}
          <p className="text-justify font-medium font-onest text-black/80 text-lg leading-[150%]">
            Fastline Integrated Services is committed to delivering reliable,
            high-quality security services through professionalism, trained
            personnel, and strict compliance with approved standards and
            regulations. Our quality management system ensures security
            operations are well planned, closely monitored, and continuously
            improved to meet client needs and industry best practices.
            <br /> <br />
            We emphasize proactive risk management, regular supervision, and the
            use of approved, well-maintained equipment to ensure consistent
            service performance. Through strong management oversight and ongoing
            reviews, Fastline remains focused on client satisfaction,
            operational excellence, and continuous improvement.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}
