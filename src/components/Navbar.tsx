import Link from "next/link"
import React from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

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
        id: 1,
        name: `Today's Deals`,
        link: '/',
    }
]
const Navbar = () => {
  return (
    <div>
        <div className="bg-[#212731] h-16 flex flex-row justify-evenly items-center">
            <div className="bg-white h-9 w-64 border border-solid border-[#E1E4E6] rounded-md">
                <MagnifyingGlassIcon className="text-[#626E79] h-full"/>
            </div>
            { navLinks.map((navLink) => {
                return (
                    <Link 
                    className="text-[#D1D6DA] h-[0.875rem]"    
                    key={navLink.id}
                        href={navLink.link}>
                        {navLink.name}
                    </Link>
                )
            }) }
        </div>
    </div>
  )
}

export default Navbar