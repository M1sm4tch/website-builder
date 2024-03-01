"use client"
import Link from "next/link"
import React, {useState} from "react"
import { Bars2Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import MobileNavbarMenu from "./MobileNavbarMenu"

const navLinks = [
    {
        id: 1,
        name: 'Categories',
        link: '/',
    },
    {
        id: 2,
        name: 'Website Builders',
        link: '/',
    },
    {
        id: 3,
        name: `Today's Deals`,
        link: '/',
    }
]
const Navbar = () => {
    const [on, setOn] = useState(false);
    const [rotate, setRotate] = useState(false);  
    const handleClick = () => {
        setOn(!on);
        setRotate(!rotate);  
    };

  return (
        <div className="fixed z-50 top-0 bg-[#212731] h-16 flex flex-row justify-between sm:justify-evenly items-center w-full">
            <Bars2Icon
                onClick={handleClick}
                className={`h-[50%] text-white sm:hidden transition duration-300 ease-in-out ml-2 ${
                rotate ? "transform rotate-180" : ""
                }`}  
            />
            <div className="bg-white h-8 sm:h-9 w-fit px-1 border border-solid border-[#E1E4E6] rounded-md flex flex-row m-auto sm:m-0">
                <MagnifyingGlassIcon className="text-[#626E79] h-full max-w-full min-w-8 "/>
                <input type="text" className="h-full max-w-[] m-0 p-0 hover:border-0 border-transparent focus:border-transparent focus:ring-0"/>
            </div>
            { navLinks.map((navLink) => {
                return (
                    <Link 
                    className="hidden sm:block text-[#D1D6DA] h-[0.875rem] hover:text-white hover:underline"    
                    key={navLink.id}
                    href={navLink.link}>
                        {navLink.name}
                    </Link>
                )
            }) }
            {/* Mobile menu rendering */}
            <div className={`fixed top-0 left-0 h-fit w-fit bg-[#212731] z-100 transition duration-300 ease-in-out rounded-b-md ${on ? "translate-y-16 scale-[1]" : "-translate-y-full -translate-x-full scale-0 opacity-0"}`}>
                <MobileNavbarMenu navLinks={navLinks}  />
            </div>
        </div>
  )
}

export default Navbar