interface IntegranteCardProps {
  nomeIntegrante: string;
  rmIntegrante: string;
  imgIntegrante: string;
  gitIntegrante: string;
  linkedIntegrante: string;
}

const IntegranteCard = ({nomeIntegrante,rmIntegrante,imgIntegrante,gitIntegrante,linkedIntegrante,}: IntegranteCardProps) => {
  return (
    <div>
      <img src={imgIntegrante} alt={`Imagem do integrante ${nomeIntegrante}`} />
      <div>
        <p><b>Aluno: </b>{nomeIntegrante}</p>
        <p><b>Turma: </b>1TDSPK</p>
        <p><b>RM: </b>{rmIntegrante}</p>
        <br />

        <p>
          <b>Perfil do Github: </b>
          <a href={gitIntegrante} target="_blank" rel="noopener noreferrer">{gitIntegrante}</a>
        </p>

        <p>
          <b>Perfil do LinkedIn: </b>
          <a href={linkedIntegrante} target="_blank" rel="noopener noreferrer">{linkedIntegrante}</a>
        </p>
      </div>
    </div>
  )
}

export default IntegranteCard