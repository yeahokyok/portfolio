import React from "react"

const Contact = () => {
    return (
        <div name="skills" className="h-full w-full bg-gray-900 text-gray-300">
            {/* Container */}
            <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4">
                <div className="text-center">
                    <p className="mb-4 inline border-b-4 border-[#FF8C00] text-4xl font-bold">
                        Let's Connect
                    </p>
                    <p className="py-6 text-lg">
                        If you've got questions, thoughts or just want to talk,
                        go ahead and say hello.
                    </p>
                    <div className="flex justify-center">
                        <a href="mailto: yeahokyok@gmail.com">
                            <button className="group my-2 flex items-center justify-center border-2 px-6 py-3 text-gray-300 transition-colors duration-300 hover:border-[#FF8C00] hover:bg-[#FF8C00]">
                                Say Hello
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
