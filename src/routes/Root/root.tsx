import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ChatWatson from "../../components/ChatWatson";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-black">
      <Header />
      {/* TUDO DENTRO DO DIV DETAILS É REDIRECIONAMENTO (OUTRAS PAGINAS) */}
      <div id="details" className="flex-1">
        <Outlet />
      </div>
      <ChatWatson /> 
      <Footer />
    </div>
  );
};
export default Root;
