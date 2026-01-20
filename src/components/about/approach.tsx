"use client";
import { QuoteIcon } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  appearVariants,
  appearViewport,
  MotionImage,
  scaleInVariants,
} from "@/lib/motion.util";
import approachImage1 from "@/public/images/approach-1.webp";
import approachImage2 from "@/public/images/approach-2.webp";
import { SectionHeading } from "../hero";
import { DirectionIcon } from "../icons";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export const AboutApproach = () => {
  const fadeInProps = {
    variants: appearVariants,
    viewport: appearViewport,
    initial: "initial",
    whileInView: "animate",
  };

  const scaleInProps = {
    ...fadeInProps,
    variants: scaleInVariants,
  };

  return (
    <section className="bg-black py-30 text-white">
      <SectionHeading
        title="Tailored strategies. Proven methods. Reliable outcomes"
        badge={
          <Badge variant="secondary">
            <DirectionIcon />
            Our Approach
          </Badge>
        }
        classNames={{ root: "max-w-164 lg:max-w-164" }}
      />

      <div className="container mx-auto mt-15 grid grid-cols-1 gap-15 text-[15px]/[1.7] md:mt-20 md:grid-cols-4 md:grid-rows-[217px] md:text-lg/[1.7] lg:gap-12">
        <motion.p
          {...fadeInProps}
          className="row-[1/2] text-center md:col-[1/3] md:row-[1/2] md:max-w-153.75 md:text-justify"
        >
          At Fastline, we believe effective security is never one-size-fits-all.
          Our approach is built on careful assessment, strategic planning, and
          operational excellence. We begin by understanding your unique risks,
          site dynamics, and protection needs, then deliver tailored solutions
          through trained guard deployment, detailed security evaluations, and
          the procurement and installation of reliable security equipment—fully
          aligned with your industry and environment.
        </motion.p>
        <MotionImage
          {...fadeInProps}
          src={approachImage1}
          className="row-[2/3] h-117.75 w-115.25 justify-self-center bg-neutral-800 object-contain md:col-[3/5] md:row-[1/3] md:justify-self-end"
          alt="Approach"
        />
        <MotionImage
          {...fadeInProps}
          src={approachImage2}
          className="row-[5/6] h-117.75 w-115.25 justify-self-center bg-neutral-800 object-contain md:col-[1/3] md:row-[2/4] md:justify-self-start"
          alt="Approach"
        />
        <motion.div
          {...fadeInProps}
          className="row-[4/5] space-y-2 self-end text-center md:col-[3/5] md:row-[3/4] md:max-w-146.25 md:text-justify"
        >
          <p>
            Our team works proactively, anticipating threats through detailed
            security evaluations and maintaining constant situational awareness
            on every site. Our officers operate with discipline,
            professionalism, and clarity under pressure, supported by the right
            security systems and equipment. Through expert oversight and strict
            adherence to standards, we deliver not just security, but lasting
            peace of mind.
          </p>
          <Button asChild>
            <Link href="/quality-policy">Fastline Quality Policy</Link>
          </Button>
        </motion.div>

        {/* Quote */}
        <motion.div
          {...scaleInProps}
          className="row-[3/4] flex max-w-142.5 flex-col gap-2 self-center justify-self-center rounded-sm bg-neutral-800 p-8 text-lg md:col-[2/4] md:row-[2/3] md:text-xl"
          style={{
            boxShadow: "-13px -11px 4px rgba(0, 0, 0, 0.4)",
          }}
        >
          <QuoteIcon className="text-primary-light" />
          <blockquote>
            We don&apos;t just respond to risks. We anticipate and neutralize
            them <span className="text-primary-light">strategically</span> and{" "}
            <span className="text-primary-light">professionally</span>.
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};
