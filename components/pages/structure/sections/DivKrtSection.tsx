import {FiveMemberCard, SectionTitle} from "@/components";
import {divisiKrt} from "@/data/data";

export default function DivKrtSection() {
  return (
    <section className='h-auto py-16 px-4' id='krt'>
      <SectionTitle useRightHr hrWidth='w-full'>
        <h2
          className='text-2xl md:text-4xl font-bold mb-3 text-primary'
          data-aos='fade-right'
        >
          <span className='font-bold text-quinary'>DIVISI</span>
          <br />
          KRT
        </h2>
      </SectionTitle>
      <FiveMemberCard members={divisiKrt} />
    </section>
  );
}
