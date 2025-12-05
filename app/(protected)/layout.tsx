import type React from "react";
import { AOSInit } from "@/components/AOSInit";
import { AnimatedBackground } from "@/components/animated-background";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <AOSInit />
      {children}
    </div>
  );
}
