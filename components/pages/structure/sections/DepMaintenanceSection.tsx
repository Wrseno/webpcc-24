import {FourMemberCard, SectionTitle} from "@/components";
import {departemenMaintenance} from "@/data/data";

export default function DepMaintenanceSection() {
  return (
    <section className='h-auto py-16 px-4 ' id='maintenance'>
      <SectionTitle useRightHr hrWidth='w-full'>
        <h2
          className='text-2xl md:text-4xl font-bold mb-3 text-primary'
          data-aos='fade-right'
        >
          <span className='font-bold text-quinary'>DEPARTEMEN</span>
          <br />
          MAINTENANCE
        </h2>
      </SectionTitle>
      <FourMemberCard members={departemenMaintenance} />
    </section>
  );
}
