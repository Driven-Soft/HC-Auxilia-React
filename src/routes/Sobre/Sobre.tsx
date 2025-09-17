import InfoDiv from "../../components/InfoDiv"
import InfoText from "../../components/InfoText"
import VoltarButton from "../../components/VoltarButton"

const Sobre = () => {
  return (
    <main className="flex flex-col w-full bg-white ">
      <section className="bg-[#D9D9D9] flex flex-col w-full h-full shadow-[0_-9px_10px_rgba(0,0,0,0.08),0_9px_10px_rgba(0,0,0,0.08)] mt-2 lg:mt-4 "> {/*SEÇÃO  DO MAIN GERAL*/}
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
    </main>
  )
}

export default Sobre