import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <main className="main">
        <div className="md:h-[80px] h-[60px] flex items-center justify-start ">
          <Link
            to="/"
            className="flex-center-center p-2 px-4 rounded-lg border bg-white text-subtext"
          >
            <span className="material-symbols-outlined text-sm">
              arrow_back_ios
            </span>
            <span className="text-sm">Back</span>
          </Link>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="500"
          className="form bg-white p-4 pt-8 rounded-xl border"
        >
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
