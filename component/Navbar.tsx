import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
};

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const Navbar = (props: Props) => {
  return (
    <nav className={`${props.className} animate-fade-in`}>
      <ul className="flex items-center justify-center gap-4">
        {navigation.map((item) => (
          <li key={item.href} className="text-sm">
            <Link href={item.href}>
              <div className="duration-500 text-zinc-500 hover:text-zinc-300">
                {item.name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
