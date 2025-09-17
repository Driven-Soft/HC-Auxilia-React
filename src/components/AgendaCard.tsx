import { useState } from "react";
import seta from "/src/assets/icones/seta.png";

interface AgendaCardProps {
  agendamento: string;
  data: string;
  horario: string;
  detalhes: string;
}

const AgendaCard = ({ agendamento, data, horario, detalhes }: AgendaCardProps) => {
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  const toggleDetalhes = () => {
    setMostrarDetalhes((prev) => !prev);
  };

  return (
    <div onClick={toggleDetalhes} className="cursor-pointer shadow-lg">
      <div
        className={`bg-[#FFFFFF] flex justify-between items-center px-4 py-2 transition-colors duration-100 ease-in-out hover:bg-[#f1f1f1]
        ${mostrarDetalhes ? "rounded-t-sm" : "rounded-sm"}`}>

        <p className="text-[#505050] text-md font-medium">
          <strong className="font-bold">{agendamento}</strong> - {data} {horario}
        </p>
        <img src={seta} alt="Exibir detalhes" className={`w-10 h-10 mb-2 aspect-square object-contain transition-transform duration-300 ${
            mostrarDetalhes ? "rotate-180" : "rotate-0"}`}
        />
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out
          ${mostrarDetalhes ? "max-h-40 opacity-100 py-3" : "max-h-0 opacity-0 py-0"}
          bg-[#e9e9e9] px-4 rounded-b-sm
        `}
      >
        <p className="font-medium">{detalhes}</p>
      </div>
    </div>
  );
};

export default AgendaCard;
