import { Link } from "react-router-dom";
import type { Integrante } from "../data/integrantes";

interface IntegranteCardProps {
  integrante: Integrante
}

const IntegranteCard = ({integrante}: IntegranteCardProps) => {
  return (
    <div>
      <img src={integrante.img} alt={`Imagem do integrante ${integrante.nome}`} />
      <div>
        <p><b>Aluno: </b>{integrante.nome}</p>
        <p><b>Turma: </b>1TDSPK</p>
        <p><b>RM: </b>{integrante.rm}</p>
        <br />

        <p>
          <b>Perfil do Github: </b>
          <a href={integrante.git} target="_blank" rel="noopener noreferrer">{integrante.git}</a>
        </p>

        <p>
          <b>Perfil do LinkedIn: </b>
          <a href={integrante.linkedIn} target="_blank" rel="noopener noreferrer">{integrante.linkedIn}</a>
        </p>
        
        <Link to={`/integrante/${integrante.rm}`}>Ver mais detalhes</Link>

      </div>
    </div>
  )
}

export default IntegranteCard