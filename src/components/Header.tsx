import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const pages = [
    { titulo: "Início", to: "/", aliases: ["home", "início", "inicio"] },
    { titulo: "Sobre", to: "/sobre", aliases: ["sobre", "quem somos"] },
    { titulo: "Contato", to: "/contato", aliases: ["contato", "fale", "fale conosco"] },
    { titulo: "Notificações", to: "/contato/notificacoes", aliases: ["notificações", "notificacoes", "alertas"] },
    { titulo: "Área do Cuidador", to: "/cuidador", aliases: ["cuidador", "área do cuidador", "cuidadores"] },
    { titulo: "FAQ", to: "/faq", aliases: ["faq", "perguntas frequentes", "dúvidas", "duvidas"] },
    { titulo: "Feedback", to: "/feedback", aliases: ["feedback", "pesquisa"] },
    { titulo: "Integrantes", to: "/integrantes", aliases: ["integrantes", "equipe"] },
    { titulo: "Manuais", to: "/manuais", aliases: ["manuais", "manual"] },
    { titulo: "Manuais — Com Cadastro", to: "/manuais/comcadastro", aliases: ["com cadastro", "comcadastro"] },
    { titulo: "Manuais — Sem Cadastro", to: "/manuais/semcadastro", aliases: ["sem cadastro", "semcadastro"] },
    { titulo: "Manual Teleconsulta", to: "/manuais/teleconsulta", aliases: ["teleconsulta", "manual teleconsulta"] },
  ];

  function Suggestions({
    query,
    onNavigate,
  }: {
    query: string;
    onNavigate: (to: string) => void;
  }) {
    const q = query.trim().toLowerCase();
    const matches = pages
      .filter((p) =>
        [p.titulo, ...(p.aliases || [])].some((s) =>
          s.toLowerCase().includes(q)
        )
      )
      .slice(0, 6);

    if (matches.length === 0) {
      return (
        <div className="p-2 text-sm text-gray-600 dark:text-gray-300">
          Nenhuma página encontrada
        </div>
      );
    }

    return (
      <ul className="divide-y-2 divide-gray-200 dark:divide-gray-800">
        {matches.map((m) => (
          <li key={m.to}>
            <button
              onClick={() => onNavigate(m.to)}
              className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-700 dark:border-white dark:border-2 cursor-pointer"
            >
              <p className="dark:text-yellow-300">
              {m.titulo}
              </p>
            </button>
          </li>
        ))}
      </ul>
    );
  }

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="dark:bg-black dark:from-black dark:to-black flex items-center bg-gradient-to-r from-[#3F58FF] to-[#00BBD3] px-3 py-2 gap-1 shadow-[0_2px_5px_rgba(0,0,0,0.3)] top-0 z-40 min-h-[34px] sm:px-4 sm:gap-3 md:gap-4 lg:px-6 ">
      {/* Logo */}
      <Link
        to="/"
        className="flex-shrink-0 w-11 h-11 sm:w-14 sm:h-14 md:w-18 md:h-18 lg:w-20 lg:h-20 transition-all duration-200 mr-1"
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
          <ItensHeader icone={manuaisIcon} titulo="Manuais" to="/manuais" />
          <ItensHeader
            icone={integrantesIcon}
            titulo="Integrantes"
            to="/integrantes"
          />
        </ul>
      </nav>

      {/* Barra de pesquisa (navegação entre páginas) */}
      <div className="relative flex-1 flex items-center bg-[#f5f5fe] rounded-lg gap-2 shadow-[0_2px_10px_rgba(0,0,0,0.3)]  px-2 py-1 min-w-[100px] max-w-full mx-2 sm:mx-3 md:mx-4">
        <img
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex-shrink-0 ml-1 sm:ml-2"
          src={pesquisarIcon}
          alt="Pesquisar"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const q = query.trim().toLowerCase();
              if (!q) return;
              const match = pages.find((p) =>
                [p.titulo, ...(p.aliases || [])].some((s) =>
                  s.toLowerCase().includes(q)
                )
              );
              if (match) {
                setQuery("");
                navigate(match.to);
              }
            }
          }}
          placeholder="Pesquisar"
          className="w-full border-none outline-none px-1 py-2 sm:px-2 sm:py-3 md:py-4 bg-transparent text-sm sm:text-base placeholder:text-muted-foreground"
        />

        {/* Sugestões simples */}
        {query.trim().length > 0 && (
          <div className="absolute left-0 right-0 top-full mt-1 bg-white dark:bg-black rounded-md shadow-lg z-50">
            <Suggestions
              query={query}
              onNavigate={(to) => {
                setQuery("");
                navigate(to);
              }}
            />
          </div>
        )}
      </div>

      {/* Burger mobile */}
      <div className="lg:hidden relative flex-shrink-0">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Menu"
        >
          <img
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 dark:invert"
            src={burgerIcon}
            alt="Menu"
          />
        </button>

        {/* Side menu estilo slide */}
        <div
          className={`fixed top-0 right-0 h-full bg-gradient-to-r from-[#3fa2ff] to-[#007fe7] shadow-lg z-50 
        dark:bg-black dark:from-black dark:to-black
          transition-all duration-500 ease-in-out
          ${mobileMenuOpen ? "w-64" : "w-0"}`}
        >
          {/* Botão de fechar — só aparece quando o menu está aberto */}
          {mobileMenuOpen && (
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl px-3 py-1 bg-[#009ee7] dark:bg-white rounded-full dark:text-black"
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
            <ItemHeaderMobile titulo="Contato" to="/contato" />
            <hr className="border-[#85c5e2]" />
            <ItemHeaderMobile titulo="Manuais" to="/manuais" />
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
