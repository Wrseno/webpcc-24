import {FiveMemberCard, SectionTitle} from "@/components";
import {divisiHumas} from "@/data/data";

export default function DivHumasSection() {
  return (
    <section className='h-auto py-16 px-4' id='humas'>
      <SectionTitle useLeftHr hrWidth='w-full'>
        <h2
          className='text-2xl md:text-4xl font-bold mb-3 text-quinary'
          data-aos='fade-left'
        >
          <span className='font-bold text-primary'>DIVISI</span>
          <br />
          HUMAS
        </h2>
      </SectionTitle>
      <FiveMemberCard members={divisiHumas} />
    </section>
  );
}
