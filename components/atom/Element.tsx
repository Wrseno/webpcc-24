import Image from "next/image";
interface ElementProps {
  src: string;
  alt: string;
  isLeft: boolean;
  divClassName?: string;
  imgClassName?: string;
}

export default function Element({
  src,
  alt,
  isLeft,
  divClassName,
  imgClassName,
}: ElementProps) {
  return (
    <div className={`flex justify-between ${divClassName}`}>
      {!isLeft && <span></span>}
      <span>
        <Image
          src={`/images/${src}`}
          alt={alt}
          className={imgClassName}
          width={1000}
          height={1000}
          quality={100}
        />
      </span>
      {isLeft && <span></span>}
    </div>
  );
}
