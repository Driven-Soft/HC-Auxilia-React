import { useNavigate } from "react-router-dom";
 
const VoltarButton = () => {
  const navigate = useNavigate();
 
  const handleClick = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };
 
  return (
    <div className="flex justify-center py-4">
      <button
        onClick={handleClick}
        className="
          bg-gradient-to-r from-[#3F58FF] to-[#0022FF]
          text-white font-semibold px-6 py-3 rounded-md
          text-center
          transition-all duration-200 ease-in-out
          hover:brightness-120 hover:scale-110
        ">
        Voltar
      </button>
    </div>
  );
};
 
export default VoltarButton;