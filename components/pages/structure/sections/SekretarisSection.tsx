import {SectionTitle, ThreeMemberCard} from "@/components";
import {sekretaris} from "@/data/data";

export default function SekretarisSection() {
  return (
    <section className='h-auto py-16 px-4' id='sekretaris'>
      <SectionTitle useLeftHr hrWidth='w-full'>
        <h2
          className='text-2xl md:text-4xl font-bold mb-3 text-quinary'
          data-aos='fade-left'
        >
          SEKRETARIS
        </h2>
      </SectionTitle>
      <ThreeMemberCard members={sekretaris} />
    </section>
  );
}
