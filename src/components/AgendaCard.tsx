import type { Exame } from "../types/exame";
import seta from "../assets/icones/seta.png";
import { Ban, CalendarOff } from "lucide-react";
import { useState } from "react";

interface AgendaCardProps {
  exame: Exame;
  isOpen: boolean;
  onToggle: () => void;
  onCancel: (exameId: number) => Promise<void> | void;
  className?: string;
}

const AgendaCard = ({
  exame,
  isOpen,
  onToggle,
  onCancel,
  className,
}: AgendaCardProps) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [cancel, setCancel] = useState(false);

  return (
    <div className={`cursor-pointer shadow-xl ${className || ""}`}>
      <div
        onClick={onToggle}
        className={`bg-[#FFFFFF] dark:bg-black dark:border-2 dark:border-white flex justify-between items-center px-4 py-2 transition-colors duration-100 ease-in-out hover:bg-[#f5f5f5] dark:hover:bg-[#0c0c0c]
        ${isOpen ? "rounded-t-lg" : "rounded-lg"}`}
      >
        <p className="text-[#505050] dark:text-yellow-300 text-md font-medium">
          <strong className="font-bold">{exame.nomeExame}</strong> —{" "}
          {exame.dataHoraExame}h
        </p>

        <img
          src={seta}
          alt="Exibir detalhes"
          className={`w-10 h-10 mb-2 ml-2 aspect-square object-contain transition-transform duration-400 dark:invert ${
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
        <p className="font-medium">
          <strong>Tipo do exame:</strong> {exame.nomeExame}
        </p>
        <p className="font-medium">
          <strong>Médico(a):</strong> {exame.nomeDoutor}
        </p>
        <p className="font-medium flex justify-between items-center">
          <span>
            <strong>Endereço: </strong>
            {exame.nomeExame === "Teleconsulta"
              ? `Seção de Teleconsulta no aplicativo Portal do Paciente HC`
              : `${exame.rua}, ${exame.numero}, ${exame.bairro} — ${exame.cidade} ${exame.estado}`}
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowConfirm(true);
            }}
            className="p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-500 transition"
            title="Desmarcar exame"
          >
            <CalendarOff size={28} className="text-red-500 dark:text-white" />
          </button>
        </p>
      </div>

      {showConfirm && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setShowConfirm(false)}
        >
          <div
            className="bg-white dark:bg-black p-6 rounded-lg shadow-lg max-w-sm w-full dark:border-2"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold mb-2">Desmarcar exame</h2>
            <p className="mb-4">
              Tem certeza que deseja desmarcar{" "}
              <strong>{exame.nomeExame}</strong> de {exame.dataHoraExame}?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setCancel(true);
                  onCancel(exame.idExame);
                  setShowConfirm(false);
                }}
                className="px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700"
              >
                <Ban size={20} className="inline-block mr-2" />
                DESMARCAR
              </button>
            </div>
          </div>
        </div>
      )}

      {cancel && (
        <div className="p-4 bg-green-100 text-green-800 rounded-b-lg flex flex-row">
          <p>
            <strong>O exame está sendo desmarcado, aguarde.</strong>
          </p>
          <div className="flex justify-center items-center ml-5">
            <div className="w-7 h-7 border-4 border-gray-300 dark:border-yellow-300 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgendaCard;
