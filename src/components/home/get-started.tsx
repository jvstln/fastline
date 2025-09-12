"use client";
import { RocketIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { MessageFastIcon } from "../icons";
import { Badge } from "../ui/badge";
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

export const HomepageGetStarted = () => {
	return (
		<section className="container mx-auto px-4 py-12">
			<div className="flex flex-col items-center gap-2 text-center">
				<Badge className="uppercase">
					<RocketIcon />
					Ready to get started?
				</Badge>
				<h2 className="flex flex-wrap justify-center gap-2 font-bold text-3xl">
					Secure your Business <span className="text-primary">Today</span>
				</h2>
				<p className="max-w-[65ch] text-muted-foreground">
					Don&apos;t wait for security incidents. Our experts will assess risks
					and design a tailored protection plan. Contact us now for expert
					guidance.
				</p>
				<Button className="mx-auto my-10">Request service</Button>
			</div>
			<ContactForm />
		</section>
	);
};

const ContactForm = () => {
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
			<form className="mx-auto flex max-w-lg flex-col gap-6">
				<div className="flex flex-col items-center text-center">
					<MessageFastIcon className="size-24 text-primary" />
					<h2 className="font-semibold text-2xl">Contact Us</h2>
					<p>
						For further enquiries or any questions, feel free to send us a
						message.
					</p>
				</div>
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
			</form>
		</Form>
	);
};
