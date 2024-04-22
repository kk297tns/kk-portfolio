"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Engineer</span>, I decided to continue my
        passion for programming. 
        <span className="font-medium">&nbsp; &nbsp;&nbsp;&nbsp;I have worked as a front-end developer for six years{" "}.</span>
        <span className="font-medium">&nbsp;i am proficient in JavaScript，TypeScript，HTML，CSS</span>.{" "}
        <span className="italic">Im adept at utilizing frameworks like vue and react</span> Im adept at utilizing frameworks like vue and react 
        i have extensive hands-on experience with webpack or vite and rollup for building and optimization projects
        I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
    </motion.section>
  );
}


