import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export function CustomNavbar() {
    return (
        <Navbar className="!bg-purple-950 shadow-md sticky top-0 z-50">
            <NavbarBrand href="#inicio">
                <span id="code-text" className="self-center whitespace-nowrap text-lg font-semibold text-black">
                    &lt;anajgaspar/&gt;
                </span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink href="#inicio" id="code-text" className="text-white text-base font-semibold hover:text-purple-300">
                    Ínicio
                </NavbarLink>
                <NavbarLink href="#skills" id="code-text" className="text-white text-base font-semibold hover:text-purple-300">
                    Habilidades
                </NavbarLink>
                <NavbarLink href="#projetos" id="code-text" className="text-white text-base font-semibold hover:text-purple-300">
                    Projetos
                </NavbarLink>
            </NavbarCollapse>
        </Navbar>
    )
}

export function scrollToSection(id: string, offset: number = 0) {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }