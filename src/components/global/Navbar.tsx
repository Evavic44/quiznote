"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.png";
import MobileMenu from "@/components/global/MobileMenu";
import HamburgerButton from "./Hamburger";
import { useState } from "react";
import { GithubIcon } from "../icons";
import { navlinks } from "@/assets/data/navlinks";
import Button from "../shared/Button";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header
      className={`bg-white fixed top-0 left-0 w-full h-20 duration-200 ease-[cubic-bezier(0,0,0,1)] lg:border-b border-zinc-100 text-zinc-600 z-20 ${
        !toggleMenu
          ? "overflow-hidden"
          : "bg-white md:h-20 h-full overflow-visible"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between lg:px-8 px-6 py-6">
        <Link
          href="/"
          className="font-geistmono font-bold text-lg flex items-center gap-x-2 order-2"
        >
          <Image src={Logo} alt="Reda logo" width={20} />
          Quiznote
        </Link>

        <nav className="md:block hidden">
          <ul className="flex items-center gap-3 pl-4 order-1">
            {navlinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.url}
                  className="font-medium text-sm tracking-tight text-zinc-500 hover:text-zinc-700 duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="order-3">
          <div className="md:flex hidden items-center gap-x-6">
            <Button
              text="GitHub"
              url="https://github.com/Evavic44/quiznote"
              icon={<GithubIcon />}
              external
              theme="primary"
            />
          </div>
          <HamburgerButton toggleMenu={toggleMenu} onToggle={setToggleMenu} />
        </div>
      </div>
      <MobileMenu toggleMenu={toggleMenu} onToggle={setToggleMenu} />
    </header>
  );
}
