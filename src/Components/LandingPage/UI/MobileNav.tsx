import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../../Constants/data";
import Modal from "../../Global/Modal";

interface Props {
    closeMenu:()=>void
}

const MobileNav: React.FC<Props> = ({closeMenu}) => {
  return (
    <>
      <Modal closeModal={closeMenu} title="Menu">
        <div className="flex flex-col gap-4 pt-2">
          <ul className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <li key={item.label}>
                    <NavLink to={item.path}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            isActive ?
                                "bg-secondary block p-2 rounded-lg pl-4 border text-primary text-base font-semibold" :
                                "hover:bg-secondary block p-2 rounded-lg pl-4 text-sm"
                        }
                    > {item.label} </NavLink>
              </li>
            ))}
          </ul>

          <Link to="/login">
            <button className="btn btn-primary w-1/2">
              <span>Login</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </Link>
        </div>
      </Modal>
    </>
  );
};

export default MobileNav;
