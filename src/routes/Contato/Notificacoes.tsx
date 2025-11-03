import { useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import Wrapper from "../../components/Wrapper";
import InfoDiv from "../../components/InfoDiv";
import ButtonWrapper from "../../components/ButtonWrapper";
import type { Contato } from "../../types/contato";

export default function Notificacoes() {
  const [sucesso, setSucesso] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Contato>({
    defaultValues: { sms: false, whatsapp: false },
  });

  const onSubmit: SubmitHandler<Contato> = (data) => {
    const { sms, whatsapp } = data;
    if (!sms && !whatsapp) {
      return alert("Selecione pelo menos um canal: SMS ou WhatsApp.");
    }
    // Marcar sucesso
    setSucesso(true);
    reset();
  };

  return (
    <Wrapper className="justify-center pt-4">
      <InfoDiv className="dark:text-yellow-300">
        <div className="p-6 max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-4">
            Inscreva-se para receber notificações de agendamentos!
          </h1>
          <p className="mb-4">
            Ao se inscrever no nosso sistema de notificações, você será
            avisado(a) de todos seus agendamentos e teleconsultas marcados ao
            menos uma semana antes e um dia anterior.
          </p>

          {sucesso && (
            <div className="mb-4 p-3 bg-green-100 text-green-800 border border-green-300 rounded text-center">
              <p>Inscrição feita com sucesso!</p>
              <p>Pressione o botão abaixo para voltar para a página inicial.</p>
              <ButtonWrapper
                className="mt-5"
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <p>Página Inicial</p>
              </ButtonWrapper>
            </div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            {/* Nome */}
            <input
              type="text"
              placeholder="Nome"
              {...register("nome", { required: "O nome é obrigatório." })}
              className="border p-2 rounded"
            />
            {errors.nome && (
              <span className="text-red-600">{errors.nome.message}</span>
            )}

            {/* Telefone */}
            <input
              type="tel"
              placeholder="Telefone (apenas números)"
              {...register("telefone", {
                required: "O telefone é obrigatório.",
                pattern: {
                  value: /^\d{10,11}$/,
                  message: "Digite um número válido (sem espaços ou traços).",
                },
              })}
              className="border p-2 rounded"
            />
            {errors.telefone && (
              <span className="text-red-600">{errors.telefone.message}</span>
            )}

            {/* Checkbox canais */}
            <label className="flex items-center gap-2">
              <input type="checkbox" {...register("sms")} />
              Receber via SMS
            </label>
            <p className="text-sm text-gray-500">
              * As notificações via SMS funcionam sem internet
            </p>
            <label className="flex items-center gap-2">
              <input type="checkbox" {...register("whatsapp")} />
              Receber via WhatsApp
            </label>

            {/* Botão enviar */}
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mt-2"
            >
              Inscrever-se
            </button>
          </form>
        </div>
      </InfoDiv>
    </Wrapper>
  );
}
