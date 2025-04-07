import { Card } from "flowbite-react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export function Projects() {
    const [projetoSelecionado, setProjetoSelecionado] = useState<Projeto | null>(null)

    interface Projeto {
        id: number
        titulo: string
        imagem: string
        descricao: string
        tecnologias?: string[]
        github?: string
    }

    const projetos = [
        {
            id: 1,
            titulo: "Desempenho de Vereadores",
            imagem: "/spoiler-api1.png",
            descricao: 'Desenvolvimento de uma página web responsiva com visualizações gráficas para representar a atuação geral da câmara.',
            tecnologias: ['Flask', 'Javascript', 'MySQL'],
            github: "https://github.com/Draco-Imperium/API_FATEC1"
        },
        {
            id: 2,
            titulo: "Dashboard de Indicadores",
            imagem: "/spoiler-api2.png",
            descricao: 'Desenvolvimento de um dashboard de indicadores para monitorar e visualizar o impacto da plataforma, fornecendo dados estratégicos para patrocinadores e stakeholders.',
            tecnologias: ['React', 'Sass', 'JavaScript', 'TypeScript', 'NodeJS'],
            github: "https://github.com/GeneSys-fatec/API-2DSM"
        },
        {
            id: 3,
            titulo: "Portfólio Pessoal",
            imagem: "/spoiler-portfolio.png",
            descricao: 'Desenvolvimento de um portfólio pessoal que reúne projetos e experiências.',
            tecnologias: ['React', 'TypeScript', 'TailwindCSS'],
            github: "https://github.com/anajgaspar/personal-portfolio"
        },
    ]
    return (
        <div id="projetos" className="scroll-mt-10 container mx-auto mt-10 px-14 mb-4">
            <div className="bg-black h-[3px]"></div>
            <h1 className="mt-10 text-2xl text-white font-semibold">&lt;Projetos/&gt;</h1>
            <div className="mt-12 pl-4 mx-auto max-w-5xl transition transform duration-300 hover:-translate-y-1">
                <p className="text-white">&gt; Clique no projeto que você deseja saber mais.</p>
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center gap-10 mt-12 mx-auto max-w-5xl">
                {projetos.map((projeto) => (
                    <Card key={projeto.id} className="max-w-80 !bg-white cursor-pointer" onClick={() => setProjetoSelecionado(projeto)}>
                        <img src={projeto.imagem} alt={projeto.titulo} className="w-70 h-40" />
                        <h5 className="text-md font-semibold tracking-tight">{projeto.titulo}</h5>
                    </Card>
                ))}
            </div>
            {projetoSelecionado && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
                    <div className="bg-white text-black rounded-xl shadow-lg w-3xl h-xl p-8 relative">
                        <button onClick={() => setProjetoSelecionado(null)} className="cursor-pointer absolute top-3 right-5 text-purple-950 text-3xl hover:text-black" >&times;</button>
                        <h2 className="text-2xl font-bold mb-1 text-black">{projetoSelecionado.titulo}</h2>
                        <div className="h-[3px] bg-black mb-4" />
                        <p className="text-base mb-4 text-black">{projetoSelecionado.descricao}</p>

                        {projetoSelecionado.tecnologias && (
                            <>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {projetoSelecionado.tecnologias.map((tec, index) => (
                                        <span key={index} className="border border-purple-950 text-purple-950 text-sm px-3 py-1 rounded-full">
                                            {tec}
                                        </span>
                                    ))}
                                </div>
                            </>
                        )}

                        {(projetoSelecionado.github) && (
                            <>
                                <div className="flex gap-4">
                                    {projetoSelecionado.github && (
                                        <a href={projetoSelecionado.github} target="_blank" className="cursor-pointer rounded-full p-2 bg-purple-950 text-white transition transform duration-300 hover:-translate-y-1">
                                            <FaGithub />
                                        </a>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}