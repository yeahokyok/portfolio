import React from "react"
import { projects } from "../data/projects.js"
import ProjectCard from "./ProjectCard"

const Projects = () => {
    return (
        <div
            name="projects"
            className="w-full bg-gray-900 text-gray-300 md:h-screen"
        >
            <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4">
                <div className="pb-8">
                    <p className="inline border-b-4 border-[#FF8C00] text-4xl font-bold text-gray-300">
                        Projects
                    </p>
                    <p className="py-6">
                        Projects I have worked on and currently working on.
                    </p>
                </div>

                {/* container for projects */}
                <div className="grid gap-4 sm:grid-cols-2">
                    {/* Gird Item */}
                    {projects.map((item, index) => (
                        <ProjectCard key={index} index={index} project={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
