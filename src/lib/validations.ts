import { z } from "zod";

export const SignInSchema = z.object({
  email: z
    .email({ error: "Please provide a valid email address." })
    .min(3, { error: "Email  is required." }),
  password: z.string().min(1, { error: "Password is required." }),
});

export const SignUpSchema = z.object({
  username: z
    .string()
    .min(2, { error: "Username must be at least 3 characters long." })
    .max(30, { error: "Username cannot exceed 30 characters." })
    .regex(/^[a-zA-Z0-9_]+$/, {
      error: "Username can only contain letters, numbers, and underscores.",
    }),

  email: z
    .email({ error: "Please provide a valid email address" })
    .min(3, { error: "Email  is required" }),
  password: z
    .string()
    .min(6, { error: "Password must be at least 6 characters long." })
    .max(100, { error: "Password cannot exceed 100 characters." })
    .regex(/[A-Z]/, {
      error: "Password must contain at least one uppercase letter.",
    })
    .regex(/[a-z]/, {
      error: "Password must contain at least one lowercase letter.",
    })
    .regex(/[0-9]/, { error: "Password must contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      error: "Password must contain at least one special character.",
    }),
});
