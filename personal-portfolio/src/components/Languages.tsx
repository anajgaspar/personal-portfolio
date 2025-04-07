import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";
import i18n from "@/i18n"

export function Languages() {
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
        <div id="skills" className="scroll-mt-14 container mx-auto px-14">
            <div className="flex flex-row items-center gap-2 mt-10">
                <div className="flex-grow h-[2px] bg-white" />
                <h1 className="text-2xl text-white font-semibold whitespace-nowrap">&lt;{t("languages.title")}/&gt;</h1>
                <div className="flex-grow h-[2px] bg-white" />
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center gap-10 md:gap-20 mt-12 mx-auto max-w-5xl">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="w-12 h-12" alt="HTML5" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="w-12 h-12" alt="CSS3" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-12 h-12" alt="JavaScript" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-12 h-12" alt="TypeScript" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="w-12 h-12" alt="React" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-12 h-12" alt="Tailwind CSS" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" className="w-12 h-12" alt="Figma" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" className="w-12 h-12" alt="Node.js" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="w-12 h-12" alt="Python" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" className="w-12 h-12" alt="MySQL" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" className="w-12 h-12" alt="AWS" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" className="w-12 h-12" alt="Docker" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" className="w-12 h-12" alt="Git" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" className="w-12 h-12" alt="Jira" />
            </div>
        </div>
    )
}