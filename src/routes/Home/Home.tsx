import IconCard from "../../components/IconCard";
import assistenteIcon from "../../assets/icones/assistente.png";
import cuidadoresIcon from "../../assets/icones/cuidadores.png";
import faqIcon from "../../assets/icones/faq.png";
import consultasIcon from "../../assets/icones/consultas.png";
import examesIcon from "../../assets/icones/exames.png";
import receitasIcon from "../../assets/icones/receitas.png";
import perfilIcon from "../../assets/icones/perfil.png";
import acessibilidadeIcon from "../../assets/icones/acessibilidade.png";
import feedbackIcon from "../../assets/icones/feedback.png";
import Wrapper from "../../components/Wrapper";
import DarkModeToggle from "../../components/DarkModeToggle";
import { useState } from "react";
import { useEffect } from "react";
import type { Exame } from "../../types/exame";
import AgendaCard from "../../components/AgendaCard";
import { useApi } from "../../context/Api/useApi";

const Home = () => {
  const { apiUrl } = useApi();
  const [exames, setExames] = useState<Exame[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [reload, setReload] = useState(false);
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // CARREGAR TODOS OS EXAMES
  useEffect(() => {
    async function loadExames() {
      try {
        const response = await fetch(`${apiUrl}/exames`);
        const jsonExames = await response.json();
        setExames(jsonExames);
      } catch (error) {
        console.error("Erro ao carregar exames:", error);
      }
    }
    loadExames();
  }, [apiUrl, reload]);

  // CANCELAR EXAME POR ID (marca status como 'F')
  async function handleCancel(id: number) {
    try {
      const response = await fetch(`${apiUrl}/exames/${id}/finalizar`, {
        method: "PUT",
      });
      if (!response.ok) throw new Error("Erro ao atualizar status do exame");
      setReload((prev) => !prev);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main>
      <Wrapper className="flex-col md:flex-row">
        {/*SEÇÃO  DO MAIN GERAL*/}
        <section className="flex-1 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 place-items-center px-2 py-4 lg:px-7">
          {/* SEÇÃO DOS ÍCONES DE REDIRECIONAMENTO */}
          <IconCard
            title="Assistente Virtual"
            imgSrc={assistenteIcon}
            alt="Assistente Virtual"
            onClick={() => window.toggleWatsonChat && window.toggleWatsonChat()}
          />
          <IconCard
            title="Área do Cuidador"
            imgSrc={cuidadoresIcon}
            alt="Cuidadores"
            link="/cuidador"
          />
          <IconCard
            title="FAQ - Perguntas"
            imgSrc={faqIcon}
            alt="Manuais e Ajuda"
            link="/faq"
          />
          <IconCard
            title="Minhas Consultas"
            imgSrc={consultasIcon}
            alt="Consultas"
            href="https://portaldopaciente.hc.fm.usp.br/agendamentos"
          />
          <IconCard
            title="Meus Exames"
            imgSrc={examesIcon}
            alt="Exames"
            href="https://portaldopaciente.hc.fm.usp.br/resultados"
          />
          <IconCard
            title="Minhas Receitas"
            imgSrc={receitasIcon}
            alt="Receitas Médicas"
            href="https://portaldopaciente.hc.fm.usp.br/receitas"
          />
          <IconCard
            title="Perfil do Paciente"
            imgSrc={perfilIcon}
            alt="Perfil do Paciente"
            href="https://portaldopaciente.hc.fm.usp.br/meus-dados"
          />
          <DarkModeToggle
            title="Alto Contraste"
            imgSrc={acessibilidadeIcon}
            alt="Acessibilidade"
          />
          <IconCard
            title="Pesquisa de satisfação"
            imgSrc={feedbackIcon}
            alt="Acessibilidade"
            link="/feedback"
          />
        </section>
        <aside className="flex-1 p-4 mt-4 md:mt-0">
          {/* SEÇÃO DOS CARDS DE AGENDAMENTOS */}
          <h1 className="text-4xl text-[#4A4A4A] font-bold mb-4 not-first: dark:text-yellow-300">
            Veja aqui seus agendamentos marcados!
          </h1>
          <div className="space-y-4 flex flex-col dark:text-yellow-300">
            {/* CARDS DE AGENDAMENTOS */}
            {exames.length === 0 ? (
              <div>
                <p className="text-center text-[#4A4A4A] font-bold mt-5 text-xl dark:text-yellow-300">
                  Carregando seus exames...
                </p>
                <div className="flex justify-center items-center ml-5">
                  <div className="w-7 h-7 border-4 border-gray-400 my-5 dark:border-yellow-300 border-t-transparent rounded-full animate-spin"></div>
                </div>
              </div>
            ) : (
              exames
                .filter((exame) => exame.status?.toUpperCase() === "A")
                .map((exame, index) => (
                  <AgendaCard
                    key={exame.idExame ?? index}
                    exame={exame}
                    onCancel={handleCancel}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                  />
                ))
            )}
          </div>
        </aside>
      </Wrapper>
    </main>
  );
};

export default Home;
