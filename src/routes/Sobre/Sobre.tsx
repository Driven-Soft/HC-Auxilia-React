import InfoDiv from "../../components/InfoDiv"
import InfoText from "../../components/InfoText"
import VoltarButton from "../../components/VoltarButton"
import Wrapper from "../../components/Wrapper"


const Sobre = () => {
  return (
    <>
    <Wrapper className="flex-col">
      <section className="w-full h-full"> {/*SEÇÃO  DO MAIN GERAL*/}
        <InfoDiv className="flex items-center pt-2 md:pt-3 px-4 mt-4 justify-center">
          <h2 className="p-1 sm:p-4 text-2xl md:text-4xl text-[#4A4A4A] dark:text-yellow-300 font-bold">
            Sobre o HC Auxilia
          </h2>
        </InfoDiv>

        <InfoDiv>
          <InfoText>
            <p>O HC Auxilia é uma solução desenvolvida para reduzir as barreiras digitais no acesso ao Portal do Paciente do Hospital das Clínicas.</p>
          </InfoText>
          <InfoText>
            <p>Seu objetivo é apoiar pacientes, cuidadores e familiares em toda a jornada de saúde, tornando o acompanhamento mais simples, acessível e intuitivo.</p>
          </InfoText>
          <InfoText>
            <p>Com ele, a experiência digital deixa de ser um obstáculo e se transforma em um aliado no cuidado, ajudando a diminuir o absenteísmo em consultas e fortalecendo a relação entre paciente e hospital.</p>
          </InfoText>
          <InfoText>
            <p>O HC Auxilia promove inclusão digital, reduz o absenteísmo em consultas e aproxima cada paciente do cuidado com a própria saúde.</p>
          </InfoText>
        </InfoDiv>
      </section>
      <VoltarButton /> 
    </Wrapper>
    </>
  )
}

export default Sobre