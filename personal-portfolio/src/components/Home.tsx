import { Button } from "flowbite-react";
import Typewriter from 'typewriter-effect';
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
            <div className="flex flex-col flex-wrap justify-center px-14 min-h-screen">
                <h1 className="text-3xl md:text-5xl font-semibold bg-linear-to-l from-[#FF67B6] via-[#FF67B6] to-[#3E46D7] bg-clip-text text-transparent">
                    {t("home.nome")}
                </h1>
                <div>
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
                <a href={t('home.pdf')} target="_blank" className="w-0">
                    <Button className="cursor-pointer w-20 h-[30px] mt-4 gap-1 bg-white text-xs text-purple-950">
                        <span className="bg-linear-to-l from-[#FF67B6] via-[#FF67B6] to-[#3E46D7] bg-clip-text text-transparent flex items-center gap-1">
                            <svg
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                            >
                                <defs>
                                    <linearGradient id="gradienteIcone" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style={{ stopColor: '#FF67B6', stopOpacity: 1 }} />
                                        <stop offset="50%" style={{ stopColor: '#9E56C6', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#3E46D7', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                                <path
                                    fill="url(#gradienteIcone)"
                                    fillRule="evenodd"
                                    d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2 2 2 0 0 0 2 2h12a2 2 0 0 0 2-2 2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2V4a2 2 0 0 0-2-2h-7Zm-6 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h.5a2.5 2.5 0 0 0 0-5H5Zm1.5 3H6v-1h.5a.5.5 0 0 1 0 1Zm4.5-3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1.376A2.626 2.626 0 0 0 15 15.375v-1.75A2.626 2.626 0 0 0 12.375 11H11Zm1 5v-3h.375a.626.626 0 0 1 .625.626v1.748a.625.625 0 0 1-.626.626H12Zm5-5a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1h1a1 1 0 1 0 0-2h-2Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            {t("home.resumo")}
                        </span>
                    </Button>
                </a>
            </div>
            <div className="px-4 sm:px-6 lg:px-10 mb-8">
                <div className="flex mx-auto h-[1px] bg-linear-to-l from-[#FF67B6] via-[#FF67B6] to-[#3E46D7] mt-10"></div>
            </div>
        </div>
    )
}