//todo

/*
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller, FieldValues, DefaultValues } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { FieldGroup, FieldLabel, Field, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

interface AuthFormProps<T extends FieldValues> {
  formType: "SIGN_IN" | "SIGN_UP";
  schema: z.ZodType<T>;
  defaultValues: object;
  onSubmit: (data: T) => Promise<{ success: boolean }>;
}

function AuthForm({ formType, schema, defaultValues, onSubmit }: AuthFormProps) {
  const { control, reset, handleSubmit } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues,
  });

  // const onSubmit = (data: z.infer<typeof schema>) => {
  //   // Do something with the form values.
  //   console.log(data);
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup>
        {Object.keys(defaultValues).map((field) => (
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
                  autoComplete="off"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        ))}
      </FieldGroup>

      <FieldGroup>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => reset()}>
            Reset
          </Button>
          <Button type="submit">Submit</Button>
        </Field>
      </FieldGroup>
    </form>
  );
}

export default AuthForm;
*/
