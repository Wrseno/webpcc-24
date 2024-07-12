"use client";

import Link from "next/link";
import {useEffect, useRef} from "react";

interface NavLinkProps {
  path: string;
  title: string;
}

export default function NavLink({path, title}: NavLinkProps) {
  const targetRef = useRef(null);

  const handleClick = (e: any) => {
    e.preventDefault();
    const targetId = path.substring(1);
    const targetElement =
      document.getElementById(targetId) || targetRef.current;
    if (targetElement) {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
      const offsetPosition = targetElement.offsetTop - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const anchors = document.querySelectorAll(".scroll-link");
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleClick);
    });

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleClick);
      });
    };
  }, [path]);

  return (
    <li>
      <Link
        href={path}
        className='scroll-link block py-2 pr-4 pl-3 rounded hover:bg-secondary md:hover:bg-transparent md:border-0 md:hover:text-quinary md:p-0 duration-300 '
        onClick={handleClick}
      >
        {title}
      </Link>
    </li>
  );
}
