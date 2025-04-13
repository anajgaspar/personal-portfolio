import { Button } from "flowbite-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMailUnread } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { IoChatbox } from "react-icons/io5";
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
        <div id="contato" className="scroll-mt-20 container mx-auto px-14 mt-8">
            <h1 className="text-2xl text-white text-center font-semibold">{t("footer.title")}</h1>
            <div className="flex mx-auto h-[1px] bg-linear-to-l from-[#FF67B6] via-[#FF67B6] to-[#3E46D7] max-w-2xs mt-2"></div>
            <p className="text-md text-white text-center mt-10">{t("footer.description")}</p>
            <div className="flex mx-auto justify-center">
                <a href="mailto:anajulia3907@gmail.com" target="_blank">
                    <Button className="cursor-pointer w-45 p-2 gap-1 mt-10 h-14 bg-white text-sm text-purple-950 transition transform duration-300 hover:-translate-y-1">
                        <span className="flex items-center gap-1 bg-linear-to-l from-[#FF67B6] via-[#FF67B6] to-[#3E46D7] bg-clip-text text-transparent">
                            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <defs>
                                    <linearGradient id="gradienteIcone" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style={{ stopColor: '#FF67B6', stopOpacity: 1 }} />
                                        <stop offset="50%" style={{ stopColor: '#9E56C6', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#3E46D7', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                                <path fill="url(#gradienteIcone)" fill-rule="evenodd" d="M3 5.983C3 4.888 3.895 4 5 4h14c1.105 0 2 .888 2 1.983v8.923a1.992 1.992 0 0 1-2 1.983h-6.6l-2.867 2.7c-.955.899-2.533.228-2.533-1.08v-1.62H5c-1.105 0-2-.888-2-1.983V5.983Zm5.706 3.809a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Zm2.585.002a1 1 0 1 1 .003 1.414 1 1 0 0 1-.003-1.414Zm5.415-.002a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Z" clip-rule="evenodd" />
                            </svg>
                            {t("footer.submit")}
                        </span>
                    </Button>
                </a>
            </div>
            <div className="flex flex-row items-center justify-center mt-10 mb-48 gap-10">
                <a href="https://github.com/anajgaspar" target="_blank" rel="noopener noreferrer">
                    <Button className="cursor-pointer">
                        <FaGithub className="h-[30px] w-[30px]" />
                    </Button>
                </a>
                <a href="https://www.linkedin.com/in/ana-gaspar-957775325/" target="_blank" rel="noopener noreferrer">
                    <Button className="cursor-pointer">
                        <FaLinkedinIn className="h-[30px] w-[30px]" />
                    </Button>
                </a>
            </div>
            <div className="flex justify-center mb-4">
                <p className="text-xs text-white font-light">&copy;{t("footer.copyright")}</p>
            </div>
        </div >
    )
}