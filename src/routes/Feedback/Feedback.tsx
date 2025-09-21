import FeedbackForm from "../../components/FeedbackForm"
import InfoDiv from "../../components/InfoDiv"
import VoltarButton from "../../components/VoltarButton"
import Wrapper from "../../components/Wrapper"

const Feedback = () => {
  return (
    <>
    <Wrapper className="flex-col items-center min-h-screen">
      <InfoDiv className="flex items-center pt-2 md:pt-3 px-4 mt-4 justify-center w-[95%]">
        <h1 className="p-1 sm:p-4 text-2xl md:text-4xl text-[#4A4A4A] dark:text-yellow-300 font-bold">Pesquisa de Satisfação</h1>
      </InfoDiv>
      <FeedbackForm />
      <VoltarButton />
    </Wrapper>
    </>
  )
}

export default Feedback