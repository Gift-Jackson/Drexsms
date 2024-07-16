import { useState } from "react";
import Brand from "../../Global/Brand";
import DropDown from "./DropDown";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const toggleDropDown = () => {
    setDropDown((prev) => !prev);
  };
  const links = [
    {
      name: "Dashboard",
      icon: "dashboard",
      path: "/dashboard",
    },
    {
      name: "Verification Messages",
      icon: "chat",
      path: "/messages",
    },
    {
      name: "Buy Social Account",
      icon: "sentiment_satisfied",
      path: "https://chat.whatsapp.com/HNt060kwacz9fWDMKM5Ddd",
    },
    {
      name: "Fund Wallet",
      icon: "account_balance_wallet",
      path: "/fund-wallet",
    },
  ];
  return (
    <>
      <header className="bg-light fixed w-full border-b border-border z-10">
        <nav className="main h-[60px] md:h-[80px] flex-center-between">
          <Brand />

          <div className="flex items-center gap-x-4 md:gap-x-8">
            <ul className="hidden lg:flex items-center gap-4">
              {links.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-sm font-bold flex-center-center gap-1 text-primary"
                        : "text-sm font-medium flex-center-center gap-1 text-subtext hover:text-maintext"
                    }
                  >
                    <span className="material-symbols-outlined text-xl">
                      {link.icon}
                    </span>
                    <span className="text-sm">{link.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-x-4">
              <div
                onClick={toggleDropDown}
                className="flex-center-center lg:hidden h-12 w-12 bg-secondary rounded-full"
              >
                <span className="material-symbols-rounded text-subtext">
                  dashboard
                </span>
              </div>
              <button className="hidden lg:flex-center-center font-bold text-sm py-2 px-4 rounded-lg gap-1 bg-[crimson]/10 border border-[crimson] text-[crimson]">
                <span>Logout</span>
                <span className="material-symbols-outlined text-base font-bold">
                  logout
                </span>
              </button>
            </div>
          </div>
        </nav>
      </header>
      {dropDown && <DropDown closeDropDown={toggleDropDown} />}
    </>
  );
};

export default Header;
