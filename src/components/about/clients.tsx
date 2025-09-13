"use client";
import Image from "next/image";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { clients } from "@/lib/data";
import { DoubleCogIcon } from "../icons";
import { Badge } from "../ui/badge";

export const AboutClients = () => {
	const isTablet = useBreakpoint("max-md");

	return (
		<section className="px-4 py-12">
			<div className="container mx-auto">
				<div className="mb-8 flex flex-col items-center gap-2 text-center">
					<Badge className="uppercase">
						<DoubleCogIcon />
						Our Clients
					</Badge>
					<h2 className="font-bold text-3xl">
						Trusted by <span className="text-primary">leaders</span> across{" "}
						<span className="text-primary">industries</span>.
					</h2>
					<p className="max-w-[65ch] text-muted-foreground">
						Fastline Integrated Services is trusted by top organizations across
						key sectors, including oil & gas, healthcare and manufacturing.
					</p>
				</div>

				<div className="flex flex-col gap-6">
					{clients.map((client, i) => {
						const image = (
							<Image
								src={client.image}
								alt={client.title}
								className="mx-auto h-auto w-full object-contain max-md:size-80"
							/>
						);
						const content = (
							<div className="flex flex-col items-start gap-4 text-justify lg:col-span-2">
								<h3 className="text-left font-semibold text-2xl">
									{client.title}
								</h3>
								<p>{client.description}</p>
							</div>
						);

						const shouldFlip = i % 2 !== 0 && !isTablet;

						return (
							<div
								key={client.title}
								className="grid items-center gap-6 md:grid-cols-2 lg:grid-cols-3"
							>
								{shouldFlip ? content : image}
								{shouldFlip ? image : content}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
