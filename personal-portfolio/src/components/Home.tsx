import { Button } from "flowbite-react";
import Typewriter from 'typewriter-effect';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMailUnread } from "react-icons/io5";
import { IoFolderOpen } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";
import i18n from "@/i18n";

export function Inicio() {
    const { t } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);

    const toggleLanguage = () => {
        const novoIdioma = language === "pt" ? "en" : "pt";
        i18n.changeLanguage(novoIdioma);
        localStorage.setItem("lang", novoIdioma);
        setLanguage(novoIdioma);
    };

    useEffect(() => {
        const idiomaSalvo = localStorage.getItem("lang");
        if (idiomaSalvo && idiomaSalvo !== i18n.language) {
            i18n.changeLanguage(idiomaSalvo);
            setLanguage(idiomaSalvo);
        }
    }, []);

    return (
        <div id="inicio" className="scroll-mt-24 container mx-auto">
            <div className="flex flex-col flex-wrap items-center justify-center px-14 min-h-screen">
                <h1 className="text-3xl md:text-5xl font-medium text-black">
                    {t("home.nome")}
                </h1>
                <div className="h-[50px]">
                    <h1 id="code-text" className="text-2xl md:text-4xl text-white">
                        <Typewriter
                            options={{
                                strings: [t("home.typewriter")],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                </div>
                <a href={t('home.pdf')} target="_blank">
                    <Button pill className="cursor-pointer w-20 p-0 gap-1 mt-8 h-7 bg-white text-xs text-purple-950 transition transform duration-300 hover:-translate-y-1">
                        <IoFolderOpen className="h-[15px] w-[15px]" />
                        {t("home.resumo")}
                    </Button>
                </a>
                <div className="flex flex-row items-center justify-center mt-2 gap-2">
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