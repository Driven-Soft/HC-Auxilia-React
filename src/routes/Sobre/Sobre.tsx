import InfoDiv from "../../components/InfoDiv";
import InfoText from "../../components/InfoText";
import VoltarButton from "../../components/VoltarButton";
import Wrapper from "../../components/Wrapper";
import sobrePromocional from "../../assets/icones/sobre_promocional.png";

const Sobre = () => {
  return (
    <>
      <Wrapper className="flex-col">
        <section className="w-full h-full">
          <InfoDiv className="flex items-center pt-2 md:pt-3 px-4 mt-4 justify-center">
            <h2 className="p-1 sm:p-4 text-2xl md:text-4xl text-[#4A4A4A] dark:text-yellow-300 font-bold">
              Sobre o HC Auxilia
            </h2>
          </InfoDiv>
          <InfoDiv className="flex flex-col items-center px-2 sm:px-10 pt-8">
            <InfoText>
              <p>
                O HC Auxilia é uma solução desenvolvida para reduzir as
                barreiras digitais no acesso ao Portal do Paciente do Hospital
                das Clínicas.
              </p>
            </InfoText>
            <InfoText>
              <p>
                Seu objetivo é apoiar pacientes, cuidadores e familiares em toda
                a jornada de saúde, tornando o acompanhamento mais simples,
                acessível e intuitivo.
              </p>
            </InfoText>
            <InfoText>
              <p>
                Com ele, a experiência digital deixa de ser um obstáculo e se
                transforma em um aliado no cuidado, ajudando a diminuir o
                absenteísmo em consultas e fortalecendo a relação entre paciente
                e hospital.
              </p>
            </InfoText>
            <InfoText>
              <p>
                O HC Auxilia promove inclusão digital, reduz o absenteísmo em
                consultas e aproxima cada paciente do cuidado com a própria
                saúde.
              </p>
            </InfoText>

            <div className="flex flex-col py-5 text-center px-2 sm:px-10">
              <h1 className="text-2xl font-bold text-blue-600 dark:text-yellow-300">
                Nosso objetivo é cuidar e incluir.
              </h1>
              <img
                src={sobrePromocional}
                alt="Imagem sobre o HC Auxilia"
                className="w-15 h-auto rounded-lg mt-4 self-center"
              />
            </div>
          </InfoDiv>
        </section>
        <VoltarButton />
      </Wrapper>
    </>
  );
};

export default Sobre;
