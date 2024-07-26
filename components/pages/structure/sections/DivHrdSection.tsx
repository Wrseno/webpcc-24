import {SectionTitle, SevenMemberCard} from "@/components";
import {divisiHrd} from "@/data/data";

export default function DivHrdSection() {
  return (
    <section className='h-auto py-16 px-4' id='hrd'>
      <SectionTitle useRightHr hrWidth='w-full'>
        <h2
          className='text-2xl md:text-4xl font-bold mb-3 text-primary'
          data-aos='fade-right'
        >
          <span className='font-bold text-quinary'>DIVISI</span>
          <br />
          HRD
        </h2>
      </SectionTitle>
      <SevenMemberCard members={divisiHrd} />
    </section>
  );
}
