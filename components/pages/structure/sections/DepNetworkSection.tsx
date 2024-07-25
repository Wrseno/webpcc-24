import {FiveMemberCard, SectionTitle} from "@/components";
import {departemenNetwork} from "@/data/data";
import React from "react";

export default function DepNetworkSection() {
  return (
    <section className='h-auto py-16 px-4' id='network'>
      <SectionTitle useRightHr hrWidth='w-full'>
        <h2
          className='text-2xl md:text-4xl font-bold mb-3 text-quinary'
          data-aos='fade-right'
        >
          <span className='font-bold text-primary'>DEPARTEMEN</span>
          <br />
          NETWORK
        </h2>
      </SectionTitle>
      <FiveMemberCard members={departemenNetwork} />
    </section>
  );
}
