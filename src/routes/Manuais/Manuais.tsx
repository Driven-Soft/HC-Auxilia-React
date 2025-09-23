import ButtonWrapper from "../../components/ButtonWrapper"
import InfoDiv from "../../components/InfoDiv"
import InfoText from "../../components/InfoText"
import VoltarButton from "../../components/VoltarButton"
import Wrapper from "../../components/Wrapper"

const Manuais = () => {
  return (
    <>
    <Wrapper className="justify-center items-center pt-4 flex-col">
        <InfoDiv>
            <InfoText>
                <h1 className="font-extrabold text-4xl">Como acessar o Portal do Paciente?</h1>
            </InfoText>
        </InfoDiv>
        <InfoDiv className="w-[90%] md:w-[80%]">
            <InfoText className="text-center">
                <p>O Portal do Paciente do HC é uma plataforma onde o paciente pode acompanhar sua passagem em qualquer Instituto do Complexo HCFMUSP.</p>
                <br />
                <p>O acesso ao Portal do Paciente HC é feito por meio de nosso aplicativo.</p>
                <br />
                <p className="font-extrabold">Você pode fazer download do aplicativo Portal do Paciente HC pela loja de aplicativos do seu telefone.</p>

            </InfoText>
        </InfoDiv>
        <InfoDiv className="flex flex-col sm:flex-row justify-around w-[90%] md:w-[80%]">
            <div className="flex flex-col text-center justify-center items-center flex-1">
                <InfoText>Se você usa <strong className="text-[#007fe7]">Iphone</strong>, clique neste botão para baixar o aplicativo:</InfoText>
                <img
                src="/src/assets/icones/apple-logo-svgrepo-com.svg" alt=""
                className="pb-4"/>
                <ButtonWrapper href="https://apps.apple.com/br/app/portal-do-paciente-hc/id1572694502">
                    <p>BAIXAR APLICATIVO</p>
                </ButtonWrapper>
            </div>

            <div className="w-1 h-auto bg-gray-300 mx-4"></div>

            <div className="flex flex-col text-center justify-center items-center flex-1">
                <InfoText>Se você usa qualquer <strong className="text-[#007fe7]">outro modelo</strong>, clique neste botão:</InfoText>
                <img
                src="/src/assets/icones/android-svgrepo-com.svg" alt=""
                className="pb-4"/>
                <ButtonWrapper href="https://play.google.com/store/apps/details?id=com.netihc.portaldopaciente">
                    <p>BAIXAR APLICATIVO</p>
                </ButtonWrapper>
            </div>
        </InfoDiv>

        <InfoDiv>
            <InfoText className="flex flex-col justify-center text-center items-center">
                <h1 className="font-medium">Após ter baixado o aplicativo:</h1>
                <img src="/src/assets/icones/seta.png" alt="" className="rotate-180 size-10 sm:size-15"/>
            </InfoText>
        </InfoDiv>

        <InfoDiv className="flex flex-col pt-2 px-4 sm:px-10 ">
            <InfoText className="text-center">
                <h2 className="text-md font-bold">Clique no botão que corresponde a sua situação:</h2>
            </InfoText>
            <div className="flex flex-row gap-3 sm:gap-10 justify-center pt-4">
                <ButtonWrapper to="comcadastro"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <p>Já fiz meu cadastro</p>
                </ButtonWrapper>

                <ButtonWrapper to="semcadastro"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <p>Não tenho cadastro</p>
                </ButtonWrapper>
            </div>
        </InfoDiv>
        <a href="https://portaldopaciente.hc.fm.usp.br/ajuda-externa" target="_bank"
        className="text-blue-600 underline pb-4">Ainda preciso de ajuda</a>
        <VoltarButton />
    </Wrapper>
    </>
  )
}

export default Manuais