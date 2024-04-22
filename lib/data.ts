import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  {
    title: "Meituan",
    location: "Front-End Developer",
    description:
      "As the Frontend Owner of the risk control operations system, I spearheaded the system upgrade initiative. Primary responsibilities included enhancing product usability, expanding strategy configuration functionalities, and optimizing existing technical solutions, resulting in a significant boost in risk control operations efficiency",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2023",
  },
  {
    title: "Beijing Yunsan World Information Technology Co., Ltd.",
    location: "Front-End Developer",
    description:
      "Using React Native and Vue, I developed functionalities for both the merchant app and the supply chain platform",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2021",
  },
  {
    title: "YunBaoBao Big Data Industry ",
    location: "Front-End Developer",
    description:
      "Participated in H5 and web application development, utilizing Angular, TypeScript, and RxJS, encompassing requirement analysis, technology stack selection, feature implementation, deployment, and bug fixing",
    icon: React.createElement(FaReact),
    date: "2019 - 2020",
  },
  {
    title: "C2B Network Technology Co., Ltd.",
    location: "Front-End Developer",
    description:
      "Thoroughly understanding and analyzing business requirements, delivering high-quality web system functionalities for deployment.Rapidly mastering new technologies, autonomously completing mini-program development and deployment.",
    icon: React.createElement(FaReact),
    date: "2017 - 2018",
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Vue",
  "React",
  "React-Native",
  "Next.js",
  "Node.js",
  "Tailwind",
  "Sass",
  "Webpack",
  "rollup",
  "Git",
  "Jenkins",
  "Nginx",
  "Prisma",
] as const;
