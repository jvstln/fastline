"use server";

import { redirect } from "next/navigation";
import { contactSchema, requestServiceSchema } from "@/lib/schema";

export const sendRequestServiceEmail = async (formData: FormData) => {
	"use server";
	const values = requestServiceSchema.safeParse(
		formData.entries().reduce(
			(acc, [key, value]) => {
				acc[key] = value;
				return acc;
			},
			{} as Record<string, string | File>,
		),
	);

	if (!values.success) {
		return { success: false, message: "Invalid form data submitted" };
	}

	redirect("/request-service/success");
};

export const sendContactEmail = async (formData: FormData) => {
	"use server";
	const values = contactSchema.safeParse(
		formData.entries().reduce(
			(acc, [key, value]) => {
				acc[key] = value;
				return acc;
			},
			{} as Record<string, string | File>,
		),
	);

	if (!values.success) {
		return { success: false, message: "Invalid form data submitted" };
	}

	return { success: true };
};
