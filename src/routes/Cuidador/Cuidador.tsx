import IconCard from "../../components/IconCard";
import assistenteIcon from "../../assets/icones/assistente.png";
import faqIcon from "../../assets/icones/faq.png";
import consultasIcon from "../../assets/icones/consultas.png";
import examesIcon from "../../assets/icones/exames.png";
import receitasIcon from "../../assets/icones/receitas.png";
import perfilIcon from "../../assets/icones/perfil.png";
import feedbackIcon from "../../assets/icones/feedback.png";
import teleconsulta from "../../assets/icones/hospital.png";
import ficha from "../../assets/icones/ficha.png";

const Cuidador = () => {
  return (
    <main>
      <section> {/*SEÇÃO  DO MAIN GERAL*/}
        <h2>Área do Cuidador</h2>
        <section> {/* SEÇÃO DOS ÍCONES DE REDIRECIONAMENTO */}
          <IconCard
            title="Marcar Teleconsulta"
            imgSrc={teleconsulta}
            alt="Teleconsultas"
            href="https://portaldopaciente.hc.fm.usp.br/teleconsulta"
          />
          <IconCard
            title="Cadastrar Ficha"
            imgSrc={ficha}
            alt="Consultas"
            href="https://portaldopaciente.hc.fm.usp.br/meus-dados"
          />
          <IconCard
            title="Perfil do Paciente"
            imgSrc={perfilIcon}
            alt="Perfil do Paciente"
            href="https://portaldopaciente.hc.fm.usp.br/meus-dados"
          />
          <IconCard
            title="Receitas do Paciente"
            imgSrc={receitasIcon}
            alt="Receitas Médicas"
            href="https://portaldopaciente.hc.fm.usp.br/receitas"
          />
          <IconCard
            title="Exames do Paciente"
            imgSrc={examesIcon}
            alt="Exames"
            href="https://portaldopaciente.hc.fm.usp.br/resultados"
          />
          <IconCard
            title="Consultas do Paciente"
            imgSrc={consultasIcon}
            alt="Consultas"
            href="https://portaldopaciente.hc.fm.usp.br/agendamentos"
          />
          <IconCard
            title="FAQ"
            imgSrc={faqIcon}
            alt="Manuais e Ajuda"
            link="/faq"
          />
          <IconCard
            title="Pesquisa de satisfação"
            imgSrc={feedbackIcon}
            alt="Acessibilidade"
            link="/feedback"
          />
          <IconCard
            title="Assistente Virtual"
            imgSrc={assistenteIcon}
            alt="Assistente Virtual"
            onClick={() => window.toggleWatsonChat && window.toggleWatsonChat()}
          />
        </section>

        <aside>
          <h1>Sobre a Área do Cuidador:</h1>
          <div>
            <p>Esta página da aplicação permitirá que um usuário cadastrado pelo paciente tenha acesso às funcionalidades do próprio paciente, como marcar e ver consultas, cadastrar fichas médicas, visualizar o perfil do paciente e receitas.</p>
            <p>Isso permitirá que o paciente após cadastrar um cuidador tenha melhor suporte médico em providenciar a um terceiro confiado suas informações e ações médicas.</p>
            <p>Essa parte da solução será de grande ajuda aos pacientes debilitados e/ou confusos sobre como usar a aplicação.</p>
            <p>Infelizmente, para desenvolvê-la é necessária aprovação do Hospital das Clínicas e acesso ao sistema de cadastro de pacientes e cuidadores.</p>
            <p>Por isso, essa parte da solução não foi desenvolvida, mas a equipe de desenvolvimento está disposta a ajudar o Hospital das Clínicas a desenvolver essa parte da solução.</p>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default Cuidador