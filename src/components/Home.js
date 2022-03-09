import React from "react";
import image from "../libarary_pic.jpg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0, duration: 2 }}
    >
      <img
        src={image}
        alt="Library"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-20 lg:pt-40 px-8">
        <div className="bg-white bg-opacity-40 rounded-2xl p-6 h-fit">
          <h1 className="text-center text-5xl lg:text-6xl text-gray-700 font bold cursive leading-none lg:leading-snug home-name drop-shadow-lg ">
            Hello, I am Burrito
          </h1>
        </div>
      </section>
    </motion.main>
  );
}
