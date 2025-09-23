"use server";

import { redirect } from "next/navigation";
import { requestServiceSchema } from "@/lib/schema";

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
