import { motion } from "motion/react";

// variants use
const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 8px rgba(0,0,0,0.3)",
    transition: {
      duration: 0.3,
      yoyo: Infinity, // Creates a repeating animation (works with any number for repeat count)
    },
  },
  tap: {
    scale: 0.9,
  },
};

const HoverAndTap = () => {
  return (
    <>
      <h1>Hover and Tap</h1>
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        style={{
          padding: "10px 20px",
          backgroundColor: "purple",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Click Me
      </motion.button>
      <br />

      <motion.button
        whileHover={{
          scale: 1.1,
          backgroundColor: "palevioletred",
          color: "white",
          borderRadius: "0%",
        }}
        whileTap={{ scale: 0.9, borderRadius: "15%" }}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          marginTop: "20px",
          cursor: "pointer",
          backgroundColor: "pink",
          color: "black",
        }}
      >
        Click Me 2
      </motion.button>

      <br />
    </>
  );
};

export default HoverAndTap;
