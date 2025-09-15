import { Link } from "react-router-dom";
import HCAuxiliaLogo from "../assets/icones/HCAuxiliaLogo.png";
import homeIcon from "../assets/icones/home.png";
import sobreIcon from "../assets/icones/sobre.png";
import contatoIcon from "../assets/icones/contato.png";
import manuaisIcon from "../assets/icones/manuais.png";
import integrantesIcon from "../assets/icones/integrantes.png";
import pesquisarIcon from "../assets/icones/pesquisar.png";
import burgerIcon from "../assets/icones/burger.png";

const Header = () => {
  return (
     <header>
       <Link to="/"><img src={HCAuxiliaLogo} alt="Logo" /></Link>
     <nav>
       <ul>
         <li>
             <Link to="/"><img src={homeIcon} alt="Página Inicial" /><span>Início</span></Link></li>
         <li>
             <Link to="/sobre"><img src={sobreIcon} alt="Sobre" /><span>Sobre</span></Link></li>
         <li>
             <Link to="/contato"><img src={contatoIcon} alt="Contato" /><span>Contato</span></Link></li>
         <li>
             <Link to="https://portaldopaciente.hc.fm.usp.br/manuais-portal"><img src={manuaisIcon} alt="Manuais" /><span>Manuais</span></Link></li>
         <li>
             <Link to="/integrantes"><img src={integrantesIcon} alt="Integrantes" /><span>Integrantes</span></Link></li>
       </ul>
     </nav>
    {/* PARTE DIREITA DO HEADER */}
     <div> {/* header direito */}
      <div> {/* busca */}
          <img src={pesquisarIcon} alt="Pesquisar" />
          <input type="search" name="search" placeholder="Pesquisar" />
      </div>
      <div id="burger" > {/* class = burger */}
        <img src={burgerIcon} alt="Mais Opções" />
      </div>
     </div>
    </header>
  );
};

export default Header;
