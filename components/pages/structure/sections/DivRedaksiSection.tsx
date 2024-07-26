import {SectionTitle, ThreeMemberCard} from "@/components";
import {divisiRedaksi} from "@/data/data";
import React from "react";

export default function DivRedaksiSection() {
  return (
    <section className='h-auto py-16 px-4' id='redaksi'>
      <SectionTitle useLeftHr hrWidth='w-full'>
        <h2
          className='text-2xl md:text-4xl font-bold mb-3 text-primary'
          data-aos='fade-left'
        >
          <span className='font-bold text-quinary'>DIVISI</span>
          <br />
          REDAKSI
        </h2>
      </SectionTitle>

      <ThreeMemberCard members={divisiRedaksi} />
    </section>
  );
}
