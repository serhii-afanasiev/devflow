import { ReactNode } from "react";

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex-center relative flex min-h-dvh py-[min(6.25rem,10%)] max-sm:px-4 sm:px-12">
      <figure className="absolute top-[50%] left-[50%] z-[-1] aspect-[1.35/1] max-h-[calc(100%-12.5rem)] w-[min(calc(100%-2rem),1094px)] translate-[-50%] bg-[url(/images/auth-light.webp)] bg-contain bg-center bg-no-repeat max-sm:hidden dark:bg-[url(/images/auth-dark.webp)]"></figure>

      {children}
    </main>
  );
}

export default AuthLayout;
