import InfoDiv from "../../components/InfoDiv";
import IntegranteCard from "../../components/IntegranteCard"
import VoltarButton from "../../components/VoltarButton"
import Wrapper from "../../components/Wrapper";
import { integrantes } from "../../data/integrantes";
 
const Integrantes = () => {
  return (
    <section>
      <Wrapper className="flex flex-col">
        <section>
          <InfoDiv className="flex items-center pt-2 md:pt-3 px-4 mt-4 justify-center">
            <h1 className="p-1 sm:p-4 text-2xl md:text-4xl text-[#4A4A4A] font-bold dark:text-yellow-300">Integrantes do Projeto</h1>
          </InfoDiv>
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-3 sm:mx-8 lg:mx-10"> {/* SEÇÃO DE COMPONENTES DE INTEGRANTES */}
            {integrantes.map((i) => (
              <IntegranteCard key={i.rm} integrante={i}
              />
            ))}
          </section>
        </section>
      <VoltarButton />
      </Wrapper>
    </section>
  )
}
 
export default Integrantes