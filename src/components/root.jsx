import { Outlet } from "react-router-dom";
import Footer from "./features/footer/footer";
import Header from "./features/header";

function RoutesRoot({ title }) {
  return (
    <div>
      <Header title={title} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RoutesRoot;
