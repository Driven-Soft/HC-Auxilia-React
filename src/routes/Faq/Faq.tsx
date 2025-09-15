import ItemFaq from "../../components/ItemFaq"
import VoltarButton from "../../components/VoltarButton"

const Faq = () => {
  return (
    <section>
      <h2>FAQ: </h2>
      <ItemFaq
        pergunta="O que é o HC Auxilia?"
        resposta="O HC Auxilia é um app que ajuda pacientes a acessar o site do HC, gerenciar consultas, exames e mais."
      />
      <ItemFaq
        pergunta="Como funciona a navegação do HC Auxilia?"
        resposta={`A navegação do HC Auxilia é simples e intuitiva.
      O menu principal permite acessar as principais funcionalidades do app, como consultas, exames e a Área do Cuidador.
      Todos os botões são clicáveis e levam o usuário para a página correspondente, geralmente te redirecionando pro Site do Hospital das Clínicas, onde você pode ver suas informações.`}
      />
      <ItemFaq
        pergunta="Como funciona a Área do Cuidador?"
        resposta={`A Área do Cuidador permite que cuidadores acessem informações sobre o paciente, como consultas e exames.
      Também permite que o cuidador cadastrado faça o agendamento de consultas e exames, além de visualizar os resultados dos exames realizados.`}
      />
      <ItemFaq
        pergunta="Como funciona o Assistente Virtual?"
        resposta={`O Assistente Virtual é um chatbot que ajuda os usuários a encontrar informações sobre o HC Auxilia e o site do HC.
      Ele pode responder perguntas frequentes, fornecer informações sobre consultas e exames, e ajudar com o agendamento de consultas.`}
      />
      <ItemFaq
        pergunta="Onde posso acessar o Assistente Virtual?"
        resposta={`O Assistente Virtual pode ser acessado diretamente no site do HC Auxilia.
      Você pode acessá-lo pela área de "Início" ou no canto direito inferior de qualquer tela do site.
      Ele está disponível 24 horas por dia, 7 dias por semana, para ajudar os usuários com suas dúvidas.`}
      />
      <ItemFaq
        pergunta="Por que eu deveria mandar Feedback?"
        resposta={`O feedback é importante para melhorar o HC Auxilia e o site do HC.
      Ele nos ajuda a entender o que os usuários gostam e o que pode ser melhorado, além de ajudar a identificar problemas técnicos.`}
      />
      <ItemFaq
        pergunta="Como funciona o Modo de Contraste?"
        resposta={`O Modo de Contraste é uma opção de acessibilidade que altera as cores do site para facilitar a leitura.
      Ele pode ser ativado nas configurações do site e é útil para pessoas com dificuldades visuais.`}
      />
      <ItemFaq
        pergunta="Como funciona o calendário na tela de início?"
        resposta={`O calendário na tela de início exibe as datas das consultas e exames agendados.
      Ele permite que os usuários visualizem rapidamente suas próximas consultas e exames, facilitando o planejamento e a organização.`}
      />

      <button onClick={() => window.open("https://portaldopaciente.hc.fm.usp.br/ajuda-manuais", "_blank", "noopener,noreferrer")}>Visitar o FAQ do Portal do Paciente HC</button>

      <VoltarButton />
    </section>
  )
}

export default Faq