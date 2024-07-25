import {FiveMemberCard, SectionTitle} from "@/components";
import {departemenDanus} from "@/data/data";
import React from "react";

export default function DepDanusSection() {
  return (
    <section className='h-auto py-16 px-4' id='danus'>
      <SectionTitle useLeftHr hrWidth='w-full'>
        <h2
          className='text-2xl md:text-4xl font-bold mb-3 text-quinary'
          data-aos='fade-left'
        >
          <span className='font-bold text-primary'>DEPARTEMEN</span>
          <br />
          DANUS
        </h2>
      </SectionTitle>
      <FiveMemberCard members={departemenDanus} />
    </section>
  );
}
