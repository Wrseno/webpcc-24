import Image from "next/image";

export default function Hero() {
  return (
    <section className='relative w-full'>
      <div className='bg-gradient-to-b from-primary from-75% to-denary opacity-60 absolute top-0 left-0 w-full h-full'></div>
      <Image
        src='/images/hero-image-pc.jpeg'
        alt='Hero Image PCC'
        className='w-full'
        width={100}
        height={100}
        placeholder='blur'
        blurDataURL='/images/hero-image-pc.jpeg'
      />
      <div className='absolute w-[70%] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[20%] md:-translate-y-[40%] text-white text-center'>
        <h2 className='text-sm mb-3 md:text-xl md:mb-5 lg:text-2xl lg:mb-6 font-semibold'>
          Selamat Datang di Website Kami!
        </h2>
        <h1 className='text-2xl md:text-5xl lg:text-7xl font-extrabold tracking-wide'>
          POLYTECHNIC COMPUTER CLUB
        </h1>
        <h3 className='text-md md:text-2xl lg:text-3xl md:mt-2 font-semibold'>
          2024/2025
        </h3>
      </div>
    </section>
  );
}
