import { Button } from "flowbite-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMailUnread } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";
import i18n from "@/i18n"

export function Footer() {
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
        <div id="contato" className="scroll-mt-14 container mx-auto px-14">
            <div className="flex flex-row items-center gap-2 mt-10">
                <div className="flex-grow h-[2px] bg-white" />
                <h1 className="text-2xl text-white font-semibold whitespace-nowrap">&lt;{t("footer.title")}/&gt;</h1>
                <div className="flex-grow h-[2px] bg-white" />
            </div>
            <div className="flex flex-row items-center justify-center my-10 gap-10">
                <a href="https://github.com/anajgaspar" target="_blank" rel="noopener noreferrer">
                    <Button className="cursor-pointer transition transform duration-300 hover:-translate-y-1">
                        <FaGithub className="h-[40px] w-[40px]" />
                    </Button>
                </a>
                <a href="https://www.linkedin.com/in/ana-gaspar-957775325/" target="_blank" rel="noopener noreferrer">
                    <Button className="cursor-pointer transition transform duration-300 hover:-translate-y-1">
                        <FaLinkedinIn className="h-[40px] w-[40px]" />
                    </Button>
                </a>
                <a href="mailto:anajulia3907@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Button className="cursor-pointer transition transform duration-300 hover:-translate-y-1">
                        <IoMailUnread className="h-[40px] w-[40px]" />
                    </Button>
                </a>
            </div>
            <div className="flex justify-center items-center mt-14 mb-2">
                <p className="text-xs text-white font-light">© Copyright 2025 - Ana Gaspar - All Rights Reserved </p>
            </div>
        </div >
    )
}