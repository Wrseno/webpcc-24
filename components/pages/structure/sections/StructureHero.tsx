import { SectionTitle } from "@/components";

// import OrgChart from "@/components/common/OrgChart";
import Image from "next/image";

export default function StructureHero() {
  return (
    <section>
      <div className="text-center mb-8">
        <SectionTitle useLeftHr useRightHr hrWidth="w-full">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 text-primary" data-aos="fade-up">
            <span className="font-bold text-quinary">STRUKTUR</span>
            <br />
            ORGANISASI
          </h2>
        </SectionTitle>
      </div>
      {/* <OrgChart /> */}
      <Image src="/images/struktur.png" className="w-full h-auto mx-auto my-0" width={1000} height={1000} alt="apa coba" />
    </section>
  );
}
