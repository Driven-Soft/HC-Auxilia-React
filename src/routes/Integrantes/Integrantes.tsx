import IntegranteCard from "../../components/IntegranteCard"
import VoltarButton from "../../components/VoltarButton"

const Integrantes = () => {
  return (
    <section>
      <section>
        <h2>Integrantes do projeto: </h2>
        <section> {/* SEÇÃO DE COMPONENTES DE INTEGRANTES */}
          <IntegranteCard
          nomeIntegrante="Felipe Bezerra Beatriz"
          rmIntegrante="564723"
          imgIntegrante="/public/imagens/fotos/felipe.png"
          gitIntegrante="https://github.com/FelipeBeatriz"
          linkedIntegrante="https://www.linkedin.com/in/felipe-bezerra-beatriz-b1b16b356/"
          />
          <IntegranteCard
          nomeIntegrante="Max Hayashi Batista"
          rmIntegrante="563717"
          imgIntegrante="/public/imagens/fotos/max.png"
          gitIntegrante="https://github.com/y3llowhusky"
          linkedIntegrante="https://www.linkedin.com/in/max-hayashi-batista-572622356/"
          />
          <IntegranteCard
          nomeIntegrante="Henrique Cunha Torres"
          rmIntegrante="565119"
          imgIntegrante="/public/imagens/fotos/henrique.png"
          gitIntegrante="https://github.com/HenriqueCTorres"
          linkedIntegrante="https://www.linkedin.com/in/henrique-cunha-torres-44940634a/"
          />
        </section>
      </section>
      <VoltarButton />
    </section>
  )
}

export default Integrantes