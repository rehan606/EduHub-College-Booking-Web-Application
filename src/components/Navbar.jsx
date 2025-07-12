import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className=' bg-gradient-to-r from-[#4A0148] to-[#BE4748]  shadow-sm sticky z-50 top-0 left-0  
        '>
            <div className="navbar  container mx-auto">
                <div className="navbar-start ">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-gradient-to-r from-[#4A0148] to-[#BE4748] rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li className='font-semibold uppercase text-white duration-300'><Link href={"/"} > Home </Link></li>
                        <li className='font-semibold uppercase text-white duration-300'><Link href={"/colleges"} > Colleges </Link></li>
                        <li className='font-semibold uppercase text-white duration-300'><Link href={"/admission"} > Admission </Link></li>
                        <li className='font-semibold uppercase text-white duration-300'><Link href={"/myCollege"} > My College </Link></li>
                        <li className='font-semibold uppercase text-white duration-300'><Link href={"/profile"} > Profile </Link></li>
                        
                    </ul>
                    </div>
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                                <div className="w-6 h-6 bg-white rounded-sm"></div>
                                <Link href="/" className="font-semibold text-xl uppercase md:text-2xl text-white cursor-pointer"> Edu<span  className='text-[#FFC107]'>Hub</span> </Link>
                              </h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='font-semibold uppercase text-white duration-300'><Link href={"/"} > Home </Link></li>
                        <li className='font-semibold uppercase text-white duration-300'><Link href={"/colleges"} > Colleges </Link></li>
                        <li className='font-semibold uppercase text-white duration-300'><Link href={"/admission"} > Admission </Link></li>
                        <li className='font-semibold uppercase text-white duration-300'><Link href={"/myCollege"} > My College </Link></li>
                        <li className='font-semibold uppercase text-white duration-300'><Link href={"/profile"} > Profile </Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href={"/register"} className="btn bg-[#FFC107] uppercase  text-gray-600 hover:bg-[#ffc107ea] rounded-full px-8">Admission</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
