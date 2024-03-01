"use client"
import { useState } from 'react'

const tabs = [
    'Tools', 'AWS Builder', 'Start Build', 'Build Supplies', 'Tooling', 'BlueHosting'
]

const filters = [
    'Home   >', 'Hosting    >', 'Hosting for All    >', 'Hosting 5  >', 'Hosting 6'
]

type Props = {
  className?: string
}

const MenuItems = <PROPS extends Props, >({ className, ...rest }: PROPS): JSX.Element => (
    <>
        <div className={` ${className} justify-between`}>
            {tabs.map((tab)=>{
                return (
                    <p key={tab} className="hover:underline hover:font-medium">{tab}</p>
                )
            })}
        </div>
        
    </>
)
const MenuBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
    setIsOpen(!isOpen);
    };
  return ( 
    <div className='my-4'>
        <button
        className={`text-white w-[30%] my-2 px-4 py-2 rounded-md bg-[#212731] hover:bg-[#323d50] focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 sm:hidden ${
            isOpen ? `mb-0` : ''
        }`}
        onClick={toggleDropdown}
        >
            Menu
        </button>
        {
            isOpen &&
            <MenuItems className='bg-[#212731] mx-10 shadow-md rounded-md text-gray-300  px-4 py-2 mb-5'/>
        }
 
        <MenuItems className='hidden sm:flex flex-row'/>

        <div className={`flex flex-row text-xs sm:text-sm sm:mt-5`}>
            {
                filters.map((filter)=>{
                    return (
                        <p className="mr-2" key={filter}>
                            {filter}                             
                        </p>
                    )
                })
            }
        </div>
 
    </div>
  )
}

export default MenuBar