import {SectionTitle, SevenMemberCard} from "@/components";
import {litbang} from "@/data/data";

export default function LitbangSection() {
  return (
    <section className='h-auto py-16 px-4' id='litbang'>
      <SectionTitle
        firstTitle='DAN PENGEMBANGAN'
        spanTitle='PENELITIAN'
        spanColor='text-quinary'
        textColor='text-primary'
        useBr={false}
        useLeftHr
        hrWidth='w-full'
      />
      <SevenMemberCard members={litbang} />
    </section>
  );
}
