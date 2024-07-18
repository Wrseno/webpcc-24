import {SectionTitle, ThreeMemberCard} from "@/components";
import {bendahara} from "@/data/data";
import React from "react";

export default function BendaharaSection() {
  return (
    <section className='h-auto py-16 px-4' id='bendahara'>
      <SectionTitle
        firstTitle='bendahara'
        spanTitle=''
        textColor='text-quinary'
        useBr={false}
        useLeftHr
        useRightHr
        hrWidth='w-full'
      />

      <ThreeMemberCard members={bendahara} />
    </section>
  );
}
