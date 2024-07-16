import {MemberCard} from "@/components";

interface SingleMemberCardProps {
  memberImage: string;
  memberPosition: string;
  memberName: string;
  isLeft: boolean;
}

export default function SingleMemberCard({
  memberImage,
  memberPosition,
  memberName,
  isLeft,
}: SingleMemberCardProps) {
  return (
    <div className='flex flex-col items-center py-16 mx-auto max-w-screen-xl md:grid md:grid-cols-2 lg:px-6'>
      {isLeft && <MemberCard imageUrl={memberImage} alt={memberName} />}
      <div className='mt-4 md:mt-0 text-center md:text-left' data-aos='zoom-in'>
        <h2 className='mb-4 text-2xl md:text-4xl text-gray-400 font-bold'>
          {memberPosition.toUpperCase()} <br />
          2024/2025
        </h2>
        <h2 className='mb-4 text-2xl md:text-6xl text-gray-900 font-bold'>
          {memberName}
        </h2>
      </div>
      {!isLeft && <MemberCard imageUrl={memberImage} alt={memberName} />}
    </div>
  );
}
