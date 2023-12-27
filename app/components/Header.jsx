import Link from "next/link";
import NavLink from "../ui/NavLink";
import ContactBtn from "../ui/ContactBtn";

function Header() {
  return (
    <header className="bg-gray-200 py-5">
      <nav className="container">
        <ul className="flex gap-4">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
          <ContactBtn />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
