import IconCard from "../../components/IconCard"

const Home = () => {
  return (
    <main>
      <section> {/*SEÇÃO  DO MAIN GERAL*/}
        <section className="p-4 grid grid-cols-4 gap-4"> {/* SEÇÃO DOS ÍCONES DE REDIRECIONAMENTO */}
          <IconCard
            title="Assistente Virtual"
            imgSrc="/imagens/icones/assistente.png"
            alt="Assistente Virtual"
            onClick={() => alert("Abrindo chat...")}
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
        </section> 
        
        <aside> {/* SEÇÃO DOS CARDS DE AGENDAMENTOS */}

        </aside>
      </section>
    </main>
  )
}

export default Home