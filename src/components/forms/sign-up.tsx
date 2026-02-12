"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { FieldGroup, Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import ROUTES from "@/constants/routes";
import { SignUpSchema } from "@/lib/validations";

const defaultValues = {
  username: "",
  email: "",
  password: "",
} satisfies z.infer<typeof SignUpSchema>;

type FormFields = keyof typeof defaultValues;
const fields = Object.keys(defaultValues) as FormFields[];

function SignUp() {
  const { control, handleSubmit, formState } = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data: z.infer<typeof SignUpSchema>) => {
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
                    type={field.name === "username" ? "text" : field.name}
                    required
                  />

                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
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
        Already have an account?{" "}
        <Link href={ROUTES.SIGN_IN} className="styled-link font-semibold hover:underline">
          Sign in
        </Link>
      </p>
    </>
  );
}

export default SignUp;
