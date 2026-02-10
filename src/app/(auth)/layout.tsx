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

      {children}
    </main>
  );
}

export default AuthLayout;
