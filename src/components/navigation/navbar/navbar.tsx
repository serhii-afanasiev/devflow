import Link from "next/link";

import AppLogo from "@/components/navigation/navbar/app-logo";
import ThemeChanger from "@/components/navigation/navbar/theme-changer";

function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <nav className="flex-between bg-navbar shadow-light-200 border-light-border gap-5 border-b max-sm:p-2 sm:py-5.5 sm:pr-12.5 sm:pl-7.5 dark:shadow-none">
        <Link href="/" className="flex-between gap-1 max-sm:p-2">
          <AppLogo />
        </Link>

        <div>Global Search</div>

        <ThemeChanger />
      </nav>
    </header>
  );
}

export default Navbar;
