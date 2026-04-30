import z from "zod/v3";

export const formSchema = z.object({
    name: z
        .string()
        .min(1, "Name is required re")
        .min(3, "Min length is 3 re")
        .max(30, "Max length is 30 re"),

    password: z
        .string()
        .min(1, "Password is required re")
        .min(8, "Min length is 8 re"),

    email: z
        .string()
        .min(1, "Email is required re")
        .email("Invalid email re"),

    mobile: z
        .string()
        .min(1, "Mobile is required re")
        .regex(/^[0-9]+$/, "Only numbers allowed re")
        .length(10, "Must be 10 digits re"),
}).refine((data) => data.email.endsWith('gmail.com'), {
    message: "Only Gmail allowed",
    path: ['email']
})