import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import { motion } from "framer-motion";

export default function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-purple-100 min-h-screen p-12 overflow-hidden">
      <motion.section
        exit={{ opacity: 0, duration: 2 }}
        className="container mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="text-5xl flex justify-center cursive"
        >
          Blog Posts Page
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 2 }}
          className="text-large text-gray-600 flex justify-center mb-12"
        >
          Welcome to my blog
        </motion.h2>
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData &&
            postData.map((post, index) => (
              <motion.article
                whileHover={{ scale: 1.05, originX: 0 }}
                whileTap={{ scale: 1.0 }}
                className=""
              >
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span
                    className="block h-64 relative rounded shadow leading-slug bg-white border-l-8 border-purple-400"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className=" text-lg text-bold px-3 py-4 bg-purple-700 text-purple-100 bg-opacity-75 rounded">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </motion.article>
            ))}
        </motion.div>
      </motion.section>
    </main>
  );
}
