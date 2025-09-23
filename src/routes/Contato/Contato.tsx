import InfoDiv from "../../components/InfoDiv"
import InfoText from "../../components/InfoText"
import VoltarButton from "../../components/VoltarButton"
import Wrapper from "../../components/Wrapper"

const Contato = () => {
  return (
    <Wrapper className="flex-col">
      <section className="w-full h-full"> {/*SEÇÃO  DO MAIN GERAL*/}
        <InfoDiv className="flex items-center pt-2 md:pt-3 px-4 mt-4 justify-center">
          <h2 className="p-1 sm:p-4 text-2xl md:text-4xl text-[#4A4A4A] font-bold dark:text-yellow-300">
            Contato
          </h2>
        </InfoDiv>

        <InfoDiv>
          <h4 className="
          text-[#505050] py-2 px-4 font-medium text-lg lg:text-3xl dark:text-yellow-300">
            Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo
          </h4>
          <h5 className="text-[#505050] py-2 px-4 font-bold text-md lg:text-2xl dark:text-yellow-300">
            Endereço:
          </h5>
          <InfoText>
            <p>Av. Doutor Enéas Carvalho Aguiar, 255</p>
          </InfoText>
          <InfoText>
            <p>Cerqueira César</p>
          </InfoText>
          <InfoText>
            <p>05403-000</p>
          </InfoText>
          <InfoText>
            <p>São Paulo - Brasil</p>
          </InfoText> 
          <InfoText>
            <p>Tel.: (0xx11) 2661-0000</p>
          </InfoText> 
        </InfoDiv>
      </section>
      <VoltarButton />
    </Wrapper>
  )
}

export default Contato