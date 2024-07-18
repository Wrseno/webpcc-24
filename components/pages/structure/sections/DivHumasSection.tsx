import {FiveMemberCard, SectionTitle} from "@/components";
import {divisiHumas} from "@/data/data";

export default function DivHumasSection() {
  return (
    <section className='h-auto py-16 px-4' id='humas'>
      <SectionTitle
        firstTitle='humas'
        spanTitle='divisi'
        textColor='text-quinary'
        spanColor='text-primary'
        useBr={false}
        useLeftHr
        hrWidth='w-full'
      />
      <FiveMemberCard members={divisiHumas} />
    </section>
  );
}
