import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import Logo from "../assets/logo.png"

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const handleClick = () => setShowMobileMenu(!showMobileMenu)

    return (
        <div className="fixed h-[60px] w-full flex justify-between items-center px-4 bg-gray-900 text-gray-300">
            <div>
                <img src={Logo} alt="logo" className="h-[40px]" />
            </div>

            <nav>
                {/* Menu */}
                <ul className="hidden md:flex">
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Experience</li>
                    <li>Contact</li>
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
                    <li>Contact</li>
                </ul>
            </nav>

            <nav className="hidden"></nav>

            {/* social */}
        </div>
    )
}
export default Navbar
