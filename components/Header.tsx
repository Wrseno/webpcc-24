import Image from "next/image";
import {navLinks} from "@/data/data";
import NavLink from "./atom/NavLink";

export default function Header() {
  return (
    <nav className='bg-primary text-senary px-2 sm:px-4 py-2.5 fixed w-full shadow-lg shadow-slate-500 z-10'>
      <div className='container flex flex-wrap justify-between items-center mx-auto p-1'>
        <a href='/' className='flex items-center'>
          <Image
            src='/images/logo-pcc.png'
            alt='Logo PCC'
            className='w-[20px] h-[30px] md:w-[40px] md:h-[50px]'
            width={100}
            height={100}
            priority
          />
          <span className='self-center text-xs sm:text-md md:text-xl font-semibold whitespace-nowrap ml-3 tracking-wider'>
            POLYTECHNIC COMPUTER CLUB
          </span>
        </a>

        <div className='flex items-center'>
          <button
            id='menu-toggle'
            type='button'
            className='inline-flex items-center p-2 ml-3 text-sm rounded-lg hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </button>
        </div>

        <div className='w-full md:block md:w-auto hidden' id='mobile-menu'>
          <ul className='flex flex-col mt-4 md:flex-row md:space-x-4 md:mt-0 text-senary'>
            {navLinks.map((navLink, index) => (
              <NavLink key={index} path={navLink.path} title={navLink.title} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
