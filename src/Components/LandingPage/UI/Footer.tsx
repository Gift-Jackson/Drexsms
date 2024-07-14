import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png"
const Footer = () => {
  const quickLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <>
      <footer className="footer bg-secondary text-base-content p-10">
        <nav>
          <h6 className="footer-title">Quick Links</h6>

          {quickLinks.map((link) => (
            <Link className="link link-hover" key={link.name} to={link.link}>
              {link.name}
            </Link>
          ))}
        </nav>
        
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        
      </footer>

      <footer className="footer bg-primary text-light p-10">
        <aside className="">
          {/* <div className="bg-light rounded-lg text-primary h-[40px] w-[40px] flex items-center justify-center ">
            <span className="material-symbols-outlined font-semibold">
              perm_phone_msg
            </span>
          </div> */}
                  <div className="bg-white rounded-lg p-1"><img src={logo} width={40} alt="Logo" /></div>
          <p className="text-light font-medium text-xl">Drexsms</p>
          <p className="text-light">
            Copyright © {new Date().getFullYear()} - All right reserved by
            Drexsms
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-light">Socials</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <i className="fa-brands fa-x-twitter text-2xl text-white"></i>
            </a>
            <a>
              <i className="fa-brands fa-facebook-f text-2xl text-white"></i>
            </a>
            <a>
              <i className="fa-brands fa-whatsapp text-2xl text-white"></i>
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
