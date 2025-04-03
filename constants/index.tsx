import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

import projectImage1 from "../assets/project1.png";
import projectImage2 from "../assets/project2.png";
import projectImage3 from "../assets/project3.png";
import projectImage4 from "../assets/project4.png";
import projectImage5 from "../assets/project5.png";
import projectImage6 from "../assets/project6.png";
import projectImage7 from "../assets/project7.png";
import projectImage8 from "@/assets/book-review-logo.png";
import projectImage9 from "@/assets/signature.png";

import htmlImg from "@/assets/html.png";
import cssImg from "@/assets/css.png";
import jsImg from "@/assets/JavaScript.png";
import bootstrapImg from "@/assets/bootstrap.png";
import tailwindcssImg from "@/assets/tailwindcss.png";
import reactImg from "@/assets/react.png";
import nextjsImg from "@/assets/nextJs.png";
import typescriptImg from "@/assets/typescript.png";
import reactnativeImg from "@/assets/reactnative.png";
import phpImg from "@/assets/php.png";
import nodejsImg from "@/assets/nodeJs.png";
import expressJsImg from "@/assets/expressJs.png";
import mongodbImg from "@/assets/mongoDB.png";
import mysqlImg from "@/assets/mysql.png";
import firebaseImg from "@/assets/firebase.png";
import cImg from "@/assets/c.png";
import javaImg from "@/assets/java.png";
import pythonImg from "@/assets/python.png";
import Image from "next/image";
import uwuImg from "@/assets/uwu.jpg";
import jhcImg from "@/assets/jhc.png";
import djangoImg from "@/assets/django.png";
import laravelImg from "@/assets/laravel.png";
import supabaseImg from "@/assets/supabase.png";
import postgresImg from "@/assets/postgresqlicon.png";
import gitImg from "@/assets/git.png";
import githubImg from "@/assets/github.png";
import vscodeImg from "@/assets/vscode.png";
import postmanImg from "@/assets/postman.png";
import linuxImg from "@/assets/linux.png";
import figmaImg from "@/assets/figma.png";
import androidStudioImg from "@/assets/androidstudio.png";
import firestoreImg from "@/assets/firestore.png";



