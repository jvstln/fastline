"use client";
import { QuoteIcon } from "lucide-react";
import { motion } from "motion/react";
import {
	appearVariants,
	appearViewport,
	MotionImage,
	scaleInVariants,
} from "@/lib/motion.util";
import approachImage1 from "@/public/images/approach-1.png";
import approachImage2 from "@/public/images/approach-2.png";
import { SectionHeading } from "../hero";
import { Badge } from "../ui/badge";

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
		<section className="bg-black text-white">
			<SectionHeading
				title="Tailored strategies. Proven methods. Reliable outcomes"
				badge={<Badge variant="secondary">Our Approach</Badge>}
			/>

			<div className="mt-20 grid grid-cols-1 gap-15 md:grid-cols-4 md:grid-rows-3 lg:gap-12">
				<motion.p
					{...fadeInProps}
					className="row-[1/2] text-center md:col-[1/3] md:row-[1/2] md:text-justify"
				>
					At Fastline, we believe effective security is never one-size-fits-all.
					That&apos;s why our approach is rooted in careful assessment,
					customized planning, and operational excellence. We start by
					understanding your unique risks, facility dynamics, and compliance
					requirements. From there, we design tailored security and safety
					solutions, from trained personnel deployment to risk mitigation
					strategies—aligned with your industry and environment.
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
				<motion.p
					{...fadeInProps}
					className="row-[4/5] self-end text-center md:col-[3/5] md:row-[3/4] md:text-justify"
				>
					Our team works proactively not reactively, anticipating threats,
					identifying vulnerabilities, and maintaining constant situational
					awareness. Every officer is trained to act with discipline,
					professionalism, and clarity under pressure. Through continuous
					evaluation, expert oversight, and strict adherence to standards, we
					ensure our clients experience not just security, but peace of mind.
				</motion.p>

				{/* Quote */}
				<motion.div
					{...scaleInProps}
					className="row-[3/4] flex max-w-142.5 flex-col gap-2 self-center justify-self-center rounded bg-neutral-800 p-8 shadow-neutral-800 shadow-xl ring ring-neutral-500 md:col-[2/4] md:row-[2/3]"
				>
					<QuoteIcon className="text-primary-light" />
					<blockquote>
						We don&apos;t just respond to risks. We anticipate and neutralize
						them <span className="text-primary-light">strategically</span> and{" "}
						<span className="text-primary-light">professionally</span>
					</blockquote>
				</motion.div>
			</div>
		</section>
	);
};
