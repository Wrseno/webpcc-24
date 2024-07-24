import {SectionTitle, SevenMemberCard} from "@/components";
import {litbang} from "@/data/data";

export default function LitbangSection() {
  return (
    <section className='h-auto py-16 px-4' id='litbang'>
      <SectionTitle useLeftHr hrWidth='w-full'>
        <h2
          className='text-2xl md:text-4xl font-bold mb-3 text-primary'
          data-aos='fade-left'
        >
          <span className='font-bold text-quinary'>PENELITIAN </span>
          DAN
          <br />
          PENGEMBANGAN
        </h2>
      </SectionTitle>
      <SevenMemberCard members={litbang} />
    </section>
  );
}
