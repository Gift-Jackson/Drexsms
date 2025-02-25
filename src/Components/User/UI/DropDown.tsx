import { NavLink } from "react-router-dom";
import Modal from "../../Global/Modal";

interface Props {
  closeDropDown: () => void;
}
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
const DropDown: React.FC<Props> = ({ closeDropDown }) => {
  return (
    <>
      <Modal title="Quick Actions" closeModal={closeDropDown}>
        <div className="flex flex-col gap-y-2 mt-4">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <NavLink to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "bg-secondary block p-2 rounded-lg pl-4 border text-primary text-base font-semibold"
                    : "hover:bg-secondary block p-2 rounded-lg pl-4 text-subtext text-sm"
                }
                >
                  <div className="flex items-center gap-x-4 text-inherit">
                    <span className="material-symbols-outlined">{link.icon}</span>
                    <span>{link.name}</span>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
          <button className="btn gap-4 bg-[crimson]/10 border border-[crimson] text-[crimson]">
            <span className="material-symbols-outlined">
              logout
            </span>
            <span>Logout</span>
          </button>
        </div>
      </Modal>
    </>
  );
};

export default DropDown;
