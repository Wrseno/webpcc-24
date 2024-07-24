import {SectionTitle} from "../../../..";
import {missions} from "@/data/data";

export default function MissionSection() {
  return (
    <div className='px-4 md:px-16 lg:px-32 py-6 text-senary'>
      <div
        className='bg-secondary shadow-three rounded-2xl'
        data-aos='fade-right'
      >
        <div className='p-6 md:p-12'>
          <SectionTitle useHr hrWidth='w-1/2'>
            <h2 className='text-2xl md:text-4xl font-bold mb-3 text-senary'>
              <span className='font-bold text-quinary'>MISI </span>
              POLYTECHNIC <br />
              COMPUTER CLUB
            </h2>
          </SectionTitle>
          <ol className='text-xs md:text-base'>
            {missions.map((miss, index) => (
              <li key={index}>
                {miss.id}. {miss.text}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
