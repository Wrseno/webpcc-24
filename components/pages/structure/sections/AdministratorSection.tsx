import {SectionTitle, SingleMemberCard} from "@/components";

export default function AdministratorSection() {
  return (
    <section className='h-auto py-16 px-4 md:px-24' id='administrator'>
      <SectionTitle useRightHr hrWidth='w-full'>
        <h2
          className='text-2xl md:text-4xl font-bold mb-3 text-primary'
          data-aos='fade-right'
        >
          <span className='font-bold text-quinary'>ADMINISTRATOR</span>
          <br />
          PCC
        </h2>
      </SectionTitle>
      <SingleMemberCard
        memberImage='/images/sto/admin.webp'
        memberName='Moh Fatkhur Rahman'
        memberPosition='Administrator Pcc'
        isLeft
      />
    </section>
  );
}
