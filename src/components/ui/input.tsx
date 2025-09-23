import type * as React from "react";

import { cn } from "@/lib/utils";

export const inputSizeClassName = cn(
	"h-15 rounded p-4 placeholder:text-[15px] data-[placeholder]:text-[15px]",
);
export const inputColorClassName = cn(
	"bg-[#073DC5]/5 placeholder:text-muted-foreground hover:bg-[#073DC5]/5 hover:text-foreground hover:placeholder:text-muted-foreground data-[placeholder]:text-muted-foreground data-[placeholder]:hover:text-muted-foreground",
);

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
	return (
		<input
			type={type}
			data-slot="input"
			className={cn(
				"flex w-full min-w-0 rounded-md border border-input bg-transparent text-base shadow-xs outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30",
				"focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
				"aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
				inputSizeClassName,
				inputColorClassName,
				className,
			)}
			{...props}
		/>
	);
}

export { Input };
