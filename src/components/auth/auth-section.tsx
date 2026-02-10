import Image from "next/image";
import { ReactNode } from "react";

import SocialAuthForm from "@/components/forms/social-auth";

type AuthSectionProps = {
  children: ReactNode;
  title: string;
};

function AuthSection({ children, title }: AuthSectionProps) {
  return (
    <section className="bg-light-800 dark:bg-dark-200 dark:border-dark-300 shadow-[0 29px 59px 0 rgba(0, 0, 0, 0.16)] w-[min(32.5rem,100%)] rounded-[0.625rem] border border-transparent px-8 py-10">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="heading-h2 heading-color-primary font-bold max-sm:mb-1 sm:mb-2.5">
            {title}
          </h1>
          <p className="">to continue to DevFlow</p>
        </div>

        <Image
          className="max-sm:size-8"
          src="/images/site-logo.svg"
          width={50}
          height={50}
          alt="DevFlow Logo"
          loading="eager"
        />
      </div>
      {children}

      <SocialAuthForm />
    </section>
  );
}

export default AuthSection;
