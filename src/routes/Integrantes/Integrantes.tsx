import IntegranteCard from "../../components/IntegranteCard"
import VoltarButton from "../../components/VoltarButton"
import { integrantes } from "../../data/integrantes";

const Integrantes = () => {
  return (
    <section>
      <section>
        <h2>Integrantes do projeto: </h2>
        <section> {/* SEÇÃO DE COMPONENTES DE INTEGRANTES */}
          {integrantes.map((i) => (
            <IntegranteCard key={i.rm} integrante={i} />
          ))}
        </section>
      </section>
      <VoltarButton />
    </section>
  )
}

export default Integrantes