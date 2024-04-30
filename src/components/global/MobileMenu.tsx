"use client";

import { navlinks } from "@/assets/data/navlinks";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect } from "react";

export default function MobileMenu({
  toggleMenu,
  onToggle,
}: {
  toggleMenu: boolean;
  onToggle: Dispatch<SetStateAction<boolean>>;
}) {
  useEffect(() => {
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Escape" && toggleMenu) {
        onToggle(false);
      }
    });
  }, [onToggle, toggleMenu]);

  return (
    <div>
      {toggleMenu && (
        <nav className="md:hidden block p-6">
          <ul className="flex flex-col gap-y-2 mb-10">
            {navlinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.url}
                  className="hover:bg-primary hover:text-white block text-sm font-medium tracking-tight duration-150 p-2 rounded-md"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
