import { cn } from "@/lib/utils";
import { Header } from "./header";
import { ShieldIcon } from "./icons";
import { Badge } from "./ui/badge";

type PageHeroProps = {
	image: string;
	title?: string;
	classNames?: Record<"root" | "content" | "title" | "badge", string>;
};

export const PageHero = (props: PageHeroProps) => {
	return (
		<div
			className={cn(
				"flex min-h-[50vh] flex-col text-white",
				props.classNames?.root,
			)}
			style={{
				background: `linear-gradient(#0008, #0008), url('${props.image || "/images/homepage-hero.png"}') no-repeat center center/cover`,
			}}
		>
			<Header />
			{/* Hero content */}
			<div className="my-auto p-4">
				<div
					className={cn(
						"container mx-auto flex basis-1/2 flex-col gap-4",
						props.classNames?.content,
					)}
				>
					<Badge variant="secondary" className={cn(props.classNames?.badge)}>
						<ShieldIcon />
						FASTLINE INTEGRATED SERVICES LTD
					</Badge>
					{props.title && (
						<h1
							className={cn(
								"font-bold text-4xl md:text-5xl lg:text-6xl",
								props.classNames?.title,
							)}
						>
							{props.title}
						</h1>
					)}
				</div>
			</div>
		</div>
	);
};
