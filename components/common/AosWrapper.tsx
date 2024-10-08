"use client";

import {useEffect, ReactNode} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface AOSWrapperProps {
  children: ReactNode;
}

export default function AOSWrapper({children}: AOSWrapperProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  return <>{children}</>;
}
