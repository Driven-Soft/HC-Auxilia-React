import type { Exame } from "../types/exame";
import seta from "../assets/icones/seta.png";

interface AgendaCardProps {
  exame: Exame;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

const AgendaCard = ({ exame, isOpen, onToggle, className }: AgendaCardProps) => {
  return (
    <div
      onClick={onToggle}
      className={`cursor-pointer shadow-xl ${className || ""}`}
    >
      <div
        className={`bg-[#FFFFFF] dark:bg-black dark:border-2 dark:border-white flex justify-between items-center px-4 py-2 transition-colors duration-100 ease-in-out hover:bg-[#f5f5f5] dark:hover:bg-[#0c0c0c]
        ${isOpen ? "rounded-t-lg" : "rounded-lg"}`}
      >
        <p className="text-[#505050] dark:text-yellow-300 text-md font-medium">
          <strong className="font-bold">{exame.nomeExame}</strong> — {exame.dataHoraExame.replace(/-/g, "/")}
        </p>

        <img
          src={seta}
          alt="Exibir detalhes"
          className={`w-10 h-10 mb-2 aspect-square object-contain transition-transform duration-400 dark:invert ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out
          ${isOpen ? "opacity-100 py-3" : "max-h-0 opacity-0 py-0"}
          bg-[#e9e9e9] dark:bg-black dark:border-2 dark:text-yellow-300 dark:border-white  px-4 rounded-b-sm
        `}
      >
        <p className="font-medium"><strong>Tipo do exame:</strong> {exame.nomeExame} - {exame.dataHoraExame.replace(/-/g, "/")}</p>
        <p className="font-medium"><strong>Médico(a):</strong> {exame.nomeDoutor}</p>
        <p className="font-medium">
          <strong>Endereço: </strong>
          {exame.nomeExame === "Teleconsulta"
            ? `Seção de Teleconsulta no aplicativo Portal do Paciente HC`
            : `${exame.logradouro}, ${exame.numero} — ${exame.estado}`}
        </p>
      </div>
    </div>
  );
};

export default AgendaCard;