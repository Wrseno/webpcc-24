import Image from "next/image";
import {SectionTitle} from "..";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  isEven: boolean;
}

export default function EventCard({
  title,
  date,
  location,
  description,
  image,
  isEven,
}: EventCardProps) {
  const words = title.toUpperCase().split(" ");
  const spanTitle = words[0];
  const firstTitle = words[1];

  return (
    <div className='grid grid-cols-2 items-center gap-8 bg-primary text-xs md:text-base p-4 md:p-24'>
      {!isEven ? (
        <div>
          <Image
            src={`/images/${image}`}
            width={100}
            height={100}
            alt={title}
            className='w-full rounded-md'
          />
        </div>
      ) : null}
      <div>
        <SectionTitle
          firstTitle={firstTitle}
          spanTitle={spanTitle}
          useBr={false}
          textColor='text-senary'
          spanColor='text-quinary'
        />
        <p>{description}</p>
        <p>{location}</p>
        <p>{date}</p>
        <ul>
          <li>Software</li>
          <li>Multimedia</li>
          <li>Network</li>
        </ul>
      </div>
      {isEven ? (
        <div>
          <Image
            src={`/images/${image}`}
            width={100}
            height={100}
            alt={title}
            className='w-full rounded-md'
          />
        </div>
      ) : null}
    </div>
  );
}
