import {FiveMemberCard, SectionTitle} from "@/components";
import {divisiKrt} from "@/data/data";

export default function DivKrtSection() {
  return (
    <section className='h-auto py-16 px-4' id='krt'>
      <SectionTitle
        firstTitle='krt'
        spanTitle='divisi'
        textColor='text-primary'
        spanColor='text-quinary'
        useBr={false}
        useRightHr
        hrWidth='w-full'
      />
      <FiveMemberCard members={divisiKrt} />
    </section>
  );
}
