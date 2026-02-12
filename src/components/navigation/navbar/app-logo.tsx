import Image from "next/image";

export default function AppLogo() {
  return (
    <>
      <Image
        className="max-sm:size-5"
        src="/images/site-logo.svg"
        alt="DevOverflow Logo"
        width={30}
        height={30}
        loading="eager"
      />
      <p className="heading-h2 max-sm:hidden">
        <span className="text-dark-100 dark:text-light-900">Dev</span>
        <span className="text-primary font-medium">Overflow</span>
      </p>
    </>
  );
}
