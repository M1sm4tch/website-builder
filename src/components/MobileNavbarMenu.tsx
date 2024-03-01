import React, {useState} from "react"
import Link from "next/link"


interface NavLink {
    id: number;
    name: string;
    link: string;
  }

const MobileNavbarMenu: React.FC<{ navLinks: NavLink[]}> = ({ navLinks}) => {

  return (
    <div className="flex flex-col items-start space-y-2 p-2">
      {navLinks.map((navLink) => (
        <Link key={navLink.id} href={navLink.link} className="text-white text-lg font-medium hover:underline">
          {navLink.name}
        </Link>
      ))}      
    </div>
  );
};

export default MobileNavbarMenu;
