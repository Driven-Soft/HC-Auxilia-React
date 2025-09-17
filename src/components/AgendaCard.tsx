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
    <div onClick={toggleDetalhes}>
      <div className="bg-[#FFFFFF] flex justify-between rounded-sm items-center px-4 py-2">
        <p className="text-[#505050]"><strong>{agendamento}</strong> - {data} {horario}</p>
        <img src={seta} alt="Exibir detalhes" className="w-10 h-10 mb-2 aspect-square object-contain " />
      </div>

      {mostrarDetalhes && (
        <div className="bg-[#EEEEEE] items-center px-4 py-5">
            <p>{detalhes}</p>
        </div>
      )}
    </div>
  );
};

export default AgendaCard;