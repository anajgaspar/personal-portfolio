import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";
import i18n from "@/i18n"

interface Habilidades {
    alt: string,
    imagem: string
}

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

    const habilidades: Habilidades[] = [
        {
            alt: 'HTML5',
            imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
        },
        {
            alt: 'CSS3',
            imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
        },
        {
            alt: 'JavaScript',
            imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
        },
        {
            alt: 'TypeScript',
            imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
        },
        {
            alt: 'React',
            imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
        },
        {
            alt: 'Tailwind CSS',
            imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
        },
        {
            alt: 'Figma',
            imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg'
        },
        {
            alt: 'Node.js',
            imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg'
        },
        {
            alt: 'Python',
            imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'
        },
        {
            alt: 'MySQL',
            imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg'
        },
        {
            alt: 'AWS',
            imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
        },
        {
            alt: 'Docker',
            imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg'
        },
        {
            alt: 'Git',
            imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'
        },
        {
            alt: 'Jira',
            imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg'
        }
    ]

    return (
        <div id="skills" className="scroll-mt-48 container mx-auto mt-14">
            <h1 className="text-2xl text-white text-center font-semibold">{t("languages.title")}</h1>
            <div className="flex mx-auto h-[1px] bg-linear-to-l from-[#FF67B6] via-[#FF67B6] to-[#3E46D7] max-w-2xs mt-2"></div>
            <div className="flex flex-row flex-wrap items-center justify-center gap-10 md:gap-10 mt-12 mx-auto max-w-5xl">
                {habilidades.map((habilidade) => (
                    <div key={habilidade.alt} className="bg-white rounded-lg p-6 border-l-4 border-purple-500">
                        <img src={habilidade.imagem} alt={habilidade.alt} className="w-12 h-12 transition transform duration-300 hover:-translate-y-1"></img>
                    </div>
                ))}
            </div>
            <div className="px-4 sm:px-6 lg:px-10">
                <div className="flex mx-auto h-[1px] bg-linear-to-l from-[#FF67B6] via-[#FF67B6] to-[#3E46D7] mt-20"></div>
            </div>
        </div>
    )
}