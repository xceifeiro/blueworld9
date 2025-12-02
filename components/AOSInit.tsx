"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 800,    // duração da animação
      once: true,       // anima apenas uma vez
      easing: "ease-out",
      offset: 50,       // distância antes de ativar
    });
  }, []);

  return null;
}
