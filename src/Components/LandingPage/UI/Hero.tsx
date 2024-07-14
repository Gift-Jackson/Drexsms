import { Link } from "react-router-dom";
import globe from "../../../assets/globe.svg";
const Hero = () => {
  return (
    <>
      <div className="main flex items-center flex-col md:flex-row pt-[100px] gap-10">
        <div className="flex-1">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h1 className="font-bold text-3xl md:text-5xl font-poppins">
              Get your virtual <br />number up and running{" "}
              <span className="text-primary">in minutes</span>.🚀
            </h1>
            <p className="text-subtext text-sm md:text-base">
              Empower your online presence with reliable virtual numbers.
              Seamlessly receive verification codes from top platforms like
              WhatsApp, Google Voice, and more.
            </p>
          </div>
          <div className="flex flex-col-reverse gap-2 md:flex-row md:gap-4 mt-8">
            <Link to="/login">
              <button className="btn h-[50px] w-[80%] md:w-[200px] mx-auto border">
                <span className="material-symbols-outlined">
                  qr_code_scanner
                </span>
                <span>Get Code</span>
              </button>
            </Link>
            <Link to="/register">
              <button className="btn btn-primary h-[50px] w-[80%] md:w-[200px] mx-auto ">
                <span>Get Started</span>
                <span className="material-symbols-outlined">
                  arrow_forward_ios
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1" data-aos="zoom-in" data-aos-delay="500">
          <img src={globe} alt="The Globe" />
        </div>
      </div>
    </>
  );
};

export default Hero;
