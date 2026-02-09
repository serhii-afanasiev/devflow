import { ReactNode } from "react";

import Navbar from "@/components/navigation/navbar/navbar";

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default RootLayout;
