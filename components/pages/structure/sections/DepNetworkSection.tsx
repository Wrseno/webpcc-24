import {FiveMemberCard, SectionTitle} from "@/components";
import {departemenNetwork} from "@/data/data";
import React from "react";

export default function DepNetworkSection() {
  return (
    <section className='h-auto py-16 px-4' id='network'>
      <SectionTitle
        firstTitle='network'
        spanTitle='departemen'
        textColor='text-quinary'
        spanColor='text-primary'
        useBr={false}
        useRightHr
        hrWidth='w-full'
      />
      <FiveMemberCard members={departemenNetwork} />
    </section>
  );
}
