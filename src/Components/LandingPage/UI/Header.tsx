import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../../Constants/data";
import Brand from "../../Global/Brand";
import MobileNav from "./MobileNav";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <header className="bg-light fixed w-full border-b border-border z-10">
        <nav className="main h-[60px] md:h-[80px] flex-center-between">
          <div
            onClick={() => setMenu((prev) => !prev)}
            className="flex-center-center md:hidden"
          >
            <span className="material-symbols-outlined">menu</span>
          </div>
          <Brand />
          <div className="md:flex items-center gap-x-12 hidden">
            <ul className="flex items-center gap-7">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-sm font-semibold text-primary"
                        : "text-sm font-medium text-subtext"
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <Link to="/login" className="btn btn-primary">
              <span>Login</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <Link
            to="/login"
            className="md:hidden flex-center-center bg-secondary rounded-lg h-[40px] w-[40px]"
          >
            <span className="material-symbols-outlined">account_circle</span>
          </Link>
        </nav>
      </header>
      <AnimatePresence>
        {menu && <MobileNav closeMenu={() => setMenu((prev) => !prev)} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
