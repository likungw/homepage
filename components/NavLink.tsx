import Link from "next/link";
import { ReactNode } from "react";
import cn from "clsx";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
  const router = useRouter();
  const pathname = `/${router.pathname.split("/")[1]}`; // active paths on dynamic subpages
  const active = pathname === href;

  return (
    <Link
      className={cn(
        "relative px-4 py-2 rounded-full text-sm hover:text-primary transition-colors",
        active ? "nav-link-active" : "text-secondary"
      )}
      href={href}
    >
      {children}
      {active && (
        <motion.div
          layoutId="underline"
          className="nav-link-active-pill absolute left-0 top-0 bottom-0 right-0 -z-20 rounded-full"
          transition={{ type: "spring", stiffness: 210, damping: 25 }}
        />
      )}
    </Link>
  );
}
