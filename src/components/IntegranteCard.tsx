import type { Integrante } from "../data/integrantes";
import ButtonWrapper from "./ButtonWrapper";

interface IntegranteCardProps {
  integrante: Integrante;
}

const IntegranteCard = ({ integrante }: IntegranteCardProps) => {
  return (
    <div className="flex flex-col sm:flex-row lg:flex-col bg-white my-3 p-5 px-4 sm:px-10 rounded-2xl items-center shadow-[2px_5px_10px_rgba(0,0,0,0.3)] dark:bg-black dark:border-2 dark:border-white">
      <img
        className="w-40 h-40 max-w-xs sm:h-50 sm:w-50 md:max-w-md lg:my-5 lg:max-w-lg sm:my-8 sm:mr-8 lg:mr-0 rounded-full shadow-[0_0_5px_rgba(0,0,0,0.2)]"
        src={integrante.img}
        alt={`Imagem do integrante ${integrante.nome}`}
      />
      <div className="dark:text-yellow-300 w-full sm:w-[55%] md:w-full break-words">
        <p className="text-lg md:text-xl font-medium text-center sm:text-left">
          <b className="font-bold">Aluno: </b>
          {integrante.nome}
        </p>
        <p className="text-lg md:text-xl font-medium text-center sm:text-left">
          <b>Turma: </b>1TDSPK
        </p>
        <p className="text-lg md:text-xl font-medium text-center sm:text-left">
          <b>RM: </b>
          {integrante.rm}
        </p>
        <hr className="border-[#c9c9c9] border-b-2 rounded-4xl my-3" />
        <p>
          <b className="text-[#313131] dark:text-yellow-300">
            Perfil do Github:{" "}
          </b>
          <a
            href={integrante.git}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-600 underline break-words inline-block max-w-full"
          >
            {integrante.git}
          </a>
        </p>
        <hr className="border-[#c9c9c9] border-b-2 rounded-4xl my-3" />
        <p>
          <b className="text-[#313131] dark:text-yellow-300">
            Perfil do LinkedIn:{" "}
          </b>
          <a
            href={integrante.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-600 underline break-words inline-block max-w-full"
          >
            {integrante.linkedIn}
          </a>
        </p>
        <ButtonWrapper
          className="mt-4"
          to={`/integrante/${integrante.rm}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Ver mais detalhes
        </ButtonWrapper>
      </div>
    </div>
  );
};

export default IntegranteCard;
