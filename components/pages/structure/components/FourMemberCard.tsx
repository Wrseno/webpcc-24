import {MemberCardProps} from "@/data";
import Image from "next/image";

export default function FourMemberCard({members}: MemberCardProps) {
  return (
    <div className='py-16'>
      <div className='flex flex-col items-center md:py-8 mx-auto max-w-screen-xl md:grid md:grid-cols-1 md:gap-6 lg:px-6'>
        {members.slice(0, 1).map((member, index) => {
          return (
            <div
              className='flex flex-col items-center'
              key={index}
              data-aos='zoom-in'
            >
              <div className='w-72 h-96 bg-secondary rounded-xl shadow-md overflow-hidden mx-auto flex justify-center items-center my-4 md:my-0'>
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={1000}
                  height={1000}
                  className='w-full h-full object-cover rounded-xl'
                />
              </div>
              <div className='text-center md:mt-2'>
                <p className='text-gray-500 font-bold text-xl'>
                  {member.position.toUpperCase()}
                </p>
                <p className='text-black font-bold text-2xl'>{member.name}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className='flex flex-col items-center md:py-8 mx-auto max-w-screen-xl md:grid md:grid-cols-3 md:gap-6 lg:px-6'>
        {members.slice(1, 4).map((member, index) => {
          return (
            <div
              className='flex flex-col items-center'
              key={index}
              data-aos='zoom-in'
            >
              <div className='w-72 h-96 bg-secondary rounded-xl shadow-md overflow-hidden mx-auto flex justify-center items-center my-4 md:my-0'>
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={1000}
                  height={1000}
                  className='w-full h-full object-cover rounded-xl'
                />
              </div>
              <div className='text-center md:mt-2'>
                <p className='text-gray-500 font-bold text-xl'>
                  {member.position.toUpperCase()}
                </p>
                <p className='text-black font-bold text-2xl'>{member.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
