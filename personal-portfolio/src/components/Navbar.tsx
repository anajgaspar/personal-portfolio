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
        <Navbar className="!bg-purple-950 shadow-md sticky top-0 z-50">
            <NavbarBrand href="#inicio">
                <span className="self-center whitespace-nowrap text-lg font-semibold text-black">
                    &lt;anajgaspar/&gt;
                </span>
            </NavbarBrand>
            <div className="flex md:order-2 items-center gap-2">
                <Button onClick={toggleLanguage} className="text-white text-xl cursor-pointer">
                    <img src={language === "pt" ? "/flags/us.svg" : "/flags/br.svg"} alt={language === "pt" ? "English" : "Português"} className="w-6 h-5 rounded-full object-cover"/>
                </Button>
                <NavbarToggle />
            </div>
            <NavbarCollapse>
                <NavbarLink href="#inicio" className="text-white text-base font-semibold hover:text-purple-300">
                    {t("nav.home")}
                </NavbarLink>
                <NavbarLink href="#skills" className="text-white text-base font-semibold hover:text-purple-300">
                    {t("nav.skills")}
                </NavbarLink>
                <NavbarLink href="#projetos" className="text-white text-base font-semibold hover:text-purple-300">
                    {t("nav.projects")}
                </NavbarLink>
                <NavbarLink href="#contato" className="text-white text-base font-semibold hover:text-purple-300">
                    {t("nav.contact")}
                </NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}