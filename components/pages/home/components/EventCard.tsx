import Image from "next/image";
import {SectionTitle} from "../../..";
import {FaLocationDot} from "react-icons/fa6";
import {BsCalendarDateFill} from "react-icons/bs";

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
    <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8 bg-primary text-xs md:text-base p-4 py-16 md:p-24 md:py-32'>
      {!isEven && (
        <div data-aos='zoom-in'>
          <Image
            src={`/images/${image}`}
            width={1000}
            height={1000}
            alt={title}
            quality={100}
            className='w-full rounded-2xl'
          />
        </div>
      )}
      <div data-aos='fade-up'>
        <SectionTitle useHr hrWidth='w-1/2'>
          <h2 className='text-2xl md:text-4xl font-bold mb-3 text-SENARY'>
            <span className='font-bold text-quinary'>{spanTitle}</span>
            {firstTitle}
          </h2>
        </SectionTitle>
        <p>{description}</p>
        <div className='flex gap-2 my-4'>
          <div className='flex flex-wrap items-center gap-2'>
            <FaLocationDot />
            <p>{location}</p>
          </div>
          <div className='flex flex-wrap items-center gap-2'>
            <BsCalendarDateFill />
            <p>{date}</p>
          </div>
        </div>
        <ul className='flex flex-wrap gap-4'>
          <li className='bg-secondary p-1 px-2 rounded'>Software</li>
          <li className='bg-teartiary p-1 px-2 rounded'>Multimedia</li>
          <li className='bg-denary p-1 px-2 rounded'>Network</li>
        </ul>
      </div>
      {isEven && (
        <div data-aos='zoom-in'>
          <Image
            src={`/images/${image}`}
            width={1000}
            height={1000}
            alt={title}
            quality={100}
            className='w-full rounded-2xl'
          />
        </div>
      )}
    </div>
  );
}
