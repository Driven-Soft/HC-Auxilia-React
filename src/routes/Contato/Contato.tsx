import ButtonWrapper from "../../components/ButtonWrapper"
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
          <div className="flex flex-col text-center">
          <hr className="border-[#c9c9c9] border-b-2 rounded-4xl my-3 w-[50%] self-center" /> 
            <InfoText>
              <h1 className="font-bold pb-3 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 bg-clip-text text-transparent">Gostaria de receber notificações para seus agendamentos?</h1>
            </InfoText>
            <ButtonWrapper to="/contato/notificacoes">
              CLIQUE AQUI
            </ButtonWrapper>
            <hr className="border-[#c9c9c9] border-b-2 rounded-4xl my-3 w-[50%] self-center" /> 
          </div>

          <h4 className="
          text-[#505050] py-2 px-4 font-medium text-lg lg:text-3xl dark:text-yellow-300">
            Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo
          </h4>
          
          <InfoText>
            <h1 className="text-3xl font-bold">Endereço:</h1>
          </InfoText>
          
          <InfoText>
            <p>Av. Doutor Enéas Carvalho Aguiar, 255</p>
            <p>Cerqueira César</p>
            <p>05403-000</p>
            <p>São Paulo - Brasil</p>
          </InfoText>

          <InfoText>
            <h1 className="text-3xl font-bold">Telefone:</h1>
          </InfoText> 

          <InfoText>
            <p>(0xx11) 2661-0000</p>
          </InfoText> 
        </InfoDiv>
      </section>
      <VoltarButton />
    </Wrapper>
  )
}

export default Contato