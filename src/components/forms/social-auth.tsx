import Image from "next/image";

import { Button } from "@/components/ui/button";

function SocialAuthForm() {
  const btnClasses = "max-sm:px-3.5 sm:flex-1";

  return (
    <div className="mt-9 flex flex-wrap gap-2.5 max-sm:justify-center">
      <Button variant="social" size="lg" className={btnClasses}>
        <Image
          className="invert-colors"
          src="/icons/github.svg"
          width={20}
          height={20}
          alt="Github Logo"
        />
        <span className="max-sm:hidden">Login with GitHub</span>
      </Button>

      <Button variant="social" size="lg" className={btnClasses}>
        <Image src="/icons/google.svg" width={20} height={20} alt="Google Logo" />
        <span className="max-sm:hidden">Login with GitHub</span>
      </Button>
    </div>
  );
}

export default SocialAuthForm;
