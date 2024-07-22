"use client";

import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";

interface NavLinkProps {
  path: string;
  title: string;
  targetId: string;
}

export default function NavLink({path, title, targetId}: NavLinkProps) {
  const pathname = usePathname();
  const router = useRouter();
  const routerPath = `${path}${targetId}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId.substring(1));
    if (targetElement) {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
      const offsetPosition = targetElement.offsetTop - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    if (pathname === "/kepengurusan") router.push(routerPath);
  };

  return (
    <li>
      <Link
        href={`${path}${targetId}`}
        className='block py-2 pr-4 pl-3 rounded hover:bg-secondary md:hover:bg-transparent md:border-0 md:hover:text-quinary md:p-0 duration-300 '
        onClick={handleClick}
      >
        {title}
      </Link>
    </li>
  );
}
