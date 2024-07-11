import Image from "next/image";

interface memberCardProps {
  imageUrl: string;
  alt: string;
}

export default function MemberCard({imageUrl, alt}: memberCardProps) {
  return (
    <div className='w-80 sm:w-72 h-96 p-4 bg-secondary rounded-xl shadow-md overflow-hidden mx-auto'>
      <div className='w-full h-full'>
        <Image
          src={imageUrl}
          alt={alt}
          width={1000}
          height={1000}
          className='rounded-xl'
        />
      </div>
    </div>
  );
}
