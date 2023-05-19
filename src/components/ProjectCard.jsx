import React from "react"

const ProjectCard = ({ index, project }) => {
    return (
        <div
            key={index}
            style={{ backgroundImage: `url(${project.image})` }}
            className="content-div group container mx-auto flex items-center justify-center rounded-md text-center shadow-lg shadow-[#040c16]"
        >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
                <span className="font bold text-2xl tracking-wider text-white ">
                    {project.name}
                </span>
                <div className="pt-8 text-center ">
                    <a href={project.github} target="_blank" rel="noreferrer">
                        <button className="m-2  w-[100px] border-2 px-4 py-3 text-center text-lg font-bold text-white hover:border-[#FF8C00] hover:bg-[#FF8C00]">
                            Code
                        </button>
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer">
                        <button className="m-2 w-[100px] border-2 px-4 py-3 text-center text-lg font-bold text-white hover:border-[#FF8C00] hover:bg-[#FF8C00]">
                            Live
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
