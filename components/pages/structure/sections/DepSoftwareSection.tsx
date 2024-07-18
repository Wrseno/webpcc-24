import {FiveMemberCard, SectionTitle} from "@/components";
import {departemenSoftware} from "@/data/data";

export default function DepSoftwareSection() {
  return (
    <section className='h-auto py-16 px-4' id='software'>
      <SectionTitle
        firstTitle='software'
        spanTitle='departemen'
        textColor='text-quinary'
        spanColor='text-primary'
        useBr={false}
        useRightHr
        hrWidth='w-full'
      />
      <FiveMemberCard members={departemenSoftware} />
    </section>
  );
}
