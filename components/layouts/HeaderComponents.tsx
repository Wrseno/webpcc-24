"use client";

import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";

import {navLinks} from "@/data/data";
import NavLink from "./NavLink";

export default function HeaderComponents() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    if (isOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        setIsOpen(false);
      }, 200);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <nav className='bg-primary text-senary px-2 sm:px-4 py-2.5 fixed w-full shadow-three z-10'>
      <div className='container mx-auto flex flex-wrap justify-between items-center p-1'>
        <Link href='/' className='flex items-center'>
          <Image
            src='/images/logo-pcc.png'
            alt='Logo PCC'
            className='w-[20px] h-[30px] md:w-[40px] md:h-[50px]'
            width={100}
            height={100}
            priority
          />
          <span className='self-center text-sm md:text-xl font-semibold whitespace-nowrap ml-3 tracking-wider'>
            POLYTECHNIC COMPUTER CLUB
          </span>
        </Link>

        <div className='flex items-center'>
          <button
            // id='menu-toggle'
            onClick={handleToggle}
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

        <div
          className={`w-full md:block md:w-auto ${
            isOpen ? "slide-in" : isAnimating ? "slide-out" : "hidden"
          }`}
          id='mobile-menu'
        >
          <ul className='flex flex-col mt-4 md:flex-row md:space-x-4 md:mt-0 text-senary pb-4 sm:pb-0'>
            <li>
              <Link
                href='/'
                className='block py-2 pr-4 pl-3 rounded hover:bg-secondary md:hover:bg-transparent md:border-0 md:hover:text-quinary md:p-0 duration-300 '
              >
                Home
              </Link>
            </li>
            {navLinks.map((navLink, index) => (
              <NavLink key={index} path={navLink.path} title={navLink.title} targetId={navLink.targetId} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
