import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Root = () => {
  return (
    <>
      <Header />
      {/* TUDO DENTRO DO DIV DETAILS É REDIRECIONAMENTO (OUTRAS PAGINAS) */}
      <div id="details">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Root;
