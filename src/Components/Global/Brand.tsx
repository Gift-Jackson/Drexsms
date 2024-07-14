import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
const Brand = () => {
  return (
    <>
      <Link to="/">
        <div className="flex items-center gap-x-1">
          {/* <div className="bg-primary rounded-lg text-light h-[40px] w-[40px] flex items-center justify-center ">
            <span className="material-symbols-outlined">perm_phone_msg</span>
          </div> */}
          <img src={logo} width={40} alt="" />
          <div className="font-bold text-xl">Drexsms</div>
        </div>
      </Link>
    </>
  );
};

export default Brand;
