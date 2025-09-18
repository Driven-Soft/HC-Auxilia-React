import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HCAuxiliaLogo from "../assets/icones/HCAuxiliaLogo.png";
import homeIcon from "../assets/icones/home.png";
import sobreIcon from "../assets/icones/sobre.png";
import contatoIcon from "../assets/icones/contato.png";
import manuaisIcon from "../assets/icones/manuais.png";
import integrantesIcon from "../assets/icones/integrantes.png";
import pesquisarIcon from "../assets/icones/pesquisar.png";
import burgerIcon from "../assets/icones/burger.png";
import ItensHeader from "./ItensHeader";
import ItemHeaderMobile from "./ItemHeaderMobile";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="flex items-center bg-gradient-to-r from-[#3F58FF] to-[#00BBD3] px-3 py-2 gap-2 shadow-[0_2px_5px_rgba(0,0,0,0.3)] top-0 z-40 min-h-[34px] sm:px-4 sm:gap-3 md:gap-4 lg:px-6">
      {/* Logo */}
      <Link
        to="/"
        className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 transition-all duration-200"
      >
        <img
          src={HCAuxiliaLogo}
          alt="Logo"
          className="w-full h-full object-contain"
        />
      </Link>

      {/* Botão "Início" visível em mobile */}
      <div className="lg:hidden flex-shrink-0">
        <ItensHeader icone={homeIcon} titulo="Início" to="/" />
      </div>

      {/* Navegação desktop */}
      <nav className="hidden lg:flex flex-shrink-0">
        <ul className="flex gap-1 xl:gap-2 list-none">
          <ItensHeader icone={homeIcon} titulo="Início" to="/" />
          <ItensHeader icone={sobreIcon} titulo="Sobre" to="/sobre" />
          <ItensHeader icone={contatoIcon} titulo="Contato" to="/contato" />
          <ItensHeader
            icone={manuaisIcon}
            titulo="Manuais"
            href="https://portaldopaciente.hc.fm.usp.br/manuais-portal"
          />
          <ItensHeader icone={integrantesIcon} titulo="Integrantes" to="/integrantes" />
        </ul>
      </nav>

      {/* Barra de pesquisa */}
      <div className="flex-1 flex items-center bg-[#f5f5fe] rounded-lg gap-2 shadow-[0_2px_10px_rgba(0,0,0,0.3)]  px-2 py-1 min-w-[100px] max-w-full mx-2 sm:mx-3 md:mx-4">
        <img
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex-shrink-0 ml-1 sm:ml-2"
          src={pesquisarIcon}
          alt="Pesquisar"
        />
        <input
          type="search"
          placeholder="Pesquisar"
          className="w-full border-none outline-none px-1 py-2 sm:px-2 sm:py-3 md:py-4 bg-transparent text-sm sm:text-base placeholder:text-muted-foreground"
        />
      </div>

      {/* Burger mobile */}
      <div className="lg:hidden relative flex-shrink-0">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Menu"
        >
          <img
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            src={burgerIcon}
            alt="Menu"
          />
        </button>

        {/* Side menu estilo slide */}
      <div
        className={`fixed top-0 right-0 h-full bg-gradient-to-r from-[#3fa2ff] to-[#007fe7] shadow-lg z-50 
          transition-all duration-500 ease-in-out
          ${mobileMenuOpen ? "w-64" : "w-0"}`}
      >
        {/* Botão de fechar — só aparece quando o menu está aberto */}
        {mobileMenuOpen && (
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-white text-2xl px-3 py-1 bg-[#009ee7] rounded-full"
          >
            ✕
          </button>
        )}

        {/* Conteúdo do menu */}
        <ul
          className={`flex flex-col gap-4 px-6 pt-18 overflow-hidden 
            ${mobileMenuOpen ? "opacity-100" : "opacity-0"} 
            transition-opacity duration-300 delay-200`}
        >
          <ItemHeaderMobile titulo="Sobre" to="/sobre" />
          <hr className="border-[#85c5e2]" />
          <ItemHeaderMobile titulo="Contato" to="/contato"/>
          <hr className="border-[#85c5e2]" />
          <ItemHeaderMobile
            titulo="Manuais"
            href="https://portaldopaciente.hc.fm.usp.br/manuais-portal"
          />
          <hr className="border-[#85c5e2]" />
          <ItemHeaderMobile titulo="Integrantes" to="/integrantes" />
        </ul>
      </div>

      {/* Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-/40 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
    </header>
  );
};

export default Header;