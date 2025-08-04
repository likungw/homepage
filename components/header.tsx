import Image from "next/image";
import Link from "next/link";
import avatar from "public/avatar.png";
import NavLink from "./NavLink";
import ThemeSwitcher from "./ThemeSwitcher";
import { FullName } from "../pages/about";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Publications", href: "/publications" },
  { label: "Talks", href: "/talks" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 main-header backdrop-blur-md bg-header select-none">
      <nav className="px-5 md:px-8 py-2 max-w-4xl mx-auto flex justify-between items-center ">
        <Link href="/" className="hidden shrink-0 sm:block">
          <Image
            src={avatar}
            alt={`${FullName} avatar`}
            className="w-8 h-8"
            priority
          />
        </Link>
        <ul className="flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center w-8 h-8">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
