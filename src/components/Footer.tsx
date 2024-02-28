"use client"
import React from 'react'
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
  return (
    <div className='bg-[#212731] flex flex-row justify-evenly items-start h-[28.25rem] text-white'>
        {
            footerData.map((tab) => {
                return (
                    <div className='mt-24 h-[60%]' key={tab.id}>
                        <p className='h-6 '>{tab.name}</p>
                        <div className='justify-evenly'>
                        { tab.links.map((link)=>{
                            return (
                                <div  key={link.id}>
                                    <p className="text-[#B6BDC4]  mt-4 h-5">{link.name}</p>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                )
            })
        }
        <div className='mt-24 pt-10 font-weight-100 w-[90px] h-[20px]'>
            <CountrySelector />            
        </div>
    </div>
  )
}

export default Footer