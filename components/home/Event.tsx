import {events} from "@/data/data";
import EventCard from "../atom/EventCard";
import {Element} from "..";

export default function Event() {
  return (
    <section className='relative w-full text-senary' id='event'>
      <div className='bg-teartiary flex items-center my-auto py-8 md:py-16'>
        <hr className='w-[10%] border-quinary border-t-2 mb-4 md:border-t-4' />
        <h2 className='text-senary text-xl md:text-6xl font-bold'>EVENT</h2>
      </div>
      {events.map((event, index) => {
        if (index % 2 === 0) {
          return (
            <EventCard
              key={index}
              title={event.title}
              date={event.date}
              description={event.description}
              location={event.location}
              image={event.image}
              isEven
            />
          );
        } else {
          return (
            <EventCard
              key={index}
              title={event.title}
              date={event.date}
              description={event.description}
              location={event.location}
              image={event.image}
              isEven={false}
            />
          );
        }
      })}
      <Element
        src='elemen-visimisi-3.png'
        alt=''
        isLeft
        className='absolute top-[40%]'
      />
      <Element
        src='element-visi-misi.png'
        alt=''
        isLeft={false}
        className='-mt-[50%]'
      />
    </section>
  );
}
