import {FourMemberCard, SectionTitle} from "@/components";
import {departemenMaintenance} from "@/data/data";

export default function DepMaintenanceSection() {
  return (
    <section className='h-auto py-16 px-4 ' id='maintenance'>
      <SectionTitle
        firstTitle='maintenance'
        spanTitle='departemen'
        textColor='text-primary'
        spanColor='text-quinary'
        useBr={false}
        useRightHr
        hrWidth='w-full'
      />
      <FourMemberCard members={departemenMaintenance} />
    </section>
  );
}
