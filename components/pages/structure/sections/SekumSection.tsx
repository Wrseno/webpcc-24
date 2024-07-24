import {SectionTitle} from "@/components";
import SingleMemberCard from "../components/SingleMemberCard";

export default function SekumSection() {
  return (
    <section className='h-auto py-16 px-4 md:px-24' id='sekum'>
      <SectionTitle useRightHr hrWidth='w-full'>
        <h2
          className='text-2xl md:text-4xl font-bold mb-3 text-primary'
          data-aos='fade-right'
        >
          <span className='font-bold text-quinary'>SEKRETARIS</span>
          <br />
          UMUM
        </h2>
      </SectionTitle>
      <SingleMemberCard
        memberImage='/images/sto/sekum.webp'
        memberName='Nor Aina'
        memberPosition='Sekretaris Umum'
        isLeft={false}
      />
    </section>
  );
}
