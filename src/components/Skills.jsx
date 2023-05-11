import React from "react"
import {
    SiDjango,
    SiPython,
    SiSolidity,
    SiReact,
    SiJavascript,
    SiDocker,
    SiPostgresql,
    SiGit,
} from "react-icons/si"
import { TbApi, TbBrandGolang } from "react-icons/tb"

const Skills = () => {
    return (
        <div
            name="skills"
            className="h-screen w-full bg-gray-900 text-gray-300"
        >
            {/* Container */}
            <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4">
                <div>
                    <p className="inline border-b-4 border-[#FF8C00] text-4xl font-bold ">
                        Skills
                    </p>
                    <p className="py-4">
                        Technologies I have worked with and familiar with.
                    </p>
                </div>

                <div className="grid w-full grid-cols-2 gap-4 py-8 text-center sm:grid-cols-4">
                    <div className="duration-500 hover:scale-110">
                        <SiPython size={50} className="mx-auto" />
                        <p className="my-4">Python</p>
                    </div>
                    <div className="duration-500 hover:scale-110">
                        <SiDjango size={50} className="mx-auto" />
                        <p className="my-4">Django</p>
                    </div>
                    <div className="duration-500 hover:scale-110">
                        <SiPostgresql size={50} className="mx-auto" />
                        <p className="my-4">Postgresql</p>
                    </div>
                    <div className="duration-500 hover:scale-110">
                        <TbApi size={50} className="mx-auto" />
                        <p className="my-4">RESTful API</p>
                    </div>
                    <div className="duration-500 hover:scale-110">
                        <SiSolidity size={50} className="mx-auto" />
                        <p className="my-4">Solidity</p>
                    </div>
                    <div className="duration-500 hover:scale-110">
                        <TbBrandGolang size={50} className="mx-auto" />
                        <p className="my-4">Golang</p>
                    </div>
                    <div className="duration-500 hover:scale-110">
                        <SiJavascript size={50} className="mx-auto" />
                        <p className="my-4">Javascript</p>
                    </div>
                    <div className="duration-500 hover:scale-110">
                        <SiReact size={50} className="mx-auto" />
                        <p className="my-4">React</p>
                    </div>
                    <div className="duration-500 hover:scale-110">
                        <SiDocker size={50} className="mx-auto" />
                        <p className="my-4">Docker</p>
                    </div>
                    <div className="duration-500 hover:scale-110">
                        <SiGit size={50} className="mx-auto" />
                        <p className="my-4">Git</p>
                    </div>
                    {/* SiTailwindcss */}
                    {/* SiHtml5 */}
                    {/* SiCss3 */}
                    {/* SiFigma */}

                    {/* SiBootstrap */}
                    {/* SiAmazonaws */}
                    {/* SiHeroku */}
                </div>
            </div>
        </div>
    )
}

export default Skills
