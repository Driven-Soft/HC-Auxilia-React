import { useState } from "react";
import seta from "/src/assets/icones/seta.png";

interface ItemFaqProps {
  pergunta: string;
  resposta: string;
}

const ItemFaq = ({ pergunta, resposta }: ItemFaqProps) => {
  const [mostrarResposta, setMostrarResposta] = useState(false);

  const toggleResposta = () => {
    setMostrarResposta((prev) => !prev);
  };

  return (
    <div onClick={toggleResposta} className="faq-item cursor-pointer">
      <div>
        <span>{pergunta}</span>
        <img src={seta} alt="Abrir resposta" />
      </div>

      {mostrarResposta && (
        <div>
          {resposta.split("\n").map((linha, i) => (
            <p key={i}>{linha}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemFaq;