import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";
import i18n from "@/i18n"

interface Projeto {
    id: number
    titulo: string
    imagem: string
    descricao: string
    tecnologias?: string[]
    github?: string
}

export function Projeto() {
    const [selecionado, setSelecionado] = useState<Projeto | null>(null);
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

    const projetos: Projeto[] = [
        {
            id: 1,
            titulo: t("projects.items.0.titulo"),
            imagem: '/spoiler-projects/spoiler-api1.png',
            descricao: t("projects.items.0.descricao"),
            tecnologias: ['HTML5', 'CSS3', 'JavaScript', 'Flask', 'MySQL'],
            github: 'https://github.com/Draco-Imperium/API_FATEC1'
        },
        {
            id: 2,
            titulo: t("projects.items.1.titulo"),
            imagem: '/spoiler-projects/spoiler-api2.png',
            descricao: t("projects.items.1.descricao"),
            tecnologias: ['HTML5', 'CSS3', 'React', 'Sass', 'JavaScript', 'TypeScript', 'NodeJS'],
            github: 'https://github.com/GeneSys-fatec/API-2DSM'
        },
        {
            id: 3,
            titulo: t("projects.items.2.titulo"),
            imagem: '/spoiler-projects/spoiler-portfolio.png',
            descricao: t("projects.items.2.descricao"),
            tecnologias: ['HTML5', 'CSS3', 'React', 'TypeScript', 'TailwindCSS'],
            github: 'https://github.com/anajgaspar/personal-portfolio'
        },
        {
            id: 4,
            titulo: t("projects.items.3.titulo"),
            imagem: '/spoiler-projects/spoiler-embreve.png',
            descricao: t("projects.items.3.descricao"),
            tecnologias: [],
            github: ''
        }
    ]

    return (
        <div id="projetos" className="flex flex-col justify-center items-center scroll-mt-14 container mx-auto mt-10">
            <div className="flex flex-row items-center w-full mx-auto gap-2 px-14 mb-10">
                <div className="flex-grow h-[2px] bg-white" />
                <h1 className="text-2xl text-white font-semibold whitespace-nowrap">&lt;{t("projects.title")}/&gt;</h1>
                <div className="flex-grow h-[2px] bg-white" />
            </div>
            <div className="px-4 sm:px-6 lg:px-10 mb-8">
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projetos.map((projeto) => (
                            <motion.div
                                layoutId={`card-${projeto.id}`}
                                key={projeto.id}
                                onClick={() => setSelecionado(projeto)}
                                className="bg-white/90 backdrop-blur-md rounded-xl p-4 cursor-pointer shadow-md hover:scale-105 transition-transform duration-300">
                                <img src={projeto.imagem} alt={projeto.titulo} className="w-full h-40 object-cover rounded-lg mb-3" />
                                <h3 className="text-lg font-semibold text-center text-black">{projeto.titulo}</h3>
                            </motion.div>
                        ))}
                    </div>
                    <AnimatePresence>
                        {selecionado && (
                            <>
                                <motion.div
                                    className="fixed inset-0 bg-black/70 z-40"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setSelecionado(null)} />
                                <motion.div
                                    layoutId={`card-${selecionado.id}`}
                                    className="fixed z-50 top-1/2 left-1/2 w-[90vw] max-w-xl bg-white rounded-xl p-6 shadow-2xl -translate-x-1/2 -translate-y-1/2">
                                    <button onClick={() => setSelecionado(null)} className="absolute top-0 right-2 text-2xl text-purple-900 hover:text-black">
                                        &times;
                                    </button>
                                    <img src={selecionado.imagem} alt={selecionado.titulo} className="w-full h-48 object-cover rounded-lg mb-4" />
                                    <h2 className="text-2xl font-bold text-black mb-2">{selecionado.titulo}</h2>
                                    <p className="text-sm text-gray-800 mb-4">{selecionado.descricao}</p>

                                    {Array.isArray(selecionado.tecnologias) && selecionado.tecnologias.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {selecionado.tecnologias.map((tec, i) => (
                                                <span key={i} className="text-sm border border-purple-900 text-purple-900 rounded-full px-3 py-1">{tec}</span>
                                            ))}
                                        </div>
                                    )}
                                    {selecionado.github && (
                                        <a href={selecionado.github} target="_blank" className="inline-flex items-center gap-2 p-2 rounded-full bg-purple-900 text-white hover:bg-purple-700 transition">
                                            <FaGithub />
                                        </a>
                                    )}
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </>
            </div>
        </div>
    )
}