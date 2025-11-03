import { useForm } from "react-hook-form";
import { useState } from "react";
import ButtonWrapper from "./ButtonWrapper";
import checkmarkIcon from "../assets/icones/checkmark.png";
import { useApi } from "../context/Api/useApi";
import type { Feedback } from "../types/feedback";
import LoadingIcon from "./LoadingIcon";

export default function FeedbackForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Feedback>();

  const { apiUrl } = useApi();
  const [lastCodigoHash, setLastCodigoHash] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Gera um hash hexadecimal de 64 caracteres (32 bytes)
  const generate64CharHash = () => {
    const bytes = crypto.getRandomValues(new Uint8Array(32));
    return Array.from(bytes)
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  };

  const onSubmit = async (data: Feedback) => {
    const codigoHash = generate64CharHash();

    try {
      setIsLoading(true);
      const payload = {
        nome: data.name,
        email: data.email,
        nivelSatisfacao: data.satisfaction,
        sugestao: data.message,
        codigoHash: codigoHash,
      };

      const res = await fetch(`${apiUrl}/feedbacks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json().catch(() => null);
      console.log("Dados enviados com sucesso:", result ?? data, {
        codigoHash,
      });
      setLastCodigoHash(codigoHash);
      reset();
      setShowSuccess(true);
    } catch (err) {
      console.error("Erro de rede ao enviar feedback:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!lastCodigoHash) {
      console.warn("Nenhum codigoHash disponível para deletar");
      return;
    }

    try {
      setIsLoading(true);
      const res = await fetch(`${apiUrl}/feedbacks/${lastCodigoHash}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        console.log(
          "Feedback deletado com sucesso:\nCódigo Hash: ",
          lastCodigoHash
        );
        setLastCodigoHash(null);
        setShowSuccess(false);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
        reset();
      } else {
        const errBody = await res.text().catch(() => null);
        console.error("Falha ao deletar feedback:", res.status, errBody);
        alert("Falha ao deletar feedback. Veja o console para mais detalhes.");
      }
    } catch (err) {
      console.error("Erro de rede ao deletar feedback:", err);
      alert(
        "Erro de rede ao deletar feedback. Veja o console para mais detalhes."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-[2px_5px_10px_rgba(0,0,0,0.2)] rounded-2xl w-[95%] sm:w-full sm:max-w-lg lg:max-w-[45%] p-8 mt-1 mb-4 dark:bg-black dark:border-2 dark:border-white">
      {isLoading ? (
        <div>
          <p className="text-center text-[#4A4A4A] font-bold mt-5 text-xl dark:text-yellow-300">
            Carregando...
          </p>
          <LoadingIcon className="my-5" />
        </div>
      ) : (
        <>
          {/* pop-up de exclusão */}
          {showPopup && (
            <div
              role="status"
              aria-live="polite"
              aria-atomic="true"
              className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50"
            >
              Feedback excluído com sucesso!
            </div>
          )}
          {/* Se já enviou com sucesso, mostra só a mensagem */}
          {showSuccess ? (
            <div className="flex flex-col items-center gap-7 min-h-[90%]">
              <p className="text-blue-500 text-center font-semibold text-lg">
                Obrigado! Sua sugestão foi enviada com sucesso.
              </p>
              <img src={checkmarkIcon} alt="" className="h-15 w-15" />

              <h1 className="text-gray-00 text-center font-semibold text-lg">
                Digitou algo errado? Clique no botão abaixo para deletar seu
                feedback
              </h1>
              <ButtonWrapper
                type="button"
                className="text-blue-500"
                onClick={handleDelete}
              >
                Deletar feedback
              </ButtonWrapper>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-yellow-300">
                Conte-nos mais!
              </h2>

              {/* NOME */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-1 dark:text-yellow-300"
                >
                  Digite seu nome:
                </label>
                <input
                  type="text"
                  autoComplete="name"
                  id="name"
                  {...register("name", {
                    required: "O nome é obrigatório",
                    minLength: {
                      value: 2,
                      message: "O nome deve conter pelo menos duas letras",
                    },
                  })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-yellow-300"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-1 dark:text-yellow-300"
                >
                  Digite seu e-mail:
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "O email é obrigatório",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "O email precisa ser válido",
                    },
                  })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-yellow-300"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* SATISFAÇÃO - NOTA 1 A 10 */}
              <div>
                <span className="block text-gray-700 font-medium mb-2 dark:text-yellow-300">
                  Qual seu nível de satisfação com o site?
                </span>

                <div className="grid grid-cols-5 sm:grid-cols-10 gap-1">
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                    <label key={num} className="cursor-pointer">
                      <input
                        type="radio"
                        value={num}
                        {...register("satisfaction", {
                          required: "Selecione uma nota",
                          valueAsNumber: true,
                        })}
                        className="peer hidden"
                      />
                      <span
                        className="flex items-center justify-center py-2 px-3 rounded-lg bg-gray-200 transition 
                        hover:bg-blue-400 hover:text-white 
                        peer-checked:bg-blue-500 peer-checked:text-white"
                      >
                        {num}
                      </span>
                    </label>
                  ))}
                </div>

                {errors.satisfaction && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.satisfaction.message}
                  </p>
                )}
              </div>

              {/* MENSAGEM */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-1 dark:text-yellow-300"
                >
                  Qual sua sugestão?
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", {
                    required: "A mensagem é obrigatória",
                    minLength: {
                      value: 5,
                      message: "A mensagem deve ser maior!",
                    },
                  })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none dark:text-yellow-300"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* BOTÃO */}
              <ButtonWrapper
                type="submit"
                className="w-full"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Enviar
              </ButtonWrapper>
            </form>
          )}
        </>
      )}
    </div>
  );
}
