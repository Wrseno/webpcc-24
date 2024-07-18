import {SectionTitle, SingleMemberCard} from "@/components";

export default function AdministratorSection() {
  return (
    <section className='h-auto py-16 px-4 md:px-24' id='administrator'>
      <SectionTitle
        firstTitle='PCC'
        spanTitle='ADMINISTRATOR'
        textColor='text-primary'
        spanColor='text-quinary'
        useBr={false}
        useRightHr
        hrWidth='w-full'
      />
      <SingleMemberCard
        memberImage='/images/sto/administrator.webp'
        memberName='Moh Fatkhur Rahman'
        memberPosition='Administrator Pcc'
        isLeft
      />
    </section>
  );
}
