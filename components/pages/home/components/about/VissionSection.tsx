import Image from "next/image";
import {SectionTitle} from "../../../..";

export default function VisionSection() {
  return (
    <div className='w-full flex -mt-10 gap-4 px-4 md:-mt-20 lg:gap-16 md:px-16 lg:px-32 md:pb-12'>
      <div
        className='lg:w-1/2 my-auto rounded-3xl drop-shadow-2xl'
        data-aos='zoom-in'
      >
        <Image
          src='/images/pcc.png'
          alt='Logo PCC'
          className='w-full'
          width={1000}
          height={1000}
          quality={100}
        />
      </div>
      <div
        className='p-4 md:p-12 shadow-one rounded-2xl bg-senary'
        data-aos='fade-left'
      >
        <SectionTitle
          spanTitle='VISI'
          firstTitle='POLYTECHNIC'
          secondTitle='COMPUTER CLUB'
          spanColor='text-quinary'
          useBr
          useHr
        />
        <blockquote className='text-xs md:text-base text-octonary'>
          "Menjadikan UKM PCC sebagai wadah yang inofatif, adaptif, solutif,
          serta mengamalkan 7-layers PCC sebagai landasan berorganisasi."
        </blockquote>
      </div>
    </div>
  );
}
