"use client";

import Image from "next/image";

import {galleries} from "@/data/data";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import {ImageElement} from "../../..";

export default function Gallery() {
  return (
    <section className='w-full text-senary items-center my-auto' id='gallery'>
      <div className='text-center'>
        <h2
          className='text-primary text-2xl md:text-6xl font-bold'
          data-aos='fade-down'
        >
          GALLERY
        </h2>
        <hr
          className='border-octonary border-t-2 md:border-t-4'
          data-aos='zoom-in'
        />
        <div className='w-full' data-aos='zoom-in'>
          <hr className='w-[20%] mx-auto border-octonary border-t-2 mb-4 md:border-t-8' />
        </div>
      </div>
      <div className='w-full items-center px-8'>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          navigation
          pagination={{clickable: true}}
          autoplay
        >
          {galleries.map((gallery, index) => (
            <SwiperSlide
              key={index}
              className='flex flex-col items-center shadow-three rounded-3xl'
            >
              <Image
                src={gallery.image}
                alt={gallery.title}
                width={1000}
                height={1000}
                className='rounded-t-2xl'
              />
              <div className='bg-primary p-4 rounded-b-2xl flex-grow flex flex-col description'>
                <h2 className='text-base sm:text-xl font-semibold mb-4'>
                  {gallery.title.toUpperCase()}
                </h2>
                <p className='text-xs sm:text-sm overflow-y-auto'>
                  {gallery.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <ImageElement
        src='element-event-3.png'
        alt='Element'
        isLeft={false}
        divClassName='-mt-16'
        imgClassName='w-[75px] md:w-[150px]'
      />
    </section>
  );
}
