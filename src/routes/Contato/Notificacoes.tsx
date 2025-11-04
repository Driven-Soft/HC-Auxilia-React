import { useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import Wrapper from "../../components/Wrapper";
import InfoDiv from "../../components/InfoDiv";
import ButtonWrapper from "../../components/ButtonWrapper";
import checkmarkIcon from "../../assets/icones/checkmark.png";
import type { Contato } from "../../types/contato";

export default function Notificacoes() {
  const [sucesso, setSucesso] = useState(false);
  const [escolhaNula, setEscolhaNula] = useState(false);

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
      setEscolhaNula(true);
      setTimeout(() => setEscolhaNula(false), 3000);
      return;
    }
    // Marcar sucesso
    setSucesso(true);
    reset();
  };

  return (
    <Wrapper className="justify-center pt-4">
      <InfoDiv className="dark:text-yellow-300 dark:border-2 dark:border-white">
        <div className="p-6 max-w-md mx-auto">
          {sucesso && (
            <div className="mb-4 p-3 text-blue-600 text-center flex flex-col gap-4 items-center dark:text-yellow-300 dark:border-2 dark:border-white">
              <h1 className="text-3xl font-bold">
                Inscrição feita com sucesso!
              </h1>
              <img
                src={checkmarkIcon}
                alt=""
                className="h-15 w-15 dark:invert"
              />
              <p className="text-xl font-medium">
                Agora você receberá lembretes e mensagens a respeito de seus
                agendamentos próximos, não precisa se preocupar mais!
              </p>
              <p className="pt-4 text-gray-800 font-medium dark:text-yellow-300">
                Pressione o botão abaixo para voltar para a página inicial
              </p>
              <ButtonWrapper
                className="mt-5"
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <p>Página Inicial</p>
              </ButtonWrapper>
            </div>
          )}

          {!sucesso && (
            <>
              <h1 className="text-2xl font-bold mb-4">
                Inscreva-se para receber notificações de agendamentos!
              </h1>
              <p className="mb-4">
                Ao se inscrever no nosso sistema de notificações, você será
                avisado(a) de todos seus agendamentos e teleconsultas marcados
                ao menos uma semana antes e um dia anterior.
              </p>
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
                      message:
                        "Digite um número válido (sem espaços ou traços).",
                    },
                  })}
                  className="border p-2 rounded"
                />
                {errors.telefone && (
                  <span className="text-red-600">
                    {errors.telefone.message}
                  </span>
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
                {escolhaNula && (
                  <div
                    role="status"
                    aria-live="polite"
                    aria-atomic="true"
                    className="px-4 py-2"
                  >
                    <p className="text-red-600 text-sm">
                      Selecione pelo menos um canal: SMS ou WhatsApp.
                    </p>
                  </div>
                )}
                {/* Botão enviar */}
                <ButtonWrapper type="submit" className="w-full mt-4">
                  Inscrever-se
                </ButtonWrapper>
              </form>
            </>
          )}
        </div>
      </InfoDiv>
    </Wrapper>
  );
}
