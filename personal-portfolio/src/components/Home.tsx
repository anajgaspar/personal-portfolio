import { Button } from "flowbite-react";
import Typewriter from 'typewriter-effect';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMailUnread } from "react-icons/io5";
import { IoFolderOpen } from "react-icons/io5";

export function Inicio() {
    return (
        <div id="inicio" className="scroll-mt-24 container mx-auto">
            <div className="flex flex-col flex-wrap items-center justify-center px-14 min-h-screen">
                <h1 className="text-5xl font-medium text-black">
                    Olá! Sou a Ana Gaspar,
                </h1>
                <div className="h-[50px]">
                    <h1 id="code-text" className="text-3xl text-white">
                        <Typewriter
                            options={{
                                strings: ['Desenvolvedora de Software!'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                </div>
                <a href="/Currículo.pdf" target="_blank">
                    <Button pill id="code-text" className="cursor-pointer w-25 p-0 gap-1 mt-8 h-8 bg-white text-purple-950 transition transform duration-300 hover:-translate-y-1">
                        <IoFolderOpen className="h-[15px] w-[15px]" />
                        Resumo
                    </Button>
                </a>
                <div className="hidden md:fixed md:left-2 md:top-1/2 md:-translate-y-1/2 md:flex md:flex-col md:items-center md:gap-2 md:z-50">
                    <a href="https://github.com/anajgaspar" target="_blank" rel="noopener noreferrer">
                        <Button className="cursor-pointer text-black transition transform duration-300 hover:-translate-y-1">
                            <FaGithub className="h-[20px] w-[20px]" />
                        </Button>
                    </a>
                    <a href="https://www.linkedin.com/in/ana-gaspar-957775325/" target="_blank" rel="noopener noreferrer">
                        <Button className="cursor-pointer text-black transition transform duration-300 hover:-translate-y-1">
                            <FaLinkedinIn className="h-[20px] w-[20px]" />
                        </Button>
                    </a>
                    <a href="mailto:anajulia3907@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Button className="cursor-pointer text-black transition transform duration-300 hover:-translate-y-1">
                            <IoMailUnread className="h-[20px] w-[20px]" />
                        </Button>
                    </a>
                    <div className="w-[2px] h-16 bg-black"></div>
                </div>
                <div className="md:hidden flex flex-row items-center justify-center mt-2 gap-2">
                    <a href="https://github.com/anajgaspar" target="_blank" rel="noopener noreferrer">
                        <Button className="cursor-pointer transition transform duration-300 hover:-translate-y-1">
                            <FaGithub className="h-[20px] w-[20px]" />
                        </Button>
                    </a>
                    <a href="https://www.linkedin.com/in/ana-gaspar-957775325/" target="_blank" rel="noopener noreferrer">
                        <Button className="cursor-pointer transition transform duration-300 hover:-translate-y-1">
                            <FaLinkedinIn className="h-[20px] w-[20px]" />
                        </Button>
                    </a>
                    <a href="mailto:anajulia3907@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Button className="cursor-pointer transition transform duration-300 hover:-translate-y-1">
                            <IoMailUnread className="h-[20px] w-[20px]" />
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    )
}