import { z } from "zod";
import { EMAIL_REGEX, PASSWORD_REGEX } from "@utils/regex";

export const loginSchema = z.object({
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Invalid email address" })
    .regex(EMAIL_REGEX, "Invalid email address"),
  password: z
    .string({ message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(
      PASSWORD_REGEX,
      "Password must include one uppercase letter, one number, and one special character"
    ),
});
