"use client";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { appearVariants, appearViewport } from "@/lib/motion.util";
import { MessageFastIcon } from "../icons";
import { Button } from "../ui/button";
import {
	Form,
	FormControl,
	FormItem,
	FormLabel,
	FormMessage,
	useFormFieldComponent,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export const ContactForm = () => {
	const form = useForm({
		defaultValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
	});
	const FormField = useFormFieldComponent(form.control);

	return (
		<Form {...form}>
			<motion.form
				variants={appearVariants}
				whileInView="animate"
				initial="initial"
				viewport={appearViewport}
				id={"contact-form"}
				className="mx-auto flex max-w-2xl flex-col gap-6 p-2"
			>
				<motion.div
					variants={appearVariants}
					whileInView="animate"
					initial="initial"
					viewport={appearViewport}
					className="mb-10 flex flex-col items-center gap-1 text-center"
				>
					<MessageFastIcon className="size-23 text-primary" />
					<h2 className="font-semibold text-2xl">Contact Us</h2>
					<p>
						For further enquiries or any questions, feel free to send us a
						message.
					</p>
				</motion.div>
				<div className="flex gap-6 *:flex-1 max-sm:flex-col">
					<FormField
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input placeholder="Enter your name" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder="Enter your email" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					name="subject"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Subject</FormLabel>
							<FormControl>
								<Input placeholder="Enter email subject" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Textarea placeholder="Write your message" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					className="w-full self-center sm:w-1/2"
					disabled={!form.formState.isValid}
				>
					Submit
				</Button>
			</motion.form>
		</Form>
	);
};
