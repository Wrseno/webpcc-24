import Link from "next/link";

interface NavLinkProps {
  path: string;
  title: string;
}

export default function NavLink({path, title}: NavLinkProps) {
  return (
    <li>
      <Link
        href={path}
        className='block py-2 pr-4 pl-3 rounded hover:bg-secondary md:hover:bg-transparent md:border-0 md:hover:text-quinary md:p-0 duration-300 '
      >
        {title}
      </Link>
    </li>
  );
}
