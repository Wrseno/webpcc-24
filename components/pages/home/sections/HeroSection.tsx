import Image from "next/image";

export default function Hero() {
  return (
    <section className='relative w-full' id='home'>
      <Image
        src='/images/heroimage-edited.webp'
        alt='Hero Image PCC'
        className='w-full image-hero'
        width={1000}
        height={1000}
        quality={100}
      />
      <div
        className='absolute w-[70%] left-[15%] top-[40%] text-white text-center'
        data-aos='fade-up'
      >
        <h2 className='text-base mb-3 md:text-xl md:mb-5 lg:text-2xl lg:mb-6 font-semibold'>
          Selamat Datang di Website Kami!
        </h2>
        <h1 className='text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-wide'>
          POLYTECHNIC COMPUTER CLUB
        </h1>
        <h3 className='text-xl md:text-2xl lg:text-3xl md:mt-2 font-semibold'>
          2024/2025
        </h3>
      </div>
    </section>
  );
}
