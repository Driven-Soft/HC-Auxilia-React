import { useParams } from "react-router-dom";
import { integrantes } from "../../data/integrantes";
import VoltarButton from "../../components/VoltarButton";
import imgGitHub from "/src/assets/icones/github.svg";
import imgLinkedIn from "/src/assets/icones/linkedin.svg"

const IntegranteDetalhe = () => {
const { rm } = useParams();
const integrante = integrantes.find((i) => i.rm === rm);

const abrirLink = (url: string) => {
window.open(url, "_blank", "noopener,noreferrer");
};

  if (!integrante) return <h1>Integrante não encontrado</h1>;

  return (
    <section>
      <section>
        <img src={integrante.img} alt={`Foto de ${integrante.nome}`} />
        <h1>{integrante.nome}</h1>
        <h3>Desenvolvedor Full Stack Junior</h3>
        <p>Estudante de Análise e Desenvolvimento de Sistemas - FIAP</p>
        <p><b>RM:</b> {integrante.rm}</p>
      </section>

      <section>
        <div>
          <h2>Sobre Mim</h2>
          <p>{integrante.descricao}</p>
        </div>
        <div>
          <button onClick={() => abrirLink(integrante.git)}>
          <img src={imgGitHub} alt="GitHub" width={20} height={20} />GitHub
          </button>

          <button onClick={() => abrirLink(integrante.linkedIn)}>
          <img src={imgLinkedIn} alt="LinkedIn" width={20} height={20} />LinkedIn
          </button>

          <p>São Paulo - Brasil</p>
          <p>Contato: <a href={`mailto:${integrante.email}`} target="_blank" rel="noopener noreferrer">{integrante.email}</a></p>
        </div>
      </section>

    <VoltarButton />
    </section>
  );
};

export default IntegranteDetalhe;