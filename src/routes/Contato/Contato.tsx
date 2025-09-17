import InfoDiv from "../../components/InfoDiv"
import InfoText from "../../components/InfoText"
import VoltarButton from "../../components/VoltarButton"

const Contato = () => {
  return (
    <main className="flex flex-col w-full bg-white ">
      <section className="bg-[#D9D9D9] flex flex-col w-full h-full shadow-[0_-9px_10px_rgba(0,0,0,0.08),0_9px_10px_rgba(0,0,0,0.08)] mt-2 lg:mt-4 "> {/*SEÇÃO  DO MAIN GERAL*/}
        <InfoDiv className="mt-4">
          <h2 className="text-2xl lg:text-4xl lg:py-6 text-[#505050] font-bold py-4 px-5">
            Contato:
          </h2>
        </InfoDiv>

        <InfoDiv>
          <h4 className="
          text-[#505050] py-2 px-4 font-medium text-lg lg:text-3xl">
            Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo
          </h4>
          <h5 className="text-[#505050] py-2 px-4 font-bold text-md lg:text-2xl ">
            Endereço:
          </h5>
          <InfoText texto="Av. Doutor Enéas Carvalho Aguiar, 255"/>
          <InfoText texto="Cerqueira César"/>
          <InfoText texto="05403-000"/>
          <InfoText texto="São Paulo - Brasil"/> 
          <InfoText texto="Tel.: (0xx11) 2661-0000"/> 
        </InfoDiv>
      </section>
      <VoltarButton />
    </main>
  )
}

export default Contato