export const NAVIGATION_LINKS = [
  // { label: "Intro", href: "#hero"},
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Sankeethan",
  greet: "Full Stack Developer",
  description:
    "Crafting seamless digital experiences with cutting-edge technologies.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Simple Email Signature",
    description:
      "A simple email signature generator that allows users to create a professional email signature in minutes.",
    image: projectImage9,
    githubLink: "https://www.simpleemailsignature.com/",
    viewDemo:
      "https://www.simpleemailsignature.com/",
    tech: ["Next.js", "Tailwind CSS", "Supabase","PostgreSQL"],
  },
  {
    id: 2,
    name: "TBD Reads",
    description:
      "A book review website that allows users to search for books, read reviews, and add their own reviews.",
    image: projectImage8,
    githubLink: "https://github.com/Sankeethan01/book_review_frontend",
    viewDemo:
      "https://www.linkedin.com/posts/sankee26_django-restapi-nextjs-activity-7291844906162008065-nXK4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEO7lCgB2orVM09nJDGM9LskZmQD6YRmKag",
    tech: ["Next.js", "Tailwind CSS", "Django","Django Rest Framework","PostgreSQL"],
  },
  {
    id: 3,
    name: "QuickMatch",
    description:
      "Academic project that connecting customers and service providers in 4 service categories. React for the frontend, PHP for the backend API, and MySQL for secure database",
    image: projectImage7,
    githubLink: "https://github.com/Sankeethan01/QuickMatch.git",
    viewDemo:
      "https://www.linkedin.com/posts/sankee26_quickmatch-academicproject-webdevelopment-activity-7255576882262282240-VYRm?utm_source=share&utm_medium=member_desktop",
    tech: ["React", "PHP", "MySQL"],
  },
  {
    id: 4,
    name: "My Portfolio Website",
    description:
      "A portfolio website using Next.js, TypeScript, Framer Motion, and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/Sankeethan01/myPortfolio.git",
    viewDemo: "https://sankeethantharmathayalan.vercel.app/",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
  },
  {
    id: 5,
    name: "A Full-stack E-Commerce Website",
    description:
      "An e-commerce web application developed using Next.js, TypeScript, Tailwind CSS, and Wix Headless solutions for featuring a comprehensive real time product cart.",
    image: projectImage2,
    githubLink: "https://github.com/Sankeethan01/starlight.git",
    viewDemo: "https://starlightonlineshopping.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Wix Headless solutions"],
  },
  {
    id: 6,
    name: "A News Reading Website",
    description:
      "A latest Sri Lankan and world news viewing web app built with Next.js, Tailwind CSS, and MongoDB for efficient data fetching, including features like news searching, and contact section.",
    image: projectImage3,
    githubLink: "https://github.com/Sankeethan01/news-app-NextJs.git",
    viewDemo:
      "https://www.linkedin.com/posts/sankee26_nextjs-tailwindcss-mongodb-activity-7243516175349874690-vxHd?utm_source=share&utm_medium=member_desktop",
    tech: ["Next.js", "Tailwind CSS", "MongoDB"],
  },
  {
    id: 7,
    name: "Scheduling Task Application",
    description:
      "A ToDo application that uses the MongoDb to fetch and display current saved tasks, add new tasks and update tasks, built with React, Node.js, Express.js, and Bootstrap.",
    image: projectImage4,
    githubLink: "https://github.com/Sankeethan01/todo-backend-MERN.git",
    viewDemo:
      "https://www.linkedin.com/posts/sankee26_mernstack-fullstackdevelopment-javascript-activity-7243152058424397824-JNKw?utm_source=share&utm_medium=member_desktop",
    tech: ["React", "Node.js", "Express.js", "Bootstrap"],
  },
  {
    id: 8,
    name: "A Custom Youtube Clone",
    description:
      "CloneTube - A realtime youtube clone created with React and Youtube API. This showcases latest youtube videos, play videos, choose videos by category, and accurate video informations.",
    image: projectImage5,
    githubLink: "https://github.com/Sankeethan01/YouTube-clone.git",
    viewDemo: "https://remarkable-longma-4b8991.netlify.app/",
    tech: ["React", "Youtube API"],
  },
  {
    id: 9,
    name: "An attractive Image Gallery",
    description:
      "A real-time free image application using Pexels API for backend services. Built with HTML, CSS, and JavaScript. Images can be viewable, searchable, and downloadable.",
    image: projectImage6,
    githubLink: "https://github.com/Sankeethan01/ImageGallery.git",
    viewDemo: "https://stellular-banoffee-1dd6aa.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export const BIO = [
  "I am an enthusiastic Full Stack Developer with a strong foundation in modern technologies like React, Node.js, and PHP. My journey began with a fascination for technology, leading me to create seamless web applications that enhance user experiences.",
  "Collaboration drives my work ethic. I thrive in dynamic environments, exchanging ideas with fellow developers and designers to craft innovative solutions. My focus on clean, efficient code ensures that projects remain maintainable.",
  "In my spare time, I explore new programming languages and frameworks, continuously expanding my skill set and pushing the boundaries of software development.",
];

export const FRONTENDSKILLS = [
  {
    id: 1,
    icon: <Image src={nextjsImg} alt="nextJs" width={60} height={60} />,
    name: "Next.js",
  },
  {
    id: 2,
    icon: <Image src={typescriptImg} alt="typescript" width={60} height={60} />,
    name: "TypeScript",
  },
  {
    id: 3,
    icon: <Image src={reactImg} alt="react" width={60} height={60} />,
    name: "React",
  },
  {
    id: 4,
    icon: (
      <Image src={tailwindcssImg} alt="tailwindcss" width={60} height={60} />
    ),
    name: "Tailwind CSS",
  },
  {
    id: 5,
    icon: (
      <Image src={reactnativeImg} alt="reactnative" width={60} height={60} />
    ),
    name: "React Native",
  },
  {
    id: 6,
    icon: <Image src={bootstrapImg} alt="bootstrap" width={60} height={60} />,
    name: "Bootstrap",
  },
  {
    id: 7,
    icon: <Image src={jsImg} alt="javascript" width={60} height={60} />,
    name: "JavaScript",
  },
  {
    id: 8,
    icon: <Image src={cssImg} alt="css" width={60} height={60} />,
    name: "CSS",
  },
  {
    id: 9,
    icon: <Image src={htmlImg} alt="html" width={60} height={60} />,
    name: "HTML",
  },
];

