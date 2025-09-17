import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen w-full text-center bg-gray-900">
      <h1 className="text-6xl font-bold p-20 text-gray-50">Erro de redirecionamento!</h1>
      <h2 className="text-4xl font-bold pb-20 text-gray-50">A página que tentou visitar não existe.</h2>
      <Link to="/"
      className="
          bg-gradient-to-r from-[#3F58FF] to-[#0022FF]
          text-white font-semibold px-6 py-3 rounded-md
          text-center
          transition-all duration-200 ease-in-out
          hover:brightness-120 hover:scale-110
        ">
          Clique aqui para voltar à tela inicial.</Link>
    </div>
  )
}

export default ErrorPage