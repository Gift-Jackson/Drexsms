import Header from "./UI/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="main">
        <div className="layout pt-[80px] md:pt-[100px]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
