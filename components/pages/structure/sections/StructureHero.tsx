import {SectionTitle} from "@/components";
import OrgChart from "@/components/common/OrgChart";

export default function StructureHero() {
  return (
    <section>
      <div className='text-center mb-16 sm:mb-32'>
        <SectionTitle
          firstTitle='ORGANISASI'
          spanTitle='STRUKTUR'
          useBr={false}
          useLeftHr
          useRightHr
          hrWidth='w-full'
          spanColor='text-quinary'
          textColor='text-primary'
        />
      </div>
      <OrgChart />
    </section>
  );
}
