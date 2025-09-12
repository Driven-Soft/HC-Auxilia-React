import { useState } from "react";

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
      <div>
        <p><strong>{agendamento}</strong> - {data} {horario}</p>
        <img src="/imagens/icones/seta.png" alt="Exibir detalhes" />
      </div>

      {mostrarDetalhes && (
        <div>
            <p>{detalhes}</p>
        </div>
      )}
    </div>
  );
};

export default AgendaCard;
