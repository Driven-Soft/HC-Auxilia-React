import IconCard from "../../components/IconCard";
import assistenteIcon from "../../assets/icones/assistente.png";
import faqIcon from "../../assets/icones/faq.png";
import consultasIcon from "../../assets/icones/consultas.png";
import examesIcon from "../../assets/icones/exames.png";
import receitasIcon from "../../assets/icones/receitas.png";
import perfilIcon from "../../assets/icones/perfil.png";
import feedbackIcon from "../../assets/icones/feedback.png";
import teleconsulta from "../../assets/icones/hospital.png";
import Wrapper from "../../components/Wrapper";
import InfoDiv from "../../components/InfoDiv";
import VoltarButton from "../../components/VoltarButton";
 
const Cuidador = () => {
  return (
    <main>
      <Wrapper className="flex-col"> {/*SEÇÃO  DO MAIN GERAL*/}
      <InfoDiv className="flex items-center pt-2 md:pt-3 px-4 mt-4 justify-center">
        <img src="/src/assets/icones/cuidadores.png" alt="" className="w-10 h-10 sm:w-10 sm:h-10 md:w-15 md:h-15 list-none flex justify-center items-center" />
        <h1 className="p-1 sm:p-4 text-2xl md:text-4xl text-[#4A4A4A] font-bold dark:text-yellow-300">Área do Cuidador</h1>
      </InfoDiv>
      <div className="flex flex-col md:flex-row">
        <section className="flex-1 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 place-items-center px-2 py-4 lg:px-7"> {/* SEÇÃO DOS ÍCONES DE REDIRECIONAMENTO */}
          <IconCard
            title="Acessar Teleconsulta"
            imgSrc={teleconsulta}
            alt="Teleconsultas"
            href="https://portaldopaciente.hc.fm.usp.br/teleconsulta"
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
 
        <aside className="flex-1 p-4 mt-4 md:mt-0 ">
            <InfoDiv className="dark:text-yellow-300 dark:bg-black dark:border-2 dark:border-white">
            <h1 className="font-mono font-extrabold text-xl">Sobre a Área do Cuidador:</h1>
            <p className="p-1">Esta página da aplicação permitirá que um usuário cadastrado pelo paciente tenha acesso às funcionalidades do próprio paciente, como marcar e ver consultas, cadastrar fichas médicas, visualizar o perfil do paciente e receitas.</p>
            <p className="p-1">Isso permitirá que o paciente após cadastrar um cuidador tenha melhor suporte médico em providenciar a um terceiro confiado suas informações e ações médicas.</p>
            <p className="p-1">Essa parte da solução será de grande ajuda aos pacientes debilitados e/ou confusos sobre como usar a aplicação.</p>
            <p className="p-1">Infelizmente, para desenvolvê-la é necessária aprovação do Hospital das Clínicas e acesso ao sistema de cadastro de pacientes e cuidadores.</p>
            <p className="p-1">Por isso, essa parte da solução não foi desenvolvida, mas a equipe de desenvolvimento está disposta a ajudar o Hospital das Clínicas a desenvolver essa parte da solução.</p>
            </InfoDiv>
        <VoltarButton />
        </aside>
      </div>
      </Wrapper>
    </main>
  )
}
 
export default Cuidador;