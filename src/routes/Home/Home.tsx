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
import { useState, useRef } from "react";
import { useEffect } from "react";
import type { Exame } from "../../types/exame";
import AgendaCard from "../../components/AgendaCard";
import { useApi } from "../../context/Api/useApi";
import LoadingIcon from "../../components/LoadingIcon";

const Home = () => {
  const { apiUrl } = useApi();
  const [exames, setExames] = useState<Exame[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [reload, setReload] = useState(false);
  const [delayPopupVisible, setDelayPopupVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // CARREGAR TODOS OS EXAMES
  useEffect(() => {
    async function loadExames() {
      setLoading(true);
      try {
        const response = await fetch(`${apiUrl}/exames`);
        const jsonExames = await response.json();
        setExames(jsonExames);
      } catch (error) {
        console.error("Erro ao carregar exames:", error);
      } finally {
        setLoading(false);
      }
    }
    loadExames();
  }, [apiUrl, reload]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handlePortalRedirect = (href: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setDelayPopupVisible(true);
    timerRef.current = setTimeout(() => {
      setDelayPopupVisible(false);
      window.open(href, "_blank", "noopener,noreferrer");
    }, 4500);
  };

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

  const activeExames = exames.filter(
    (exame) => exame.status?.toUpperCase() === "A"
  );

  return (
    <main>
      <Wrapper className="flex-col md:flex-row">
        {delayPopupVisible && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-14">
            <div className="flex flex-col gap-6 text-gray-900 text-center bg-white dark:bg-gray-900 dark:text-white px-2 sm:px-10 py-4 rounded-md shadow-lg">
              <p className="text-2xl font-extrabold">Aguarde!</p>
              <p className="text-xl">
                Você será redirecionado para o portal do paciente em 5
                segundos...
              </p>
              <p className="text-xl font-bold text-blue-700">
                Caso seu login não funcione, entre em nossa seção de Manuais!
              </p>
            </div>
          </div>
        )}
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
            onClick={() =>
              handlePortalRedirect(
                "https://portaldopaciente.hc.fm.usp.br/agendamentos"
              )
            }
          />
          <IconCard
            title="Meus Exames"
            imgSrc={examesIcon}
            alt="Exames"
            href="https://portaldopaciente.hc.fm.usp.br/resultados"
            onClick={() =>
              handlePortalRedirect(
                "https://portaldopaciente.hc.fm.usp.br/resultados"
              )
            }
          />
          <IconCard
            title="Minhas Receitas"
            imgSrc={receitasIcon}
            alt="Receitas Médicas"
            href="https://portaldopaciente.hc.fm.usp.br/receitas"
            onClick={() =>
              handlePortalRedirect(
                "https://portaldopaciente.hc.fm.usp.br/receitas"
              )
            }
          />
          <IconCard
            title="Perfil do Paciente"
            imgSrc={perfilIcon}
            alt="Perfil do Paciente"
            href="https://portaldopaciente.hc.fm.usp.br/meus-dados"
            onClick={() =>
              handlePortalRedirect(
                "https://portaldopaciente.hc.fm.usp.br/meus-dados"
              )
            }
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
            {loading ? (
              <div>
                <p className="text-center text-[#4A4A4A] font-bold mt-5 text-xl dark:text-yellow-300">
                  Carregando seus exames...
                </p>
                <LoadingIcon className="my-5 ml-5" />
              </div>
            ) : activeExames.length === 0 ? (
              <p className="text-center text-[#4A4A4A] font-bold text-xl dark:text-yellow-300">
                Nenhum exame encontrado.
              </p>
            ) : (
              activeExames.map((exame, index) => (
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
