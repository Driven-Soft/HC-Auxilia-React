import ButtonWrapper from "../../components/ButtonWrapper"
import InfoDiv from "../../components/InfoDiv"
import InfoText from "../../components/InfoText"
import VoltarButton from "../../components/VoltarButton"
import Wrapper from "../../components/Wrapper"

const ComCadastro = () => {
  return (
    <>
    <Wrapper className="justify-center items-center pt-4 flex-col">
        <InfoDiv>
            <InfoText className="text-center">
                <h1 className="font-extrabold text-4xl">Acessando o Portal do Paciente</h1>
                <p>(Com cadastro criado)</p>
            </InfoText>
        </InfoDiv>
        <InfoDiv className="w-[90%] md:w-[80%]">
            <InfoText className="text-center">
                <p>Após realizado o cadastro, volte à tela inicial do aplicativo do Portal do Paciente.</p>
                <br />
                <p className="font-extrabold">Clique em "Acessar Portal"</p>
            </InfoText>
        </InfoDiv>

        <InfoDiv className="w-[80%] sm:w-[50%] md:w-[40%] lg:w-[20%] h-auto">
          <img src="/src/assets/icones/imgmanuais/portalpaciente.png" alt=""/>
        </InfoDiv>

        <InfoDiv>
          <InfoText className="text-center">
            <p className="font-medium">Após isso, digite o CPF e senha criados no cadastro</p>
            <br />
            <p className="font-extrabold">Em seguida clique em ACESSAR</p>
          </InfoText>
        </InfoDiv>

        <InfoDiv className="w-[80%] sm:w-[50%] md:w-[40%] lg:w-[20%] h-auto">
          <img src="/src/assets/icones/imgmanuais/acesso.png" alt=""/>
        </InfoDiv>
        
        <InfoDiv className="w-[80%] sm:w-[80%] md:w-[80%] lg:w-[60%] h-auto text-center">
          <InfoText>
              <p className="text-md">Quer saber como acessar a teleconsulta?</p>
          </InfoText>
          <ButtonWrapper className="mt-4" to="/manuais/teleconsulta"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <p className="text-lg">Manual de Teleconsulta</p>
          </ButtonWrapper>
        </InfoDiv>
        <VoltarButton />
    </Wrapper>
    </>
  )
}

export default ComCadastro