import React, { useState } from "react"
import { FaBars, FaLinkedin, FaTimes, FaGithub } from "react-icons/fa"
import { BsFiletypePdf } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"

import Logo from "../assets/logo.png"

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const handleClick = () => setShowMobileMenu(!showMobileMenu)

    return (
        <div className="fixed h-[60px] w-full flex justify-between items-center px-4 bg-gray-900 text-gray-300">
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
                <div className="relative md:hidden z-10" onClick={handleClick}>
                    {showMobileMenu ? <FaTimes /> : <FaBars />}
                </div>

                {/* Mobile menu*/}
                <ul
                    className={
                        showMobileMenu
                            ? "absolute top-0 left-0 w-full h-screen bg-gray-900 text-gray-300 text-4xl flex flex-col justify-center items-center space-y-10"
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
            <div className="hidden md:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077b5]">
                        <a
                            className="flex justify-between items-center w-full text-gray-300 pl-2"
                            href="/"
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#33333]">
                        <a
                            className="flex justify-between items-center w-full text-gray-300 pl-2"
                            href="/"
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#C71610]">
                        <a
                            className="flex justify-between items-center w-full text-gray-300 pl-2"
                            href="/"
                        >
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#33333]">
                        <a
                            className="flex justify-between items-center w-full text-gray-300 pl-2"
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
