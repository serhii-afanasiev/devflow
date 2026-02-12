import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground w-full min-w-0 rounded-sm border   text-base font-semibold shadow-xs transition-[color,box-shadow] outline-none sm:px-6 sm:py-4 max-sm:py-2 max-sm:px-4 file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive caret-primary",
  {
    variants: {
      size: {
        default: "sm:h-12 max-sm:h-10",
      },
      variant: {
        default: "bg-light-900 border-input dark:bg-dark-300",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
);

function Input({
  size,
  className,
  type,
  ...props
}: React.ComponentProps<"input"> & VariantProps<typeof inputVariants>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants({ size }), className)}
      {...props}
    />
  );
}

export { Input };
