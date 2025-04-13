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
            "titulo": "Portfólio Acadêmico",
            "descricao": "Desenvolvimento de um portfólio acadêmico que reúne projetos e informações profissionais."
          },
          {
            "titulo": "Em breve",
            "descricao": ""
          }
        ]
      },
      footer: {
        title: "Contato",
        copyright: " Copyright 2025 - Ana Gaspar - Todos os direitos reservados",
        submit: "Vamos conversar!",
        description: "Sinta-se a vontade para me enviar uma mensagem! :)"
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
            "titulo": "Indicators Dashboard",
            "descricao": "Development of a dashboard to monitor and visualize the platform's impact, providing strategic data to sponsors and stakeholders."
          },
          {
            "titulo": "Academic Portfolio",
            "descricao": "Development of an academic portfolio showcasing projects and profissional information."
          },
          {
            "titulo": "Coming Soon",
            "descricao": ""
          }
        ]
      },
      footer: {
        title: "Contact",
        copyright: " Copyright 2025 - Ana Gaspar - All Rights Reserved",
        submit: "Let's talk!",
        description: "Feel free to send me a message! :)"
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
