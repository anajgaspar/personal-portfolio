// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  pt: {
    translation: {
      nav: {
        home: "Início",
        skills: "Habilidades",
        projects: "Projetos",
        contact: "Contato"
      },
      home: {
        nome: "Olá! Sou a Ana Gaspar,",
        typewriter: "Desenvolvedora de Software!",
        resumo: "Resumo",
        pdf: "/resumes/CurrículoPT.pdf"
      },
      languages: {
        title: "Habilidades"
      },
      projects: {
        title: "Projetos",
        items: [
          {
            "titulo": "Desempenho de Vereadores",
            "descricao": "Desenvolvimento de uma página web responsiva com visualizações gráficas para representar a atuação geral da câmara."
          },
          {
            "titulo": "Dashboard de Indicadores",
            "descricao": "Desenvolvimento de um dashboard de indicadores para monitorar e visualizar o impacto da plataforma, fornecendo dados estratégicos para patrocinadores e stakeholders."
          },
          {
            "titulo": "Portfólio Pessoal",
            "descricao": "Desenvolvimento de um portfólio pessoal que reúne projetos e experiências."
          },
          {
            "titulo": "Em breve",
            "descricao": "Novo projeto em andamento."
          }
        ]
      },
      footer: {
        title: "Contato"
      }
    },
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
      },
      home: {
        nome: "Hi! I'm Ana Gaspar",
        typewriter: "Software Developer!",
        resumo: "Resume",
        pdf: "/resumes/CurrículoEN.pdf"
      },
      languages: {
        title: "Skills"
      },
      projects: {
        title: "Projects",
        items: [
          {
            "titulo": "Council Members’ Performance",
            "descricao": "Development of a responsive web page with graphic visualizations to represent the overall performance of the city council."
          },
          {
            "titulo": "Dashboard",
            "descricao": "Development of a dashboard to monitor and visualize the platform's impact, providing strategic data to sponsors and stakeholders."
          },
          {
            "titulo": "Personal Portfolio",
            "descricao": "Development of a personal portfolio showcasing projects and experience."
          },
          {
            "titulo": "Coming Soon",
            "descricao": ""
          }
        ]
      },
      footer: {
        title: "Contact"
      }
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
