import { menuData } from "@/data/menuData";
import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
};

const Navbar = (props: Props) => {
  return (
    <nav className={`${props.className} animate-fade-in`}>
      <ul className="flex items-center justify-center gap-4">
        {menuData.map((item) => (
            <Link key={item.href} href={item.href} className="duration-500 text-zinc-500 hover:text-zinc-300">
                {item.name}
            </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
