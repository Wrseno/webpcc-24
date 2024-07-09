import Image from "next/image";
interface ElementProps {
  src: string;
  alt: string;
  isLeft: boolean;
  className?: string;
}

export default function Element({src, alt, isLeft, className}: ElementProps) {
  return (
    <div className={`flex justify-between ${className}`}>
      {!isLeft ? <span></span> : ""}
      <span>
        <Image
          src={`/images/${src}`}
          alt={alt}
          className='w-[75px] md:w-[150px]'
          width={100}
          height={100}
        />
      </span>
      {isLeft ? <span></span> : ""}
    </div>
  );
}
