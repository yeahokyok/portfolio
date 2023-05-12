import React, { useState } from "react"
import { FaBars, FaLinkedin, FaTimes, FaGithub } from "react-icons/fa"
import { BsFiletypePdf } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"

import Logo from "../assets/logo.png"

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const handleClick = () => setShowMobileMenu(!showMobileMenu)

    return (
        <div className="fixed flex h-[60px] w-full items-center justify-between bg-gray-900 px-4 text-gray-300">
            <div>
                {/* <img src={Logo} alt="logo" className="h-[40px]" /> */}
                <h1 className="text-2xl font-bold">TEERAPAT.C</h1>
            </div>

            <nav>
                {/* Menu */}
                <ul className="hidden md:flex">
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Experience</li>
                    <li>Resume</li>
                </ul>
                {/* Hamburger */}
                <div className="relative z-10 md:hidden" onClick={handleClick}>
                    {showMobileMenu ? <FaTimes /> : <FaBars />}
                </div>

                {/* Mobile menu*/}
                <ul
                    className={
                        showMobileMenu
                            ? "absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center space-y-10 bg-gray-900 text-4xl text-gray-300"
                            : "hidden"
                    }
                >
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Experience</li>
                    <li>Resume</li>
                </ul>
            </nav>

            {/* social link */}
            <div className="fixed left-0 top-[35%] hidden flex-col lg:flex">
                <ul>
                    <li className="ml-[-100px] flex h-[60px] w-[160px] items-center justify-between bg-[#0077b5] duration-300 hover:ml-[-10px]">
                        <a
                            className="flex w-full items-center justify-between pl-2 text-gray-300"
                            href="/"
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="ml-[-100px] flex h-[60px] w-[160px] items-center justify-between bg-[#33333] duration-300 hover:ml-[-10px]">
                        <a
                            className="flex w-full items-center justify-between pl-2 text-gray-300"
                            href="/"
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className="ml-[-100px] flex h-[60px] w-[160px] items-center justify-between bg-[#C71610] duration-300 hover:ml-[-10px]">
                        <a
                            className="flex w-full items-center justify-between pl-2 text-gray-300"
                            href="/"
                        >
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    {/* FaTwitter */}
                    {/* FaLine */}
                    <li className="ml-[-100px] flex h-[60px] w-[160px] items-center justify-between bg-[#33333] duration-300 hover:ml-[-10px]">
                        <a
                            className="flex w-full items-center justify-between pl-2 text-gray-300"
                            href="/"
                        >
                            Resume <BsFiletypePdf size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar
