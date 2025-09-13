import { QuoteIcon } from "lucide-react";
import Image from "next/image";
import approachImage1 from "@/public/images/approach-1.png";
import approachImage2 from "@/public/images/approach-2.png";
import { Badge } from "../ui/badge";

export const AboutApproach = () => {
	return (
		<section className="bg-black px-4 py-12 text-white">
			<div className="mb-12 flex flex-col items-center gap-2">
				<Badge variant="secondary" className="uppercase">
					Our Approach
				</Badge>
				<h2 className="text-center font-bold text-3xl">
					Tailored strategies. Proven methods. Reliable outcomes
				</h2>
			</div>

			<div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-3">
				<p className="row-[1/2] text-center md:col-[1/3] md:row-[1/2] md:text-justify">
					At Fastline, we believe effective security is never one-size-fits-all.
					That&apos;s why our approach is rooted in careful assessment,
					customized planning, and operational excellence. We start by
					understanding your unique risks, facility dynamics, and compliance
					requirements. From there, we design tailored security and safety
					solutions, from trained personnel deployment to risk mitigation
					strategies—aligned with your industry and environment.
				</p>
				<Image
					src={approachImage1}
					className="row-[2/3] size-100 justify-self-center bg-neutral-800 object-contain md:col-[3/5] md:row-[1/3] md:justify-self-end"
					alt="Approach"
				/>
				<Image
					src={approachImage2}
					className="row-[5/6] size-100 justify-self-center bg-neutral-800 object-contain md:col-[1/3] md:row-[2/4] md:justify-self-start"
					alt="Approach"
				/>
				<p className="row-[4/5] text-center md:col-[3/5] md:row-[3/4] md:text-justify">
					Our team works proactively not reactively, anticipating threats,
					identifying vulnerabilities, and maintaining constant situational
					awareness. Every officer is trained to act with discipline,
					professionalism, and clarity under pressure. Through continuous
					evaluation, expert oversight, and strict adherence to standards, we
					ensure our clients experience not just security, but peace of mind.
				</p>

				{/* Quote */}
				<div className="row-[3/4] flex flex-col gap-2 self-center rounded bg-neutral-800 p-4 shadow-neutral-800 shadow-xl ring ring-neutral-500 md:col-[2/4] md:row-[2/3]">
					<QuoteIcon className="text-primary" />
					<blockquote>
						We don&apos;t just respond to risks. We anticipate and neutralize
						them <span className="text-primary">strategically</span> and{" "}
						<span className="text-primary">professionally</span>
					</blockquote>
				</div>
			</div>
		</section>
	);
};
