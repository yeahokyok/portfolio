import React from "react"
import { HiArrowNarrowRight } from "react-icons/hi"

const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-gray-900">
            <div className="mx-auto flex h-full max-w-[1000px] flex-col justify-center px-8">
                <h3 className="text-lg text-[#FF8C00] sm:text-lg">
                    Hi there, my name is
                </h3>
                <h1 className="text-4xl font-bold text-gray-300 sm:text-7xl">
                    TEERAPAT CINTORNVICH
                </h1>
                <h2 className="text-2xl text-gray-400  sm:text-3xl">
                    I'm a Full Stack Developer
                </h2>
                <p className="max-w-[700px] py-4 text-gray-400">
                    with 4+ years of experience in software development. Skilled
                    in Python, Django, React, Solidity and blockchain
                    technologies.
                </p>
                <div className="flex space-x-4">
                    <button className="group my-2 flex items-center border-2 px-6 py-3 text-gray-300 hover:border-[#FF8C00] hover:bg-[#FF8C00]">
                        View Works
                    </button>
                    <button className="group my-2 flex items-center border-2 px-6 py-3 text-gray-300 hover:border-[#FF8C00] hover:bg-[#FF8C00]">
                        Download Resume
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
