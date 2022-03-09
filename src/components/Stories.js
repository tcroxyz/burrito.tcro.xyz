import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Stories() {
  const [storyData, setStoryData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "stories"]{
      title,
      date,
      slug,
      body,
      storyType,
      description,
    }`
      )
      .then((data) => setStoryData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-purple-100 min-h-screen p-12">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0, duration: 2 }}
        className="container mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl flex justify-center cursive"
        >
          My Stories
        </motion.h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my stories page
        </h2>
        <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {storyData &&
            storyData.map((stories, index) => (
              <article className="relative rounded-lg shadow-xl bg-white p-8 ">
                <Link
                  to={"/stories/" + stories.slug.current}
                  key={stories.slug.current}
                  className="text-purple-200 font-bold hover:underline hover:text-purple-300"
                >
                  <h3 className="text-purple-300 text-3xl font-bold mb-2 hover:text-purple-400">
                    {stories.title}
                  </h3>
                </Link>
                <div className="text-gray-500 text-xs space-x-4 flex flex-col">
                  <span className="ml-4">
                    <strong className="font-bold">Last Updated</strong>:{" "}
                    {new Date(stories.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Genre</strong>:{" "}
                    {stories.storyType}
                  </span>
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {stories.description}
                  </p>
                  <Link
                    to={"/stories/" + stories.slug.current}
                    key={stories.slug.current}
                    className="text-purple-400 font-bold hover:underline hover:text-purple-600"
                  >
                    <span key={index}>Read This Story </span>

                    <span role="img" aria-label="right pointer">
                      👉
                    </span>
                  </Link>
                </div>
              </article>
            ))}
        </section>
      </motion.section>
    </main>
  );
}
