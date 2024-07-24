import Link from "next/link";
import {MemberCard, SectionTitle, ImageElement} from "../../..";

import {IoIosArrowForward} from "react-icons/io";

export default function Structure() {
  return (
    <section id='kepengurusan'>
      <div className='pl-[15%] mt-20'>
        <SectionTitle useRightHr hrWidth='w-9/12'>
          <h2
            className='text-2xl md:text-4xl font-bold mb-3 text-primary'
            data-aos='fade-right'
          >
            <span className='font-bold text-quinary'>STRUKTUR</span>
            ORGANISASI 2024/2025
          </h2>
        </SectionTitle>
      </div>
      <div className='relative w-full p-4 md:px-16 lg:px-32 text-senary'>
        <div className='grid sm:grid-cols-2 items-center justify-center'>
          <MemberCard imageUrl='/images/sto/admin.webp' alt='Administrator' />
          <div
            className='mt-4 sm:mt-0 text-nonary mx-auto'
            data-aos='fade-left'
          >
            <h3 className='text-2xl sm:text-3xl text-septenary font-bold'>
              ADMINISTRATOR PCC <br />
              2024/2025
            </h3>
            <h2 className='text-3xl sm:text-5xl font-bold my-2'>
              Moh Fatkhur Rahman
            </h2>
            <div className='sm:mt-12'>
              <Link
                href='/kepengurusan'
                className='flex sm:w-5/12 items-center gap-2 bg-secondary p-4 px-8 rounded-full text-senary'
              >
                Selengkapnya
                <IoIosArrowForward />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ImageElement
        src='element-event.png'
        alt='Element'
        divClassName='-mt-16'
        imgClassName='w-[75px] md:w-[150px]'
        isLeft
      />
    </section>
  );
}
