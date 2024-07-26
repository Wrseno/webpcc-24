import {SectionTitle} from "@/components";
import OrgChart from "@/components/common/OrgChart";

export default function StructureHero() {
  return (
    <section>
      <div className='text-center mb-16 sm:mb-32'>
        <SectionTitle useLeftHr useRightHr hrWidth='w-full'>
          <h2
            className='text-2xl md:text-4xl font-bold mb-3 text-primary'
            data-aos='fade-up'
          >
            <span className='font-bold text-quinary'>STRUKTUR</span>
            <br />
            ORGANISASI
          </h2>
        </SectionTitle>
      </div>
      <OrgChart />
    </section>
  );
}
