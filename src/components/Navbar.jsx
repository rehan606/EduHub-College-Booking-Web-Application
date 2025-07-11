import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='white shadow-sm'>
            <div className="navbar  container mx-auto">
                <div className="navbar-start ">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link href={"/"} > Home </Link></li>
                        <li><Link href={"/colleges"} > Colleges </Link></li>
                        <li><Link href={"/admission"} > Admission </Link></li>
                        <li><Link href={"/myCollege"} > My College </Link></li>
                        <li><Link href={"/profile"} > Profile </Link></li>
                        
                    </ul>
                    </div>
                    <Link href="/" className="font-semibold text-xl cursor-pointer">Edu<span className='text-blue-500'>Hub</span> </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='font-semibold hover:bg-blue-500 hover:text-white duration-300'><Link href={"/"} > Home </Link></li>
                        <li className='font-semibold hover:bg-blue-500 hover:text-white duration-300'><Link href={"/colleges"} > Colleges </Link></li>
                        <li className='font-semibold hover:bg-blue-500 hover:text-white duration-300'><Link href={"/admission"} > Admission </Link></li>
                        <li className='font-semibold hover:bg-blue-500 hover:text-white duration-300'><Link href={"/myCollege"} > My College </Link></li>
                        <li className='font-semibold hover:bg-blue-500 hover:text-white duration-300'><Link href={"/profile"} > Profile </Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href={"/register"} className="btn bg-blue-500 text-white hover:bg-blue-600">Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
