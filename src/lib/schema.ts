import z from "zod";

const formatPath = (path: PropertyKey[] | undefined) => {
	if (!path) return "Field";

	return path
		.map((p) => {
			return String(p).replace(
				/^.|(?<=_).|(?<=[a-z])[A-Z]/g,
				(match) => ` ${match.toUpperCase()}`,
			);
		})
		.join(".");
};

z.config({
	customError: (iss) => {
		if (iss.origin === "string" && typeof iss.input === "string") {
			if (iss.code === "too_small" && iss.input.length < 1) {
				return `${formatPath(iss.path)} is required`;
			}
			if (iss.code === "too_small") {
				return `${formatPath(iss.path)} must be at least ${
					iss.minimum
				} characters long`;
			}
			if (iss.code === "too_big") {
				return `${formatPath(iss.path)} must be less than ${
					iss.maximum
				} characters long`;
			}
		}
	},
});

export const contactSchema = z.object({
	name: z.string().min(2).max(30),
	email: z.email(),
	subject: z.string().min(2).max(50),
	message: z.string().min(2).max(250),
});

export const requestServiceSchema = z.object({
	name: z.string().min(2).max(30),
	company: z.preprocess((value) => value || undefined, z.string().min(2).max(30).optional()),
	email: z.email(),
	phone: z.preprocess((value) => value || undefined, z.string().length(11).optional()),
	sector: z.preprocess((value) => value || undefined, z.string().min(2).max(30).optional()),
	service: z.string().min(2).max(30),
	location: z.string().min(2).max(30),
	projectDetails: z.string().min(2).max(30),
	preferredContactMethod: z.string().min(2).max(30),
});

export type RequestService = z.infer<typeof requestServiceSchema>;
export type Contact = z.infer<typeof contactSchema>;
