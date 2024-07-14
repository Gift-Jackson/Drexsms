import { motion } from "framer-motion";
import { useEffect } from "react";
interface Props {
  children: React.ReactNode;
  title: string;
  closeModal: () => void;
}

const Modal: React.FC<Props> = ({ children, title, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  const modalVar = {
    initial: {
      y: 40,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        // damping: 20,
        stiffness: 300,
        // mass: 0.5,
      },
    },
    exit: {
      y: 40,
      opacity: 0,
    },
  };
  const overlay = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <>
      <div className="fixed inset-0 z-10">
        <motion.div
          variants={overlay}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 bg-[rgba(0,0,0,0.5)] -z-10"
          onClick={closeModal}
        ></motion.div>
        <motion.div
          variants={modalVar}
          initial="initial"
          animate="animate"
          exit="exit"
          className="relative bg-light z-20 minmax-width mx-auto mt-20 rounded-xl p-6 shadow-xl"
        >
          <div className="mt-4 pb-2">
            <h2 className="font-semibold text-xl">{title}</h2>
            <div
              className="absolute top-4 right-3 p-2 text-sm border-2 text-subtext rounded-lg"
              onClick={closeModal}
            >
              Esc
            </div>
          </div>
          <div>{children}</div>
        </motion.div>
      </div>
    </>
  );
};

export default Modal;
