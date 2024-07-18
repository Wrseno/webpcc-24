import {SectionTitle, ThreeMemberCard} from "@/components";
import {sekretaris} from "@/data/data";

export default function SekretarisSection() {
  return (
    <section className='h-auto py-16 px-4' id='sekretaris'>
      <SectionTitle
        firstTitle='Sekretaris'
        spanTitle=''
        textColor='text-quinary'
        useBr={false}
        useLeftHr
        hrWidth='w-full'
      />

      <ThreeMemberCard members={sekretaris} />
    </section>
  );
}
