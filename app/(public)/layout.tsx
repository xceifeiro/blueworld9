import type React from "react";
import { AOSInit } from "@/components/AOSInit";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AOSInit />
      {children}
    </div>
  );
}
