"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import { cn } from "@/lib/utils";

function SocialAuthForm({ className }: { className?: string }) {
  const btnClasses = "max-sm:px-3.5 sm:flex-1";

  //todo: Additional error handling after callback redirect from providers.
  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        redirectTo: ROUTES.HOME,
      });
    } catch (e) {
      console.log(e);

      toast.error("Login failed", {
        description: e instanceof Error ? e.message : "An error occurred during login",
      });
    }
  };

  return (
    <div className={cn("flex flex-wrap gap-2.5 max-sm:justify-center", className)}>
      <Button
        variant="social"
        size="lg"
        className={btnClasses}
        onClick={() => handleSignIn("github")}
      >
        <Image
          className="invert-colors"
          src="/icons/github.svg"
          width={20}
          height={20}
          alt="Github Logo"
        />
        <span className="max-sm:hidden">Login with GitHub</span>
      </Button>

      <Button
        variant="social"
        size="lg"
        className={btnClasses}
        onClick={() => handleSignIn("google")}
      >
        <Image src="/icons/google.svg" width={20} height={20} alt="Google Logo" />
        <span className="max-sm:hidden">Login with Google</span>
      </Button>
    </div>
  );
}

export default SocialAuthForm;
