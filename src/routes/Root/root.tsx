import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ChatWatson from "../../components/ChatWatson";

const Root = () => {
  return (
    <>
      <Header />
      {/* TUDO DENTRO DO DIV DETAILS É REDIRECIONAMENTO (OUTRAS PAGINAS) */}
      <div id="details">
        <Outlet />
      </div>
      <ChatWatson />
      <Footer />
    </>
  );
};
export default Root;
