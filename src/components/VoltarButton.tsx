import { useNavigate } from "react-router-dom";
import ButtonWrapper from "./ButtonWrapper";

 
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
    <ButtonWrapper onClick={handleClick}>
      Voltar
    </ButtonWrapper>
  );
};
 
export default VoltarButton;
 