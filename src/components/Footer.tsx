"use client"
import React, {useState} from 'react'
import CountrySelector from './CountrySelector'


const footerData = [
    { 
        id:1,
        name: 'Categories',
        links: [
            {
                id: 1,
                name: 'Web Builder'
            },
            {
                id: 2,
                name: 'Hosting'
            },
            {
                id: 3,
                name: 'Data Center'
            },
            {
                id: 4,
                name: 'Robotic-Automation'
            }
        ]
    },
    { 
        id:2,
        name: 'Contact',
        links: [
            {
                id: 1,
                name: 'Contact'
            },
            {
                id: 2,
                name: 'Privacy Policy'
            },
            {
                id: 3,
                name: 'Terms of Service'
            },
            {
                id: 4,
                name: 'Categories'
            },
            {
                id: 5,
                name: 'About'
            }
        ]
    }
]

const Footer = () => {
    const [isHidden,setHidden] = useState(false)

    const display = isHidden ? null : 'hidden'

  return (
    <div className='bg-[#212731] grid grid-cols-2 grid-rows-2 sm:flex sm:flex-row justify-evenly items-start sm:pb-5 pb-0 text-white'>
        {
            footerData.map((tab) => {
                return (
                    <div onClick={()=>setHidden(!isHidden)} className='row-span-1 mx-auto mt-10 sm:mt-24 h-[60%]' key={tab.id}>
                        <p className='h-6 '>{tab.name}</p>
                        <div className='justify-evenly'>
                        { tab.links.map((link)=>{
                            return (
                                    <p className={`${display} sm:block text-sm text-[#B6BDC4] mt-4 h-5`}>{link.name}</p>
                            )
                        })}
                        </div>
                    </div>
                )
            })
        }
        <div className='col-span-2 w-auto row-start-2 mx-auto mb-0 sm:mt-24 sm:pt-10 font-weight-100 sm:w-[90px] sm:h-[20px]'>
            <CountrySelector />            
        </div>
    </div>
  )
}

export default Footer