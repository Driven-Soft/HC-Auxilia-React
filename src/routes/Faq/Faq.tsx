import InfoDiv from "../../components/InfoDiv"
import OpenCard from "../../components/OpenCard"
import VoltarButton from "../../components/VoltarButton"

const Faq = () => {
  return (
    <main className="flex flex-col w-full bg-white ">
      <section className="bg-[#D9D9D9] flex flex-col w-full h-full shadow-[0_-9px_10px_rgba(0,0,0,0.08),0_9px_10px_rgba(0,0,0,0.08)] mt-2 lg:mt-4 "> {/*SEÇÃO  DO MAIN GERAL*/}
        <InfoDiv className="mt-4">
          <h2 className="text-2xl lg:text-4xl lg:py-6 text-[#505050] font-bold py-4 px-5">
            FAQ:
          </h2>
        </InfoDiv>

        <div className="bg-[#D9D9D9] px-4 pb-4 mb-4 rounded-xl lg:mx-10 md:px-20 grid gap-3">
          <OpenCard 
            titulo="O que é o HC Auxilia?" 
            detalhes="O HC Auxilia é um app que ajuda pacientes a acessar o site do HC, gerenciar consultas, exames e mais." 
            className="lg:text-2xl lg:[&>div:first-child]:!px-8 lg:[&>div:first-child]:!py-6" 
          />

          <OpenCard 
            titulo="Como funciona a navegação do HC Auxilia?" 
            detalhes="A navegação do HC Auxilia é simples e intuitiva. 
            O menu principal permite acessar as principais funcionalidades do app, como consultas, exames e a Área do Cuidador. 
            Todos os botões são clicáveis e levam o usuário para a página correspondente, geralmente te redirecionando pro Site do Hospital das Clínicas, onde você pode ver suas informações." 
            className="lg:text-2xl lg:[&>div:first-child]:!px-8 lg:[&>div:first-child]:!py-6" 
          />

          <OpenCard 
            titulo="Como funciona a Área do Cuidador?" 
            detalhes="A Área do Cuidador permite que cuidadores acessem informações sobre o paciente, como consultas e exames. 
            Também permite que o cuidador cadastrado faça o agendamento de consultas e exames, além de visualizar os resultados dos exames realizados." 
            className="lg:text-2xl lg:[&>div:first-child]:!px-8 lg:[&>div:first-child]:!py-6" 
          />

          <OpenCard 
            titulo="Como funciona o Assistente Virtual?" 
            detalhes="O Assistente Virtual é um chatbot que ajuda os usuários a encontrar informações sobre o HC Auxilia e o site do HC. 
            Ele pode responder perguntas frequentes, fornecer informações sobre consultas e exames, e ajudar com o agendamento de consultas." 
            className="lg:text-2xl lg:[&>div:first-child]:!px-8 lg:[&>div:first-child]:!py-6" 
          />

          <OpenCard 
            titulo="Onde posso acessar o Assistente Virtual?" 
            detalhes="O Assistente Virtual pode ser acessado diretamente no site do HC Auxilia. 
            Você pode acessá-lo pela área de 'Início' ou no canto direito inferior de qualquer tela do site. 
            Ele está disponível 24 horas por dia, 7 dias por semana, para ajudar os usuários com suas dúvidas." 
            className="lg:text-2xl lg:[&>div:first-child]:!px-8 lg:[&>div:first-child]:!py-6" 
          />

          <OpenCard 
            titulo="Por que eu deveria mandar Feedback?" 
            detalhes="O feedback é importante para melhorar o HC Auxilia e o site do HC. 
            Ele nos ajuda a entender o que os usuários gostam e o que pode ser melhorado, além de ajudar a identificar problemas técnicos." 
            className="lg:text-2xl lg:[&>div:first-child]:!px-8 lg:[&>div:first-child]:!py-6" 
          />

          <OpenCard 
            titulo="Como funciona o Modo de Contraste?" 
            detalhes="O Modo de Contraste é uma opção de acessibilidade que altera as cores do site para facilitar a leitura. 
            Ele pode ser ativado nas configurações do site e é útil para pessoas com dificuldades visuais." 
            className="lg:text-2xl lg:[&>div:first-child]:!px-8 lg:[&>div:first-child]:!py-6" 
          />

          <OpenCard 
            titulo="Como posso ver minha datas marcadas de forma clara?" 
            detalhes="Os cards na tela de início exibem as datas das consultas e exames agendados. 
            Ele permite que os usuários visualizem rapidamente suas próximas consultas e exames, facilitando o planejamento e a organização." 
            className="lg:text-2xl lg:[&>div:first-child]:!px-8 lg:[&>div:first-child]:!py-6" 
          />

        </div>
      </section>
      <VoltarButton />
    </main>
  )
}

export default Faq