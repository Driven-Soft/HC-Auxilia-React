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
        className="bg-[#3F58FF] text-white font-semibold px-6 py-3 rounded-md
                   text-center
                   transition-all duration-300 ease-in-out
                   hover:bg-[#0022ff] hover:scale-105"
      >
        Voltar
      </button>
    </div>
  );
};
 
export default VoltarButton;