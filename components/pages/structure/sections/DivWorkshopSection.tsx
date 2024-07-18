import {SectionTitle, ThreeMemberCard} from "@/components";
import {divisiWorkshop} from "@/data/data";

export default function DivWorkshopSection() {
  return (
    <section className='h-auto py-16 px-4' id='workshop'>
      <SectionTitle
        firstTitle='workshop'
        spanTitle='divisi'
        textColor='text-quinary'
        spanColor='text-primary'
        useBr={false}
        useLeftHr
        hrWidth='w-full'
      />

      <ThreeMemberCard members={divisiWorkshop} />
    </section>
  );
}
