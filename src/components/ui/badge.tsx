"use client";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/utils";

const baseClassName = cn(
	"inline-flex w-fit shrink-0 items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-sm border font-medium text-sm uppercase transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none",
	// Sizing
	"h-9 px-6 py-2 [&>svg]:size-5",
);

const badgeVariants = cva(baseClassName, {
	variants: {
		variant: {
			"primary-filled":
				"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
			primary:
				"border-transparent bg-primary/10 text-primary [a&]:hover:bg-primary/5",
			secondary:
				"border-transparent bg-white/10 text-white backdrop-blur-sm [a&]:hover:bg-white/15",
			destructive:
				"border-transparent bg-destructive text-white focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/90",
			outline:
				"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
		},
	},
	defaultVariants: {
		variant: "primary",
	},
});

function Badge({
	className,
	variant,
	asChild = false,
	...props
}: React.ComponentProps<"span"> &
	VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
	const Comp = asChild ? Slot : "span";

	return (
		<Comp
			data-slot="badge"
			className={cn(badgeVariants({ variant }), className)}
			{...props}
		/>
	);
}

export { Badge, badgeVariants };
