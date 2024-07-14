import {
  AdministratorSection,
  BendaharaSection,
  DepDanusSection,
  DepMaintenanceSection,
  DepMulmedSection,
  DepSoftwareSection,
  DepNetworkSection,
  DivHrdSection,
  DivHumasSection,
  DivKrtSection,
  DivRedaksiSection,
  DivWorkshopSection,
  LitbangSection,
  SekretarisSection,
  SekumSection,
  StructureHero,
} from "@/components";

export default function page() {
  return (
    <main className='container max-w-screen-2xl mx-auto flex flex-col gap-y-32 py-32 px-4 md:px-24'>
      <StructureHero />
      <AdministratorSection />
      <SekumSection />
      <LitbangSection />
      <SekretarisSection />
      <BendaharaSection />
      <DivHumasSection />
      <DivHrdSection />
      <DivRedaksiSection />
      <DivKrtSection />
      <DepDanusSection />
      <DepMaintenanceSection />
      <DivWorkshopSection />
      <DepMulmedSection />
      <DepSoftwareSection />
      <DepNetworkSection />
    </main>
  );
}
