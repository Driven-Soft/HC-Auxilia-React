import { useParams } from "react-router-dom";
import { integrantes } from "../../data/integrantes";
import VoltarButton from "../../components/VoltarButton";
import imgGitHub from "/src/assets/icones/github.svg";
import imgLinkedIn from "/src/assets/icones/linkedin.svg"
import Wrapper from "../../components/Wrapper";
import InfoDiv from "../../components/InfoDiv";
import ButtonWrapper from "../../components/ButtonWrapper";
import InfoText from "../../components/InfoText";

const IntegranteDetalhe = () => {
const { rm } = useParams();
const integrante = integrantes.find((i) => i.rm === rm);

const abrirLink = (url: string) => {
window.open(url, "_blank", "noopener,noreferrer");
};

  if (!integrante) return (
    <Wrapper className="items-center justify-center h-screen">
     <InfoDiv>
      <InfoText>
        <p>Integrante não encontrado.</p>
      </InfoText>
      <VoltarButton />
     </InfoDiv>
    </Wrapper>
  )

  return (
    <section>
      <section className="bg-gradient-hero my-6 bg-background bg-gradient-to-b from-[#007fe7] to-[#3ea2ff] py-4 sm:py-10 shadow-[0_2px_5px_rgba(0,0,0,0.3)] dark:bg-[#0a0a0a] dark:from-[#0a0a0a] dark:to-[#0a0a0a] dark:border-white dark:border-2">
        <div className="container mx-auto px-4 sm:px-6 text-center text-white dark:text-yellow-300">
          <div className="max-w-3xl mx-auto">
            <img
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-elegant"
            src={integrante.img} alt={`Foto de ${integrante.nome}`} />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">{integrante.nome}</h1>
            <h3 className="text-xl text-primary-foreground/90 mb-6">Desenvolvedor Full Stack Junior</h3>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">Estudante de Análise e Desenvolvimento de Sistemas - FIAP</p>
            <p className="text-lg text-primary-foreground/80 leading-relaxed"><b>RM:</b> {integrante.rm}</p>
          </div>
        </div>
      </section>

      <Wrapper className="flex-col sm:flex-row">
        <InfoDiv className="flex-1 mt-4 text-center px-6">
          <h2 className="mt-5 text-xl font-bold text-blue-600 dark:text-yellow-300">Sobre Mim</h2>
          <p className="my-5 text-lg lg:text-xl text-[#313131] dark:text-yellow-300 font-medium text-center sm:text-left"
          >{integrante.descricao}</p>
        </InfoDiv>
        
        <InfoDiv className="flex flex-col flex-1 justify-center mt-4">  
          <div className="my-5 text-lg lg:text-xl font-medium text-center text-[#313131] dark:text-yellow-300">
            <h2 className="mb-7 text-lg lg:text-xl font-medium text-[#313131] dark:text-yellow-300">Interessado em colaborar ou discutir projetos? Entre em contato:</h2>
            <p>São Paulo - Brasil</p>
            <p>Contato: <a
            href={`mailto:${integrante.email}`} target="_blank" rel="noopener noreferrer"
            className="text-blue-600 underline">{integrante.email}</a></p>
          </div>

          <div className="flex flex-row gap-4 justify-center">
            <ButtonWrapper onClick={() => abrirLink(integrante.git)}
              className="flex-1 flex items-center justify-center gap-2">
              <img src={imgGitHub} alt="GitHub" width={20} height={20} />GitHub
            </ButtonWrapper>
            
            <ButtonWrapper onClick={() => abrirLink(integrante.linkedIn)}
              className="flex-1 flex items-center justify-center gap-2">
              <img src={imgLinkedIn} alt="LinkedIn" width={20} height={20} />LinkedIn
            </ButtonWrapper>
          </div>
        </InfoDiv>
      </Wrapper>

    <VoltarButton />
    </section>
  );
};

export default IntegranteDetalhe;