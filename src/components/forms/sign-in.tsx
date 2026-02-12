"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { FieldGroup, Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import ROUTES from "@/constants/routes";
import { SignInSchema } from "@/lib/validations";

const defaultValues = {
  email: "",
  password: "",
} satisfies z.infer<typeof SignInSchema>;

type FormFields = keyof typeof defaultValues;
const fields = Object.keys(defaultValues) as FormFields[];

function SignIn() {
  const { control, handleSubmit, formState } = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data: z.infer<typeof SignInSchema>) => {
    console.log(data);

    //todo: Authenticate User
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldGroup>
          {fields.map((field) => (
            <Controller
              key={field}
              name={field}
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name} className="capitalize">
                    {field.name === "email" ? "Email address" : field.name}
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    type={field.name}
                    required
                  />

                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}

                  {field.name === "password" && (
                    <Link
                      href="#"
                      className="text-link ml-auto !w-auto text-right text-sm font-medium transition-opacity hover:opacity-75"
                    >
                      Forget password?
                    </Link>
                  )}
                </Field>
              )}
            />
          ))}
        </FieldGroup>

        <FieldGroup className="mt-6">
          <Field orientation="horizontal">
            <Button type="submit" className="w-full font-medium" disabled={formState.isSubmitting}>
              {formState.isSubmitting ? "Submitting..." : "Continue"}
            </Button>
          </Field>
        </FieldGroup>
      </form>

      <p className="mt-6 text-center">
        Don’t have an account?{" "}
        <Link href={ROUTES.SIGN_UP} className="styled-link font-semibold hover:underline">
          Sign up
        </Link>
      </p>
    </>
  );
}

export default SignIn;
