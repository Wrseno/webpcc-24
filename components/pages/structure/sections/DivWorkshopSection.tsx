import {SectionTitle, ThreeMemberCard} from "@/components";
import {divisiWorkshop} from "@/data/data";

export default function DivWorkshopSection() {
  return (
    <section className='h-auto py-16 px-4' id='workshop'>
      <SectionTitle useLeftHr hrWidth='w-full'>
        <h2
          className='text-2xl md:text-4xl font-bold mb-3 text-quinary'
          data-aos='fade-left'
        >
          <span className='font-bold text-primary'>DIVISI</span>
          <br />
          WORKSHOP
        </h2>
      </SectionTitle>

      <ThreeMemberCard members={divisiWorkshop} />
    </section>
  );
}
