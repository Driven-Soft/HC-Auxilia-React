import { useState } from "react";
import seta from "/src/assets/icones/seta.png";

interface OpenCardProps {
  titulo : string;
  data?: string;
  horario?: string;
  detalhes: string;
  className?: string;
}

const OpenCard = ({ titulo, data, horario, detalhes, className }: OpenCardProps) => {
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  const toggleDetalhes = () => {
    setMostrarDetalhes((prev) => !prev);
  };

  return (
    <div
      onClick={toggleDetalhes}
      className={`cursor-pointer shadow-xl ${className || ""}`}
    >
      <div
        className={`bg-[#FFFFFF] dark:bg-black dark:border-2 dark:border-white flex justify-between items-center px-4 py-2 transition-colors duration-100 ease-in-out hover:bg-[#f5f5f5] dark:hover:bg-[#0c0c0c]
        ${mostrarDetalhes ? "rounded-t-lg" : "rounded-lg"}`}
      >
        <p className="text-[#505050] dark:text-yellow-300 text-md font-medium">
          <strong className="font-bold">{titulo}</strong> {data} {horario}
        </p>

        <img
          src={seta}
          alt="Exibir detalhes"
          className={`w-10 h-10 mb-2 aspect-square object-contain transition-transform duration-400 dark:invert ${
            mostrarDetalhes ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out
          ${mostrarDetalhes ? "opacity-100 py-3" : "max-h-0 opacity-0 py-0"}
          bg-[#e9e9e9] dark:bg-black dark:border-2 dark:text-yellow-300 dark:border-white  px-4 rounded-b-sm
        `}
      >
        <p className="font-medium">{detalhes}</p>
      </div>
    </div>
  );
};

export default OpenCard;
