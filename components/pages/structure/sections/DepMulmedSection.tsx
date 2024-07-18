import {FiveMemberCard, SectionTitle} from "@/components";
import {departemenMultimedia} from "@/data/data";

export default function DepMulmedSection() {
  return (
    <section className='h-auto py-16 px-4' id='multimedia'>
      <SectionTitle
        firstTitle='multimedia'
        spanTitle='departemen'
        textColor='text-quinary'
        spanColor='text-primary'
        useBr={false}
        useLeftHr
        hrWidth='w-full'
      />
      <FiveMemberCard members={departemenMultimedia} />
    </section>
  );
}
