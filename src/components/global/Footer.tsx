import { navlinks } from "@/assets/data/navlinks";
import Link from "next/link";
import Social from "../shared/Social";

export default function Footer() {
  return (
    <footer className="flex lg:flex-row flex-col lg:items-center items-start justify-between lg:gap-4 gap-8 max-w-7xl mx-auto border-t border-light py-14 xl:px-0 px-6">
      <p className="text-zinc-500">
        &copy; Quiznote {new Date().getFullYear()}
      </p>
      <nav>
        <ul className="flex items-center flex-wrap gap-x-5 gap-y-3">
          {navlinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.url}
                className="text-zinc-600 font-semibold tracking-tighter hover:text-zinc-800 duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* <Social /> */}
    </footer>
  );
}
