"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, ...rest }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      {...rest}
      className={isActive ? "font-bold text-blue-500" : ""}
    />
  );
}

export default NavLink;
