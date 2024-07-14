import Image from "next/image";

interface memberCardProps {
  imageUrl: string;
  alt: string;
}

export default function MemberCard({imageUrl, alt}: memberCardProps) {
  return (
    <div
      className='w-72 h-96 bg-primary rounded-xl overflow-hidden mx-auto md:ms-auto md:me-16 flex justify-center items-center'
      data-aos='zoom-in'
    >
      <div className='w-full h-full'>
        <Image
          src={imageUrl}
          alt={alt}
          width={1000}
          height={1000}
          quality={100}
          className='w-full h-full object-cover rounded-xl drop-shadow-xl'
        />
      </div>
    </div>
  );
}
