import {SectionTitle, ThreeMemberCard} from "@/components";
import {divisiRedaksi} from "@/data/data";
import React from "react";

export default function DivRedaksiSection() {
  return (
    <section className='h-auto py-16 px-4' id='redaksi'>
      <SectionTitle
        firstTitle='redaksi'
        spanTitle='divisi'
        textColor='text-primary'
        spanColor='text-quinary'
        useBr={false}
        useLeftHr
        hrWidth='w-full'
      />

      <ThreeMemberCard members={divisiRedaksi} />
    </section>
  );
}
