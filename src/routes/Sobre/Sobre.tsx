import InfoDiv from "../../components/InfoDiv"
import InfoText from "../../components/InfoText"
import VoltarButton from "../../components/VoltarButton"
import Wrapper from "../../components/Wrapper"


const Sobre = () => {
  return (
    <>
    <Wrapper className="flex-col">
      <section className="w-full h-full"> {/*SEÇÃO  DO MAIN GERAL*/}
        <InfoDiv className="mt-4">
          <h2 className="text-2xl lg:text-4xl lg:py-6 text-[#505050] font-bold py-4 px-5">
            Sobre o HC Auxilia:
          </h2>
        </InfoDiv>

        <InfoDiv>
          <InfoText texto="O HC Auxilia é uma solução desenvolvida para reduzir as barreiras digitais no acesso ao Portal do Paciente do Hospital das Clínicas."/>
          <InfoText texto="Seu objetivo é apoiar pacientes, cuidadores e familiares em toda a jornada de saúde, tornando o acompanhamento mais simples, acessível e intuitivo."/>
          <InfoText texto="Com ele, a experiência digital deixa de ser um obstáculo e se transforma em um aliado no cuidado, ajudando a diminuir o absenteísmo em consultas e fortalecendo a relação entre paciente e hospital."/>
          <InfoText texto="O HC Auxilia promove inclusão digital, reduz o absenteísmo em consultas e aproxima cada paciente do cuidado com a própria saúde."/>
        </InfoDiv>
      </section>
      <VoltarButton /> 
    </Wrapper>
    </>
  )
}

export default Sobre