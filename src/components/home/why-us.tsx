"use client";
import {
	BadgeCheck,
	ClockIcon,
	CpuIcon,
	HandshakeIcon,
	ShieldQuestionMarkIcon,
} from "lucide-react";
import { motion, useAnimate, useMotionValue } from "motion/react";
import { useEffect } from "react";
import { appearVariants, appearViewport } from "@/lib/motion.util";
import { SectionHeading } from "../hero";
import { CertifiedCardIcon, PeopleIcon, ShieldIcon } from "../icons";
import { Badge } from "../ui/badge";

const reasons = [
	{
		title: "Certified Excellence",
		description:
			"Our personnel are certified and equipped to handle a wide range of security challenges with professionalism and precision.",
		icon: CertifiedCardIcon,
	},
	{
		title: "24/7 Availaility",
		description:
			"With 24/7 monitoring and rapid response teams on standby, we ensure your security is active, reliable, and never off duty.",
		icon: ClockIcon,
	},
	{
		title: "Advanced Technology",
		description:
			"We deploy modern surveillance, access control, and emergency response techs to keep your people and property secure—24/7.",
		icon: CpuIcon,
	},

	{
		title: "Tailored Solutions",
		description:
			"We provide tailored security strategies aligned with your industry's requirements and risk profile for effective protection.",
		icon: HandshakeIcon,
	},
	{
		title: "Expert Team",
		description:
			"Professionally trained and field-tested security experts drawn from military, law enforcement, and corporate security backgrounds.",
		icon: PeopleIcon,
	},
	{
		title: "Proven Results",
		description:
			"Trusted by top brands and institutions, we consistently deliver safe, compliant, and secure environments across sectors.",
		icon: BadgeCheck,
	},
];

export const HomepageWhyUs = () => {
	return (
		<section className="relative overflow-hidden bg-neutral-900 text-white">
			<Spinner />
			<div className="container relative z-10 mx-auto">
				<SectionHeading
					title={
						<>
							Providing <span className="text-primary-light">High-Value</span>
							Security <span className="text-primary-light">Solutions</span>
						</>
					}
					subtitle="At Fastline, we're more than service providers, we're
						trusted partners known for delivering reliable protection, tailored
						strategies, and a firm commitment to safer, more resilient
						organizations across Nigeria."
					badge={
						<Badge variant="secondary">
							<ShieldQuestionMarkIcon />
							WHY CHOOSE FASTLINE
						</Badge>
					}
					classNames={{ subtitle: "opacity-60!" }}
				/>

				<div className="mt-20 grid justify-items-center gap-25 md:grid-cols-2">
					{reasons.map((reason, i) => {
						const { title, description, icon: Icon } = reason;
						return (
							<motion.div
								variants={appearVariants}
								transition={{ delay: 0.1 * i }}
								whileInView="animate"
								initial="initial"
								viewport={appearViewport}
								key={title}
								className="flex items-start gap-4 md:max-w-87.5 lg:max-w-111.75"
							>
								<div className="flex-0 rounded bg-white/5 p-4">
									<Icon className="size-6" />
								</div>
								<div>
									<h3 className="mb-2 font-semibold text-lg">{title}</h3>
									<p>{description}</p>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

const Spinner = () => {
	const rotation = useMotionValue(0); // current rotation
	const [scope, animate] = useAnimate();

	useEffect(() => {
		const loopSpin = () => {
			animate(
				rotation,
				rotation.get() + 360, // one full spin
				{
					duration: 100, // base speed (slower = heavier)
					ease: "linear",
					onComplete: loopSpin, // keep looping
				},
			);
		};
		loopSpin();

		// 🖱 Scroll "kicks" (extra velocity)
		let lastScrollY = window.scrollY;

		const handleScroll = () => {
			const delta = window.scrollY - lastScrollY;
			lastScrollY = window.scrollY;

			// Add scroll delta as extra spin velocity
			// rotation.set(rotation.get() + delta * 0.03); // multiplier = sensitivity

			// After user scroll, start decay (like friction)
			animate(
				rotation,
				rotation.get() + delta * 100, // push forward
				{
					type: "decay",
					velocity: delta * 5, // initial spin speed
					power: 1.4, // how far it coasts
					timeConstant: 600, // higher = slower stop
					restDelta: 0.5,
				},
			);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [animate, rotation]);

	return (
		<div ref={scope}>
			<ShieldIcon className="translate-1/2 pointer-events-none absolute right-1/2 bottom-1/2 z-0 grid size-88 place-items-center p-8 opacity-30 blur-[2.5px]" />
			<motion.div
				style={{ rotate: rotation }}
				className="translate-1/2 pointer-events-none absolute right-1/2 bottom-1/2 z-0 grid size-90 place-items-center rounded-full border-10 border-white border-dashed opacity-30 blur-[2.5px]"
			/>
		</div>
	);
};
