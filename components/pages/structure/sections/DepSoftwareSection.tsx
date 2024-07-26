import {FiveMemberCard, SectionTitle} from "@/components";
import {departemenSoftware} from "@/data/data";

export default function DepSoftwareSection() {
  return (
    <section className='h-auto py-16 px-4' id='software'>
      <SectionTitle useRightHr hrWidth='w-full'>
        <h2
          className='text-2xl md:text-4xl font-bold mb-3 text-quinary'
          data-aos='fade-right'
        >
          <span className='font-bold text-primary'>DEPARTEMEN</span>
          <br />
          SOFTWARE
        </h2>
      </SectionTitle>
      <FiveMemberCard members={departemenSoftware} />
    </section>
  );
}
