import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const ClientLayout = () => {
  return (
    <>
      <Header />
      <div className="mx-[10%] my-3">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default ClientLayout;
