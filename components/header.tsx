import Image from "next/image";
import Link from "next/link";
import avatar from "public/avatar.png";
import NavLink from "./NavLink";
import ThemeSwitcher from "./ThemeSwitcher";
import { FullName } from "../data/site";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "People", href: "/people" },
  { label: "Projects", href: "/projects" },
  { label: "Publications", href: "/publications" },
  { label: "Talks", href: "/talks" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 main-header backdrop-blur-md bg-header select-none">
      <nav className="site-navigation flex items-center justify-between gap-3 py-2">
        <Link href="/" className="hidden shrink-0 sm:block">
          <Image
            src={avatar}
            alt={`${FullName} avatar`}
            className="w-8 h-8"
            priority
          />
        </Link>
        <ul className="no-scrollbar flex min-w-0 items-center gap-1 overflow-x-auto">
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