export const BACKENDSKILLS = [
  {
    id: 1,
    icon: <Image src={djangoImg} alt="django" width={100} height={100} />,
    name: "Django",
  },
  {
    id: 2,
    icon: <Image src={nodejsImg} alt="nodeJs" width={60} height={60} />,
    name: "Node.js",
  },
  {
    id: 3,
    icon: <Image src={expressJsImg} alt="expressJs" width={60} height={60} />,
    name: "Express.js",
  },
  {
    id: 4,
    icon: <Image src={phpImg} alt="php" width={60} height={60} />,
    name: "PHP",
  },
  {
    id: 5,
    icon: (
      <Image src={laravelImg} alt="laravel" width={60} height={60} />
    ),
    name: "Laravel",
  },
  {
    id: 6,
    icon: <Image src={firebaseImg} alt="firebase" width={60} height={60} />,
    name: "Firebase",
  },
  {
    id: 7,
    icon: <Image src={supabaseImg} alt="supabase" width={60} height={60} />,
    name: "Supabase",
  },
];

export const DATABASE = [
  {
    id: 1,
    icon: <Image src={mysqlImg} alt="mysql" width={60} height={60} />,
    name: "MySQL",
  },
  {
    id: 2,
    icon: <Image src={mongodbImg} alt="mongodb" width={60} height={60} />,
    name: "MongoDB",
  },
  {
    id: 3,
    icon: <Image src={postgresImg} alt="postgres" width={60} height={60} />,
    name: "PostgreSQL",
  },
  {
    id: 4,
    icon: <Image src={firestoreImg} alt="firestore" width={60} height={60} />,
    name: "Firestore",
  },
];

export const CUSTOMTECS = [
  {
    id: 1,
    icon: <Image src={javaImg} alt="java" width={60} height={60} />,
    name: "Java",
  },
  {
    id: 2,
    icon: <Image src={pythonImg} alt="python" width={60} height={60} />,
    name: "Python",
  },
  {
    id: 3,
    icon: <Image src={cImg} alt="C" width={60} height={60} />,
    name: "C",
  },
  {
    id: 4,
    icon: <Image src={figmaImg} alt="figma" width={100} height={100} />,
    name: "Figma",
  },
  {
    id: 5,
    icon: <Image src={androidStudioImg} alt="androidStudio" width={60} height={60} />,
    name: "Android Studio",
  },
  {
    id: 6,
    icon: <Image src={gitImg} alt="git" width={60} height={60} />,
    name: "Git",
  },
  {
    id: 7,
    icon: <Image src={githubImg} alt="github" width={60} height={60} />,
    name: "GitHub",
  },
  {
    id: 8,
    icon: <Image src={vscodeImg} alt="vscode" width={60} height={60} />,
  },
  {
    id: 9,
    icon: <Image src={postmanImg} alt="postman" width={60} height={60} />,
  },
  {
    id: 10,
    icon: <Image src={linuxImg} alt="linux" width={60} height={60} />,
    name: "Linux",
  },
  
];


export const skills = [FRONTENDSKILLS, BACKENDSKILLS, DATABASE, CUSTOMTECS];

export const EDUCATION = [
  {
    degree: "Bsc(Hons) in Computer Science and Technology",
    institution: "Uva Wellassa University",
    duration: "September 2022 - September 2026",
    description: "Fundamendals to Advance computer science field education.",
    img: (
      <Image
        src={uwuImg}
        alt="uwu"
        width={150}
        height={150}
        className="rounded-md object-cover"
      />
    ),
  },
  {
    degree: "Secondary Education",
    institution: "Jaffna Hindu College",
    duration: "January 2012 -   October 2020",
    description: "Secondary level education to advance level Mathematics",
    img: (
      <Image
        src={jhcImg}
        alt="jhc"
        width={150}
        height={150}
        className="rounded-md object-cover"
      />
    ),
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/Sankeethan01",
    icon: <FaGithub fontSize={50} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/sankee26",
    icon: <FaLinkedin fontSize={50} className="hover:opacity-80" />,
  },
  {
    href: "mailto:sankeethantharmathayalan@gmail.com",
    icon: <FaEnvelope fontSize={50} className="hover:opacity-80" />,
  },
];
