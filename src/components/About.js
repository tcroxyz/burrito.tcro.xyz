import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import abouttea from "../abouttea.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { motion } from "framer-motion";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
          name,
          bio,
          "authorImage": image
      }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) {
    return <div className="bg-purple-100 h-screen"></div>;
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0, duration: 2 }}
      className="relative bg-purple-100"
    >
      <img
        src={abouttea}
        alt="Tea and Books"
        className="absolute object-cover w-full h-screen bg-purple-100"
      />
      <div className="p-8 lg:pt-48 container mx-auto relative">
        <section className="bg-purple-800 opacity-80 rounded-lg shadow-2xl lg:flex p-8">
          <img
            src={urlFor(author.authorImage).url()}
            className=" rounded-full w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-4xl lg:text-6xl text-purple-300 mb-4">
              Hey, I'm{" "}
              <span className="text-white text-4xl lg:text-7xl">
                {author.name}
              </span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              <BlockContent
                blocks={author.bio}
                projectId="b1p89kdm"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </motion.main>
  );
}
