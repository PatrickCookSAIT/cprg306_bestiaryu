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
    {href: '/habitats', label: 'Habitats'},
    {href: '/aboutus', label: 'About Us'},
]

export default function Navbar() {
        const pathname = usePathname()
    console.log("Pathname",pathname)
  return (
    <nav className="bg-red-50 border-b border-gray-200 px-6 py-4 ">
      <div className=" flex flex-row ">
        <div className="w-1/2">
            <Link key='/' href='/' className="text-4xl font-bold text-green-900 text-start">BestiaryU</Link>
        
        </div>
        <div className=" w-1/2 flex flex-row justify-end pt-3 gap-5 mr-10">
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
