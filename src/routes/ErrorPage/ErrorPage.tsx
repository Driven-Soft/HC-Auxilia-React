import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Erro de redirecionamento!</h1>
      <h2>A página que tentou visitar não existe.</h2>
      <Link to="/">Clique aqui para voltar à tela inicial.</Link>
    </div>
  )
}

export default ErrorPage