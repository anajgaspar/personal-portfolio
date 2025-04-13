import { useState } from "react";
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import i18n from "@/i18n";

export function CustomNavbar() {
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
        <Navbar className="!bg-purple-950 shadow-sm sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <NavbarBrand href="#inicio">
                    <span className="self-center whitespace-nowrap text-lg font-semibold text-white">
                        &lt;anajgaspar/&gt;
                    </span>
                </NavbarBrand>
                <div className="flex md:order-2 items-center gap-2">
                    <Button onClick={toggleLanguage} className="text-white text-xxl cursor-pointer md:hidden">
                        <img src={language === "pt" ? "/flags/us.png" : "/flags/br.png"} alt={language === "pt" ? "English" : "Português"} className="w-7 h-[20px] rounded-md"/>
                    </Button>
                    <NavbarToggle className="md:hidden" />
                </div>
                <div className="hidden md:flex justify-end items-center w-full">
                    <ul className="flex items-center gap-4">
                        <li>
                            <a href="#inicio" className="text-white text-base font-semibold relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#ad46ff] after:transition-width after:duration-300 after:ease-in-out hover:after:w-full">
                                {t("nav.home")}
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="text-white text-base font-semibold relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#ad46ff] after:transition-width after:duration-300 after:ease-in-out hover:after:w-full">
                                {t("nav.skills")}
                            </a>
                        </li>
                        <li>
                            <a href="#projetos" className="text-white text-base font-semibold relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#ad46ff] after:transition-width after:duration-300 after:ease-in-out hover:after:w-full">
                                {t("nav.projects")}
                            </a>
                        </li>
                        <li>
                            <a href="#contato" className="text-white text-base font-semibold relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#ad46ff] after:transition-width after:duration-300 after:ease-in-out hover:after:w-full">
                                {t("nav.contact")}
                            </a>
                        </li>
                        <li>
                            <Button onClick={toggleLanguage} className="text-white text-xl cursor-pointer">
                                <img src={language === "pt" ? "/flags/us.png" : "/flags/br.png"} alt={language === "pt" ? "English" : "Português"} className="w-7 h-[20px] rounded-md" />
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
            <NavbarCollapse id="mobile-menu" className="lg:hidden md:hidden">
                <div className="flex flex-col gap-2">
                    <a href="#inicio" className="text-white text-base font-semibold block py-2 pr-4 pl-3 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#9e6ffe] after:transition-width after:duration-300 after:ease-in-out hover:after:w-full">
                        {t("nav.home")}
                    </a>
                    <a href="#skills" className="text-white text-base font-semibold block py-2 pr-4 pl-3 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#9e6ffe] after:transition-width after:duration-300 after:ease-in-out hover:after:w-full">
                        {t("nav.skills")}
                    </a>
                    <a href="#projetos" className="text-white text-base font-semibold block py-2 pr-4 pl-3 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#9e6ffe] after:transition-width after:duration-300 after:ease-in-out hover:after:w-full">
                        {t("nav.projects")}
                    </a>
                    <a href="#contato" className="text-white text-base font-semibold block py-2 pr-4 pl-3 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#9e6ffe] after:transition-width after:duration-300 after:ease-in-out hover:after:w-full">
                        {t("nav.contact")}
                    </a>
                </div>
            </NavbarCollapse>
        </Navbar>
    );
}