import ButtonWrapper from "../../components/ButtonWrapper"
import InfoDiv from "../../components/InfoDiv"
import InfoText from "../../components/InfoText"
import VoltarButton from "../../components/VoltarButton"
import Wrapper from "../../components/Wrapper"

const ManualTeleconsulta = () => {
  return (
    <>
    <Wrapper className="justify-center items-center pt-4 flex-col">
        <InfoDiv>
            <InfoText className="text-center">
                <h1 className="font-extrabold text-4xl">Manual de Teleconsulta HC</h1>
            </InfoText>
        </InfoDiv>

        <InfoDiv className="w-[90%] md:w-[80%]">
            <InfoText className="text-center">
                <p>Acesse o Portal, clique na opção Teleconsulta conforme imagem abaixo e clique na agenda.</p>
            </InfoText>
        </InfoDiv>

        <InfoDiv className="w-[85%] md:w-[70%] lg:w-[50%] h-auto flex justify-center">
          <img src="/src/assets/icones/imgmanuais/teleconsulta_1.png" alt=""/>
        </InfoDiv>

        <InfoDiv>
          <InfoText className="text-center">
            <p className="font-medium">No dia e hora da consulta clique sobre o agendamento.</p>
          </InfoText>
        </InfoDiv>

        <InfoDiv className="w-[85%] md:w-[70%] lg:w-[50%] h-auto flex justify-center">
          <img src="/src/assets/icones/imgmanuais/teleconsulta_2.png" alt=""/>
        </InfoDiv>

        <InfoDiv className="lg:max-w-[80%]">
          <InfoText className="text-center">
            <p className="font-medium">Se esta é sua primeira vez a participar de uma Teleconsulta será necessário aceitar o Termo de consentimento que aparecerá na tela, logo após clicar em uma agenda. </p>
          </InfoText>
        </InfoDiv>

        <InfoDiv className="w-[65%] md:w-[40%] lg:w-[30%] h-auto flex justify-center">
          <img src="/src/assets/icones/imgmanuais/teleconsulta_3.png" alt=""/>
        </InfoDiv>

        <InfoDiv className="lg:max-w-[80%]">
          <InfoText className="text-center">
            <p className="font-medium">Leia o termo e clique no botão SIM, se estiver de acordo com os termos apresentados para participar de uma Teleconsulta. </p>
          </InfoText>
        </InfoDiv>

        <InfoDiv className="lg:max-w-[75%]">
          <InfoText className="text-center">
            <p className="font-medium">Por fim, mantenha aberto o aplicativo enquanto aguarda a entrada do médico na sala.</p>
            <br />
            <p className="font-medium pb-3">Para ir direto para a seção de Teleconsultas:</p>
          </InfoText>
            <ButtonWrapper href="https://portaldopaciente.hc.fm.usp.br/teleconsulta">
                CLIQUE AQUI
            </ButtonWrapper>
        </InfoDiv>
        <VoltarButton />
    </Wrapper>
    </>
  )
}

export default ManualTeleconsulta