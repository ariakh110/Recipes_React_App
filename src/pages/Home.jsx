import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import React from "react";

//aniamtion
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <Popular />
      <Veggie />
    </motion.div>
  );
};

export default Home;
