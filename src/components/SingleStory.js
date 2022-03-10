import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import { useParams } from "react-router-dom";
import BlockConent from "@sanity/block-content-to-react";
import { motion } from "framer-motion";

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            date,
            slug,
            body,
            storyType,
            description,
    }
    `
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost)
    return (
      <div className="justify-center items-center flex min-h-screen bg-purple-100"></div>
    );

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0, duration: 2 }}
      className="bg-purple-100 min-h-screen p-12"
    >
      <article className="container shadow-lg mx-auto bg-purple-200 rounded-lg border-2 border-gray-100">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className="bg-purple-300 bg-opacity-75 rounded p-12 mt-10 shadow-lg border-2 border-gray-100">
              <h1 className="cursive text-3xl lg:text-6xl mb-4">
                {singlePost.title}
              </h1>
              <p className="cursive flex items-center justify-center pl-2 text-2xl">
                {singlePost.name}
              </p>
            </div>
          </div>
        </header>
        <div className="px-6 lg:px-20 py-40 lg:py-40 prose lg:prose-xl max-w-full  rounded-md ">
          <BlockConent
            blocks={singlePost.body}
            projectId="b1p89kdm"
            dataset="production"
          />
        </div>
      </article>
    </motion.main>
  );
}
