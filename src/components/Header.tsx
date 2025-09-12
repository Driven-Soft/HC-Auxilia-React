import { Link } from "react-router-dom";

const Header = () => {
  return (
     <header>
       <Link to="/"><img src="/imagens/icones/HCAuxiliaLogo.png" alt="Logo" /></Link>
     <nav>
       <ul>
         <li>
             <Link to="/"><img src="/imagens/icones/home.png" alt="Página Inicial" /><span>Início</span></Link></li>
         <li>
             <Link to="/sobre"><img src="/imagens/icones/sobre.png" alt="Sobre" /><span>Sobre</span></Link></li>
         <li>
             <Link to="/contato"><img src="/imagens/icones/contato.png" alt="Contato" /><span>Contato</span></Link></li>
         <li>
             <Link to="https://portaldopaciente.hc.fm.usp.br/manuais-portal"><img src="/imagens/icones/manuais.png" alt="Manuais" /><span>Manuais</span></Link></li>
         <li>
             <Link to="/integrantes"><img src="/imagens/icones/integrantes.png" alt="Integrantes" /><span>Integrantes</span></Link></li>
       </ul>
     </nav>
    {/* PARTE DIREITA DO HEADER */}
     <div> {/* header direito */}
      <div> {/* busca */}
          <img src="/imagens/icones/pesquisar.png" alt="Pesquisar" />
          <input type="search" name="search" placeholder="Pesquisar" />
      </div>
      <div id="burger" > {/* class = burger */}
        <img src="/imagens/icones/burger.png" alt="Mais Opções" />
      </div>
     </div>
    </header>
  );
};

export default Header;
