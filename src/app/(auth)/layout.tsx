import Image from "next/image";
import { ReactNode } from "react";

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex-center relative flex min-h-dvh px-12 py-[min(6.25rem,10%)]">
      <figure className="absolute top-[50%] left-[50%] z-[-1] w-[min(calc(100%-2rem),1094px)] translate-[-50%]">
        <Image
          className="w-full object-contain"
          src="/images/auth-light.webp"
          width={1094}
          height={813}
          loading="eager"
          alt=""
        />
      </figure>
      <section className="bg-light-800 dark:bg-dark-200 dark:border-dark-300 shadow-[0 29px 59px 0 rgba(0, 0, 0, 0.16)] rounded-[0.625rem] border border-transparent px-8 py-10">
        {children}
      </section>
    </main>
  );
}

export default AuthLayout;
