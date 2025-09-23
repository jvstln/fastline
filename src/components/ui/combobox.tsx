"use client";

import { ChevronsUpDownIcon } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { FormControl } from "./form";
import { inputColorClassName, inputSizeClassName } from "./input";

type ComboboxProps = {
	options: string[];
	placeholder?: string;
	formControl?: boolean;
	value?: string;
	onValueChange?: (value: string) => void;
};

export function Combobox({
	options: controlledOptions,
	placeholder,
	formControl,
	value: controlledValue,
	onValueChange,
}: ComboboxProps) {
	const [open, setOpen] = React.useState(false);
	const [_value, _setValue] = React.useState("");
	const [triggerWidth, setTriggerWidth] = React.useState<number>(0);

	const triggerRef = React.useRef<HTMLButtonElement>(null);

	React.useEffect(() => {
		if (!triggerRef.current) return;
		setTriggerWidth(triggerRef.current.clientWidth);

		const triggerWidthObserver = new ResizeObserver(([entry]) => {
			if (!entry || !(entry.target instanceof HTMLElement)) return;

			setTriggerWidth(entry.target.offsetWidth);
		});

		triggerWidthObserver.observe(triggerRef.current);
		return () => triggerWidthObserver.disconnect();
	});

	const value = controlledValue || _value;
	const setValue = (value: string) => {
		onValueChange?.(value);
		_setValue(value);
	};

	const options = [...controlledOptions];
	if (value) {
		options.push(value);
	}

	const trigger = (
		<PopoverTrigger asChild>
			<Button
				variant="outline"
				role="combobox"
				aria-expanded={open}
				className={cn(
					"w-full justify-between gap-2",
					inputSizeClassName,
					inputColorClassName,
					!value && "text-current/50",
				)}
				ref={triggerRef}
			>
				{value || placeholder}
				<ChevronsUpDownIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
			</Button>
		</PopoverTrigger>
	);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			{formControl ? <FormControl>{trigger}</FormControl> : trigger}
			<PopoverContent className="p-0" style={{ width: triggerWidth || "auto" }}>
				<Command>
					<CommandInput
						placeholder="Search ..."
						value={value}
						onValueChange={(value) => {
							setValue(value);
						}}
					/>
					<CommandList>
						<CommandGroup>
							{options.map((option) => (
								<CommandItem
									key={option}
									value={option}
									onSelect={(value) => {
										setValue(value);
										setOpen(false);
									}}
								>
									{option}
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
