import {FiveMemberCard, SectionTitle} from "@/components";
import {departemenMultimedia} from "@/data/data";

export default function DepMulmedSection() {
  return (
    <section className='h-auto py-16 px-4' id='multimedia'>
      <SectionTitle useLeftHr hrWidth='w-full'>
        <h2
          className='text-2xl md:text-4xl font-bold mb-3 text-quinary'
          data-aos='fade-left'
        >
          <span className='font-bold text-primary'>DEPARTEMEN</span>
          <br />
          MULTIMEDIA
        </h2>
      </SectionTitle>

      <FiveMemberCard members={departemenMultimedia} />
    </section>
  );
}
