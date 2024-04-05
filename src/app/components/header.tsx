'use client';

import Link from "next/link";
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

export default function Header() {

  const pathname = usePathname()


  return (
    <header className="bg-black-800 text-black body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col items-center">
        <nav className="flex flex-wrap items-center text-base justify-center">
          <Link href="/portfolio">
            <div className={`mr-5 hover:text-gray-900 ${pathname === '/portfolio' ? 'border-b-2 border-gray-900': ''}`}>Portfolio</div>
          </Link>
          <Link href="/blog">
            <div className={`mr-5 hover:text-gray-900 ${pathname === '/blog' ? 'border-b-2 border-gray-900': ''}`}>Blog</div>
          </Link>
          <Link href="/about-me">
            <div className={`mr-5 hover:text-gray-900 ${pathname === '/about-me' ? 'border-b-2 border-gray-900': ''}`}>About me</div>
          </Link>
        </nav>
      </div>
    </header>
  );
}
