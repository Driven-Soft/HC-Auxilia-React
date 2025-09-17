import AgendaCard from "../../components/AgendaCard"
import IconCard from "../../components/IconCard"
import assistenteIcon from "../../assets/icones/assistente.png";
import cuidadoresIcon from "../../assets/icones/cuidadores.png";
import faqIcon from "../../assets/icones/faq.png";
import consultasIcon from "../../assets/icones/consultas.png";
import examesIcon from "../../assets/icones/exames.png";
import receitasIcon from "../../assets/icones/receitas.png";
import perfilIcon from "../../assets/icones/perfil.png";
import acessibilidadeIcon from "../../assets/icones/acessibilidade.png";
import feedbackIcon from "../../assets/icones/feedback.png";

const Home = () => {
  return (
    <main className="w-full pt-2 pb-5 lg:pt-4 bg-white ">
      <section className="flex flex-col md:flex-row w-full h-full shadow-[0_-9px_10px_rgba(0,0,0,0.05),0_9px_10px_rgba(0,0,0,0.05)]"> {/*SEÇÃO  DO MAIN GERAL*/}
        <section className="flex-1 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 place-items-center bg-[#D9D9D9] p-4"> {/* SEÇÃO DOS ÍCONES DE REDIRECIONAMENTO */}
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
            title="FAQ"
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
          <IconCard
            title="Alto Contraste"
            imgSrc={acessibilidadeIcon}
            alt="Acessibilidade"
            onClick={() => alert("Contraste ativado")}
          />
          <IconCard
            title="Pesquisa de satisfação"
            imgSrc={feedbackIcon}
            alt="Acessibilidade"
            link="/feedback"
          />
        </section>

        <aside className="flex-1 p-4 mt-4 md:mt-0 bg-[#D9D9D9]"> {/* SEÇÃO DOS CARDS DE AGENDAMENTOS */}
          <h1 className="text-4xl text-[#4A4A4A] font-bold mb-4 not-first:">Veja aqui seus agendamentos marcados!</h1>
          <div className="space-y-4"> {/* CARDS DE AGENDAMENTOS */}
            <AgendaCard agendamento="Exame de rotina" data="20/10" horario="10:10h"
            detalhes="Exame de rotina com Dra. Beatrici - Rua Exemplar Souza, 204, São Paulo - SP" />

            <AgendaCard agendamento="Colonoscopia" data="03/11" horario="17:00h"
            detalhes="Colonoscopia com Dr. Hayashi - Rua Exemplar Souza, 204, São Paulo - SP" />

            <AgendaCard agendamento="Endoscopia" data="25/11" horario="14:00h"
            detalhes="Endoscopia com Dr. Henrique - Rua Exemplar Souza, 204, São Paulo - SP" />

            <AgendaCard agendamento="Hemograma" data="16/12" horario="08:30h"
            detalhes="Hemograma com Dr. Aurélio - Rua Exemplar Souza, 204, São Paulo - SP" />
          </div>
        </aside>
      </section>
    </main>
  )
}

export default Home