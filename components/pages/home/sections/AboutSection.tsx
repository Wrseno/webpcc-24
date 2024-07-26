import Image from "next/image";
import Element from "../../../widgets/ImageElement";
import MissionSection from "../components/about/MissionSection";
import VisionSection from "../components/about/VissionSection";
import AboutSection from "../components/about/AboutSection";

export default function About() {
  return (
    <section id='about'>
      <div className='px-4 md:px-16 lg:px-32 md:flex relative mt-20'>
        <div className='flex md:block md:[w-40%] lg:w-[25%]'>
          <Image
            src='/images/icon_lightblub.png'
            alt=''
            className='hidden md:block w-[100px] mx-auto'
            width={1000}
            height={1000}
            quality={100}
          />
          <h2
            className='text-2xl my-4 md:my-28 lg:my-16 mx-auto md:text-4xl lg:text-7xl text-primary font-bold leading-tight'
            data-aos='fade-up-right'
          >
            SHARE <br className='hidden md:block' />
            YOUR <br className='hidden md:block' />
            KNOWLEDGE!
          </h2>
        </div>
        <AboutSection />
      </div>
      <Element
        src='element-event.png'
        alt='Element'
        divClassName='-mt-28 lg:-mt-14'
        imgClassName='w-[75px] md:w-[150px]'
        isLeft
      />
      <div className='mt-12 w-full relative'>
        <Element
          src='element-event-3.png'
          alt='Element'
          imgClassName='w-[75px] md:w-[150px]'
          isLeft={false}
        />

        <VisionSection />
        <MissionSection />
      </div>
    </section>
  );
}
