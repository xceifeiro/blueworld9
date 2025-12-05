import type React from "react"
import { AOSInit } from "@/components/AOSInit"
import { GlassmorphismNav } from "@/components/header"

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <GlassmorphismNav />
      <AOSInit />
      {children}
    </div>
  );
}
