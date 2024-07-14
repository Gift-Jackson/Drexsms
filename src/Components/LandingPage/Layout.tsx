import { Outlet } from "react-router-dom";
import Header from "./UI/Header";
import Footer from "./UI/Footer";

const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer/>
      </div>
    </>
  );
};

export default Layout;
