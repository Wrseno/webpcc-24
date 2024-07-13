"use client";

import {useEffect} from "react";

import {About, Blog, Event, Gallery, Hero, Structure} from "@/components";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      disable: function () {
        var maxWidth = 800;
        return window.innerWidth < maxWidth;
      },
    });
    AOS.refresh();
  }, []);

  return (
    <main className='container max-w-screen-2xl mx-auto flex flex-col gap-y-32'>
      <Hero />
      <About />
      <Event />
      <Gallery />
      <Structure />
      <Blog />
    </main>
  );
}
