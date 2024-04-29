import { socialLinks } from "@/assets/data/socialLinks";
import Link from "next/link";

export default function Social() {
  return (
    <ul className="flex items-center gap-x-6">
      {socialLinks.map((social) => (
        <li key={social.id}>
          <Link
            href={social.url}
            className="text-zinc-800 hover:text-primary text-2xl duration-200"
          >
            <social.icon />
          </Link>
        </li>
      ))}
    </ul>
  );
}
