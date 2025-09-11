import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

const Root = () => {
  return (
    <>
      <Header />
      <div>Root</div>
      <div id="details">
        <Outlet />
      </div>
    </>
  );
};
export default Root;
