import {events} from "@/data/data";
import {EventCard} from "../../..";
import {ImageElement} from "../../..";

export default function Event() {
  return (
    <section className='relative w-full text-senary' id='event'>
      <div
        className='bg-teartiary flex items-center my-auto py-8 md:py-16'
        data-aos='fade-down'
      >
        <hr
          className='w-[10%] border-quinary border-t-2 mb-4 md:border-t-4'
          data-aos='fade-right'
        />
        <h2
          className='text-senary text-2xl md:text-6xl font-bold'
          data-aos='fade-left'
        >
          EVENT
        </h2>
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
      <ImageElement
        src='elemen-visimisi-3.png'
        alt='Elemen'
        imgClassName='w-[75px] md:w-[150px]'
        divClassName='absolute top-[30%]'
        isLeft
      />
      <ImageElement
        src='element-visi-misi.png'
        alt='Elemen'
        imgClassName='w-[75px] md:w-[150px]'
        divClassName='absolute right-0 -mt-[25%] md:-mt-[50%]'
        isLeft={false}
      />
      <ImageElement
        src='icon-target.png'
        alt='Icon target'
        imgClassName='-left-1/2 md:w-[50%] md:-left-1/4 absolute'
        isLeft
      />
    </section>
  );
}
