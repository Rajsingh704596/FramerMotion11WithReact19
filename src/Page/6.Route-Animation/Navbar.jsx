import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div>Navbar Link</div>
      <nav>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </nav>

      <AnimatePresenceCom />
    </>
  );
};

export default Navbar;

//AnimatePresence (Old Method)
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const AnimatePresenceCom = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <button
        className="bg-blue-400 rounded-lg w-30 h-10"
        onClick={() => setShow(!show)}
      >
        Toggle click
      </button>
      <AnimatePresence>
        {show && (
          <motion.div
            key="box"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
          >
            Bye Bye
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
