import Link from "next/link";
import {MemberCard, SectionTitle} from "..";

import {IoIosArrowForward} from "react-icons/io";

export default function Structure() {
  return (
    <section className='py-16' id='kepengurusan'>
      <div className='pl-[15%] mb-12'>
        <SectionTitle
          firstTitle='ORGANISASI'
          secondTitle='2024/2025'
          spanTitle='STRUKTUR'
          spanColor='text-quinary'
          textColor='text-primary'
          hrWidth='w-7/12'
          useBr
          useRightHr
        />
      </div>
      <div className='relative w-full px-4 md:px-16 lg:px-32 text-senary'>
        <div className='grid sm:grid-cols-2 items-center justify-center'>
          <MemberCard
            imageUrl='/images/administrator.png'
            alt='Administrator'
          />
          <div className='mt-4 sm:mt-0 text-nonary mx-auto'>
            <h3 className='text-2xl sm:text-3xl text-septenary font-bold'>
              ADMINISTRASI PCC <br />
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
    </section>
  );
}
