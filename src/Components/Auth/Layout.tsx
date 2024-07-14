import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <main className="main">
        <div className="md:h-[80px] h-[60px] flex items-center justify-start ">
          <Link to="/" className="flex-center-center p-2 px-4 rounded-lg border bg-white shadow text-subtext">
            <span className="material-symbols-outlined text-sm">arrow_back_ios</span>
            <span className="text-sm">Back</span>
          </Link>
        </div>

        <div className="form bg-white p-4 pt-8 rounded-xl border shadow-lg">{children}</div>
      </main>
    </>
  );
};

export default Layout;
