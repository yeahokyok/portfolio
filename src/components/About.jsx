import React from "react"

const About = () => {
    return (
        <div
            name="about"
            className="h-screen w-full  bg-gray-900 text-gray-300"
        >
            <div className="flex h-full w-full flex-col items-center justify-center">
                <div className="grid w-full max-w-[1000px] grid-cols-2 gap-8">
                    <div className="pb-8 pl-4 sm:text-right">
                        <p className="inline border-b-4 border-[#FF8C00] text-4xl font-bold">
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className="grid w-full max-w-[1000px] gap-8 px-4 sm:grid-cols-2">
                    <div className="text-4xl font-bold sm:text-right">
                        <p>
                            Hi. I'm Yok, nice to meet you. Please take a look
                            around.
                        </p>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Morbi lacinia vel urna accumsan efficitur.
                            Proin at sollicitudin lectus. Proin auctor neque nec
                            vulputate egestas. Sed lectus metus, eleifend id
                            magna a, facilisis aliquam nibh.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
