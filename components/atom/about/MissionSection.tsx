import SectionTitle from "../SectionTitle";
import {missions} from "@/data/data";

export default function MissionSection() {
  return (
    <div className='px-4 md:px-16 lg:px-32 py-6 text-senary'>
      <div className='bg-secondary shadow-lg shadow-septenary rounded-2xl'>
        <div className='p-6 md:p-12'>
          <SectionTitle
            spanTitle='MISI'
            firstTitle='POLYTECHNIC'
            useBr
            secondTitle='COMPUTER CLUB'
            spanColor='text-quinary'
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
