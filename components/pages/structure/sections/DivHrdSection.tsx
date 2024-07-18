import {SectionTitle, SevenMemberCard} from "@/components";
import {divisiHrd} from "@/data/data";

export default function DivHrdSection() {
  return (
    <section className='h-auto py-16 px-4' id='hrd'>
      <SectionTitle
        firstTitle='hrd'
        spanTitle='divisi'
        spanColor='text-quinary'
        textColor='text-primary'
        useBr={false}
        useRightHr
        hrWidth='w-full'
      />
      <SevenMemberCard members={divisiHrd} />
    </section>
  );
}
