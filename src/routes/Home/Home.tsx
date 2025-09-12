import AgendaCard from "../../components/AgendaCard"
import IconCard from "../../components/IconCard"

const Home = () => {
  return (
    <main>
      <section> {/*SEÇÃO  DO MAIN GERAL*/}
        <section> {/* SEÇÃO DOS ÍCONES DE REDIRECIONAMENTO */}
          <IconCard
            title="Assistente Virtual"
            imgSrc="/imagens/icones/assistente.png"
            alt="Assistente Virtual"
            onClick={() => window.toggleWatsonChat && window.toggleWatsonChat()}
          />
          <IconCard
            title="Área do Cuidador"
            imgSrc="/imagens/icones/cuidadores.png"
            alt="Cuidadores"
            link="/cuidador"
          />
          <IconCard
            title="FAQ"
            imgSrc="/imagens/icones/faq.png"
            alt="Manuais e Ajuda"
            link="/faq"
          />
          <IconCard
            title="Minhas Consultas"
            imgSrc="/imagens/icones/consultas.png"
            alt="Consultas"
            href="https://portaldopaciente.hc.fm.usp.br/agendamentos"
          />
          <IconCard
            title="Meus Exames"
            imgSrc="/imagens/icones/exames.png"
            alt="Exames"
            href="https://portaldopaciente.hc.fm.usp.br/resultados"
          />
          <IconCard
            title="Minhas Receitas"
            imgSrc="/imagens/icones/receitas.png"
            alt="Receitas Médicas"
            href="https://portaldopaciente.hc.fm.usp.br/receitas"
          />
          <IconCard
            title="Perfil do Paciente"
            imgSrc="/imagens/icones/perfil.png"
            alt="Perfil do Paciente"
            href="https://portaldopaciente.hc.fm.usp.br/meus-dados"
          />
          <IconCard
            title="Alto Contraste"
            imgSrc="/imagens/icones/acessibilidade.png"
            alt="Acessibilidade"
            onClick={() => console.log("Contraste ativado")}
          />
                    <IconCard
            title="Pesquisa de satisfação"
            imgSrc="/imagens/icones/feedback.png"
            alt="Acessibilidade"
            link="/feedback"
          />
        </section> 
        
        <aside> {/* SEÇÃO DOS CARDS DE AGENDAMENTOS */}
          <h1>Veja aqui seus agendamentos marcados!</h1>
          <div> {/* CARDS DE AGENDAMENTOS */}
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