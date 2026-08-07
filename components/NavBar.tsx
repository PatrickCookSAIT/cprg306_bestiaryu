// ============================================================================
// components/Navbar.tsx   →   the bar across the top of every page
// ============================================================================
// Display's page title and links to Discover Animals and Plan Your Visit
// ----------------------------------------------------------------------------
'use client'
import Link from "next/link"
import {usePathname} from "next/navigation";
import React from 'react'

const navLinks=[
    
    {href: '/animals', label: 'Animals'},
    {href: '/map', label: 'Map'},
    {href: '/schedule', label: 'Schedule'},
    {href: '/about', label: 'About Us'},
]

export default function Navbar() {
        const pathname = usePathname()
    console.log("Pathname",pathname)
  return (
    <nav className="bg-red-50 border-b border-gray-200 px-6 py-4 w-full">
      <div className=" flex lg:flex-row flex-col ">
        <div className="lg:w-1/2 w-full">
            <Link key='/' href='/' className="text-4xl font-bold text-green-900 text-start">BestiaryU</Link>
        
        </div>
        <div className=" w-full lg:w-1/2 flex flex-row justify-center lg:justify-end pt-3 gap-5 lg:mr-10">
        {
            navLinks.map((link)=>{
                const isActive = pathname ===link.href
                return(
                    <Link key={link.href}
                    href={link.href}
                    className = {['text-lg text-center border-b-2',
                        isActive ? "text-green-900 font-bold border-green-900" : "text-slate-400 font-normal border-transparent hover:text-slate-200",

                    ].join(' ')}>{link.label}</Link>
                )
            })
        }
   
        </div>

      </div>
    </nav>
  );
}
