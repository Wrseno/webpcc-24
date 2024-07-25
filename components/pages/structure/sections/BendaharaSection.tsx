import {SectionTitle, ThreeMemberCard} from "@/components";
import {bendahara} from "@/data/data";
import React from "react";

export default function BendaharaSection() {
  return (
    <section className='h-auto py-16 px-4' id='bendahara'>
      <SectionTitle useLeftHr useRightHr hrWidth='w-full'>
        <h2
          className='text-2xl md:text-4xl font-bold mb-3 text-quinary'
          data-aos='fade-up'
        >
          BENDAHARA
        </h2>
      </SectionTitle>

      <ThreeMemberCard members={bendahara} />
    </section>
  );
}
