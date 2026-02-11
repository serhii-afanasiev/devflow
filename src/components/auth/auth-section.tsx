import Image from "next/image";
import { ReactNode } from "react";

import SocialAuthForm from "@/components/forms/social-auth";
import {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

type AuthSectionProps = {
  children: ReactNode;
  title: string;
};

function AuthSection({ children, title }: AuthSectionProps) {
  return (
    <section className="w-[min(32.5rem,100%)]">
      <Card className="bg-light-800 dark:bg-dark-200 dark:border-dark-300 rounded-[0.625rem] border-transparent py-10 shadow-[0_29px_59px_0_rgba(0,0,0,0.16)]">
        <CardHeader className="px-8 max-sm:gap-1">
          <CardTitle>
            <h1 className="heading-h2 heading-color-primary font-bold">{title}</h1>
          </CardTitle>

          <p>to continue to DevFlow</p>

          <CardAction>
            <Image
              className="max-sm:size-8"
              src="/images/site-logo.svg"
              width={50}
              height={50}
              alt="DevFlow Logo"
              loading="eager"
            />
          </CardAction>
        </CardHeader>

        <CardContent className="px-8"> {children}</CardContent>

        <CardFooter className="px-8">
          <SocialAuthForm className="flex-1" />
        </CardFooter>
      </Card>
    </section>
  );
}

export default AuthSection;
