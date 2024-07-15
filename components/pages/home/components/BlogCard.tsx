"use client";

import Image from "next/image";
import Link from "next/link";

import {useState, useEffect} from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // This code will only run on the client-side
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize(); // Set initial width

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
};

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  url: string;
  isEven: boolean;
}

export default function BlogCard({
  title,
  description,
  image,
  category,
  url,
  isEven,
}: BlogCardProps) {
  const width = useWindowWidth();
  return (
    <li
      className='relative flex flex-col md:flex-row gap-4 items-center shadow-zero p-4'
      data-aos='fade-up'
    >
      <div
        className={`${
          isEven && width > 640 ? "order-1" : "order-2"
        } sm:ml-6 xl:ml-0`}
      >
        <h3 className='mb-1 text-slate-900 font-semibold'>
          <span className='mb-1 block text-sm leading-6 text-indigo-500'>
            {category}
          </span>
          {title}
        </h3>
        <div className='prose prose-slate prose-sm text-slate-600'>
          <p>{description}</p>
        </div>
        <Link
          className='group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6'
          href={url}
        >
          Selengkapnya
          <span className='sr-only'>
            , Completely unstyled, fully accessible UI components
          </span>
          <svg
            className='overflow-visible ml-3 text-slate-300 group-hover:text-slate-400'
            width='3'
            height='6'
            viewBox='0 0 3 6'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M0 0L3 3L0 6'></path>
          </svg>
        </Link>
      </div>
      <div
        className={`${isEven && width > 640 ? "order-2" : "order-1"} w-full`}
      >
        <Image
          src={image}
          alt={title}
          className='w-[250px] h-[200px] mx-auto mb-6 shadow-md rounded-lg bg-slate-50 sm:mb-0 xl:mb-6'
          width={1000}
          height={1000}
        />
      </div>
    </li>
  );
}
