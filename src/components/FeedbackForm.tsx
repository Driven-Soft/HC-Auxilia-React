import { useForm } from "react-hook-form";
import ButtonWrapper from "./ButtonWrapper";

type FeedbackFormData = {
  name: string;
  email: string;
  satisfaction: number;
  message: string;
};

export default function FeedbackForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FeedbackFormData>();

  const onSubmit = (data: FeedbackFormData) => {
    console.log("📩 Dados enviados:", data);
    reset();
  };

  return (
    <div className="bg-white shadow-[2px_5px_10px_rgba(0,0,0,0.2)] rounded-2xl w-[95%] sm:w-full sm:max-w-lg lg:max-w-[45%] p-8 mt-1 mb-4">
    {/* Se já enviou com sucesso, mostra só a mensagem */}
    {isSubmitSuccessful ? (
        <div className="flex flex-col items-center gap-7 min-h-[90%]">
            <p className="text-blue-500 text-center font-semibold text-lg">
                Obrigado! Sua sugestão foi enviada com sucesso.
            </p>
            <img src="/src/assets/icones/checkmark.png" alt="" className="h-15 w-15" />
        </div>
    ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <h2 className="text-2xl font-bold text-center text-gray-800">
                Conte-nos mais!
            </h2>

            {/* NOME */}
            <div>
                <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-1"
                >
                Digite seu nome:
                </label>
                <input
                type="text"
                id="name"
                {...register("name", {
                    required: "O nome é obrigatório",
                    minLength: {
                    value: 2,
                    message: "O nome deve conter pelo menos duas letras",
                    },
                })}
                autoComplete="off"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="block text-gray-700 font-medium mb-1"
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
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                </p>
                )}
            </div>

            {/* SATISFAÇÃO - NOTA 1 A 10 */}
            <div>
                <span className="block text-gray-700 font-medium mb-2">
                Qual seu nível de satisfação com o site?
                </span>

                <div className="grid grid-cols-5 sm:grid-cols-10 gap-1">
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                    <label
                    key={num}
                    className="cursor-pointer"
                    >
                    <input
                        type="radio"
                        value={num}
                        {...register("satisfaction", {
                        required: "Selecione uma nota",
                        })}
                        className="peer hidden"
                    />
                    <span className="flex items-center justify-center py-2 px-3 rounded-lg bg-gray-200 transition 
                        hover:bg-blue-400 hover:text-white 
                        peer-checked:bg-blue-500 peer-checked:text-white">
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
                className="block text-gray-700 font-medium mb-1"
                >
                Qual sua sugestão?
                </label>
                <textarea
                id="message"
                rows={5}
                {...register("message", {
                    required: "A mensagem é obrigatória",
                    minLength: { value: 5, message: "A mensagem deve ser maior!" },
                })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
                {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                </p>
                )}
            </div>

            {/* BOTÃO */}
            <ButtonWrapper type="submit" className="w-full"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                Enviar
            </ButtonWrapper>
        </form>
    )}
    </div>
  );
}
