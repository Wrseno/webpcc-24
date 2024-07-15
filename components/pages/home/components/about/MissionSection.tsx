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
          <SectionTitle
            spanTitle='MISI'
            firstTitle='POLYTECHNIC'
            secondTitle='COMPUTER CLUB'
            spanColor='text-quinary'
            useBr
            useHr
          />
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
