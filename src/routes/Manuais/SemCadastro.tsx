import ButtonWrapper from "../../components/ButtonWrapper"
import InfoDiv from "../../components/InfoDiv"
import InfoText from "../../components/InfoText"
import VoltarButton from "../../components/VoltarButton"
import Wrapper from "../../components/Wrapper"

const SemCadastro = () => {
  return (
    <>
    <Wrapper className="justify-center items-center pt-4 flex-col">
        <InfoDiv>
            <InfoText className="text-center">
                <h1 className="font-extrabold text-4xl">Acessando o Portal do Paciente</h1>
                <p>(Sem cadastro criado)</p>
            </InfoText>
        </InfoDiv>
        <InfoDiv className="w-[90%] md:w-[80%]">
            <InfoText className="text-center">
              <p className="text-red-600 text-sm sm:text-lg font-bold">Atenção:</p>
              <p className="text-red-600 text-sm sm:text-lg font-bold">Apenas pessoas que tenham realizado consultas ou outro tipo de atendimento no complexo HC podem criar uma conta.</p>
              <br />
              <p>Antes do primeiro acesso do Portal do Paciente e usufruir de as suas funcionalidades é necessário cadastrar uma senha. </p>
              <br />
              <p className="font-medium">Após acessar o aplicativo, <strong className="font-extrabold">clique no botão CADASTRAR SENHA. </strong></p>
            </InfoText>
        </InfoDiv>

        <InfoDiv className="w-[80%] sm:w-[50%] md:w-[40%] lg:w-[30%] h-auto">
          <img src="/src/assets/icones/imgmanuais/cadastrarsenha.png" alt=""/>
        </InfoDiv>

        <InfoDiv className="lg:max-w-[70%]">
          <InfoText className="text-center ">
            <p className="font-medium">Na tela seguinte digite somente os números de seu CPF (Cadastro de Pessoa Física)</p>
            <br />
            <p className="font-extrabold">Em seguida clique em LOCALIZAR PACIENTE.</p>
          </InfoText>
        </InfoDiv>

        <InfoDiv className="w-[80%] sm:w-[50%] md:w-[40%] lg:w-[30%] h-auto">
          <img src="/src/assets/icones/imgmanuais/cadastrarsenha_2.png" alt=""/>
        </InfoDiv>

        <InfoDiv className="lg:max-w-[70%]">
          <InfoText className="text-center">
            <p className="font-medium">Após, vai aparecer CPF e nome preenchidos automaticamente. Preencha os demais campos e perguntas.</p>
            <br />
            <p className="font-extrabold">Clique em Salvar.</p>
          </InfoText>
        </InfoDiv>

        <InfoDiv className="w-[80%] sm:w-[50%] md:w-[40%] lg:w-[30%] h-auto">
          <img src="/src/assets/icones/imgmanuais/cadastrarsenha_3.png" alt=""/>
        </InfoDiv>
        
        <InfoDiv className="lg:max-w-[70%]">
          <InfoText className="text-center">
            <p className="font-medium">Ao concluir com sucesso a etapa de cadastro a tela será apresentada. Clique no botão ACESSAR AGORA.</p>
            <br />
            <p className="font-medium">Ao fazer isso, você estará na tela inicial.</p>
            <br />
            <p className="font-medium">Agora você deve colocar seu CPF e sua senha criada.</p>
          </InfoText>
        </InfoDiv>

        <InfoDiv className="w-[80%] sm:w-[50%] md:w-[40%] lg:w-[30%] h-auto">
          <img src="/src/assets/icones/imgmanuais/cadastrarsenha_4.png" alt=""/>
        </InfoDiv>

        <InfoDiv className="w-[80%] lg:w-[60%] h-auto text-center">
          <InfoText>
              <p className="text-md">Quer saber como acessar a teleconsulta?</p>
          </InfoText>
          <ButtonWrapper className="mt-4" to="/manuais/teleconsulta">
              <p className="text-lg">Manual de Teleconsulta</p>
          </ButtonWrapper>
        </InfoDiv>
        <VoltarButton />
    </Wrapper>
  </>
  )
}

export default SemCadastro