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
    <button onClick={handleClick}>Voltar</button>
  )
}

export default VoltarButton