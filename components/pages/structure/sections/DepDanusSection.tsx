import {FiveMemberCard, SectionTitle} from "@/components";
import {departemenDanus} from "@/data/data";
import React from "react";

export default function DepDanusSection() {
  return (
    <section className='h-auto py-16 px-4' id='danus'>
      <SectionTitle
        firstTitle='danus'
        spanTitle='departemen'
        textColor='text-quinary'
        spanColor='text-primary'
        useBr={false}
        useLeftHr
        hrWidth='w-full'
      />
      <FiveMemberCard members={departemenDanus} />
    </section>
  );
}
