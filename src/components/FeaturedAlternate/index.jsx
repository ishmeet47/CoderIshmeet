import React, { useState } from "react";
import images from "../../constants/image";
import { GlobeAltIcon } from "@heroicons/react/outline";
import RichText from "../RichText";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    image: images.survey,
    heading: "Eazy Survey ",
    description:
      "<p>Developed a survey platform with automated user management and email notifications, increasing survey participation by 70% and reducing admin workload by 40%.</p>",
    // websiteLink: "https://catify-app.netlify.app/",
    githubLink: "https://github.com/ishmeet47/Eazy-Survey",
    // techno
    TypeScript : true, Angular13 : true, MS_SQL_Server: true, Nodejs : true, CSharp : true, DOTNET  : true
  },
  {
    id: 2,
    image: images.portfolio,
    heading: "Personal Portfolio",
    description:
      "<p>Built a dynamic personal portfolio using Vite, React, and Tailwind CSS, featuring responsive design and seamless form submissions via EmailJS. Integrated Framer Motion for animations and utilized HeadlessUI and Heroicons for a modern interface, deployed on Netlify for optimized performance. </p>",
    // websiteLink: "https://catify-app.netlify.app/",
    githubLink: "https://github.com/ishmeet47/CoderIshmeet",
    // techno
    Vite : true, React : true, Tailwind_CSS : true, EmailJS : true, HeadlessUI : true, Heroicons : true, FramerMotion : true, Netlify : true
  },
  {
    id: 3,
    image: images.aiportfolio,
    heading: "AI Portfolio Builder",
    description:
      "<p>Built an AI-powered web application for portfolio creation from resumes, automating the process to reduce creation time by 50% and supporting both manual data input and PDF upload. </p>",
    // websiteLink: "https://catify-app.netlify.app/",
    githubLink: "https://github.com/ishmeet47/AI-Powered-Portfolio-Builder",
    // techno
    JavaScript : true, ReactJS : true, Redux : true, MongoDB : true, NodeJs : true, Python : true, REST_APIs : true, Flask : true
  },
  {
    id: 4,
    image: images.elearning,
    heading: "E-Learning Platform",
    description:
      "<p>Developed online learning platform, integrating LMS features, Stripe payments, automated emails, and tools for course, assignment, and grading management. </p>",
    // websiteLink: "https://catify-app.netlify.app/",
    githubLink: "https://github.com/ishmeet47/E-Learning-Platform",
    // techno
    Python : true, Django : true, SQLite : true
    },
  {
    id: 5,
    image: images.e2eiot,
    heading: "E2E IoT Encryption System",
    description:
      "<p>Developed an IoT networking project focused on data security using Raspberry PI for sensor data collection. Implemented end-to-end encryption using Tiny Encryption Algorithm (TEA) for secure communication. </p>",
    // websiteLink: "https://catify-app.netlify.app/",
    githubLink: "https://github.com/ishmeet47/e2e-tea-encryption",
    // techno
    JavaScript : true, Python : true
  },
  {
    id: 6,
    image: images.socket,
    heading: "Advanced Systems Programming – Socket Programming",
    description:
      "<Also>One of my top graded university project.<p/> <br/> <p>Built the server client project where client connects to the server using sockets and requests the data based on five different commands which are handled individually</p> <br/> <p>Implemented the sockets and the respective bind, listen and accept functions </p> <br/> <p> Implemented the load balancing feature by creating the mirror file so that once the server reaches the limit of handling the clients it can redirect it to the mirror</p>",
    githubLink: "https://github.com/ishmeet47/SOCKET-PROGRAMMING",
    html: false,
    css: false,
    javascript: false,
    // hubspot: true,
    // tailwind: true,
    git: true,
    github: true,
    c: true
  },
  {
    id: 7,
    image: images.pubgLogo,
    heading: "Clustering and Analysis on Behavioral Data of PUBG Game ",
    description:
      "<Also>One of my most innovative project.<p/> <br/> <p> The Project focuses on clustering and analyzing behavioral data of players in the popular online game, PUBG </p> <br/> <p> The aim of the project is to cluster players based on their behavior and analyze the results to identify patterns and insights that can be used to improve the game </p> <br/> <p> The methodology involves collecting gameplay data from a large sample of players, performing feature engineering and data cleaning, and using machine learning algorithms such as K-means clustering and principal component analysis to cluster players based on their behavior. </p> ",
    // websiteLink: "https://shorten-app.netlify.app/",
    // githubLink: "https://github.com/felixmacaspac/fem-url-shortener-website",
    // techno
    html: false,
    css: false,
    javascript: false,
    python: true
  },
  {
    id: 8,
    image: images.frigg,
    heading: "Smart Frigg Management System",
    description:
      "<p>Created the Smart Frigg management application for users to do the grocery shopping by adding items to shop and removing items from the system which are already bought</p> <br/> <p> Application has the feature to suggest the products which are expiring soon, so that the user can first use those items </p> <br/> <p> Application supports the user to link up to 5 family members so users can access the same data </p>",
    // websiteLink: "https://sunny-page.netlify.app/",
    githubLink: "https://github.com/ishmeet47/frigg-backend",
    // techno
    html: true,
    css: true,
    javascript: true,
    aws: true,
    mysql: true,
    angular: true,
    react: true,
    android: true,
    typescript: true
  },
  {
    id: 9,
    image: images.flight,
    heading: "Flight Price Analysis",
    description:
      "<p>Implemented a search engine similar to the Skyscanner website by building web crawler and included data validation</p> <br/> <p>Also implemented Inverted Indexing, Frequency count, Html Parser, Page ranking algorithm, Spell checker, Word Completion and search frequency </p>",
    // websiteLink: "https://catify-app.netlify.app/",
    githubLink: "https://github.com/ishmeet47/ACC-SKYSCANNER",
    // techno
    html: true,
    css: true,
    javascript: true,
    java: true,
    selenium: true
  },
  {
    id: 10,
    image: images.crypto,
    heading: "Analyzing Cryptocurrency and E-voting using Blockchain",
    description:
      "<p>Implemented a decentralized e-voting system on Ethereum by leveraging smart contracts for transparent, immutable vote recording, and cryptographic methods for secure voter authentication.</p>",
    // websiteLink: "https://catify-app.netlify.app/",
    // githubLink: "https://github.com/ishmeet47/e2e-tea-encryption",
    // techno
    Ethereum : true, Solidity : true, Cryptography : true, Geth : true, MetaMask : true, Truffle :  true 
  },
  
    
];

const CardGrid = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-20 mt-32 md:gap-40 lg:gap-60">
        {projects.map((proj) => (
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "linear", duration: 0.5 }}
            key={proj.id}
            className="featured-alt flex even:flex-col-reverse odd:flex-col-reverse gap-10 items-start relative md:gap-20 md:even:flex-row md:odd:flex-row-reverse"
          >
            <span className="featured-no absolute text-[10rem] text-primary-300 -top-32 opacity-20 hidden xl:block">
              0{proj.id}
            </span>
            <div className="w-full z-10 md:w-1/2">
              <h3 className="text-primary text-4xl font-semibold mb-4 dark:text-white">
                {proj.heading}
              </h3>
              <RichText
                className="text-primary-400 text-base dark:text-neutral-300"
                content={proj.description}
              />
              <div className="flex flex-row relative">
                <div className="flex flex-row justify-center gap-4 py-10">
                  {proj.websiteLink && (
                    <a
                      className="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring"
                      href={proj.websiteLink}
                      target="_blank"
                    >
                      <span className="absolute inset-0 border border-secondary group-active:border-secondary"></span>
                      <span className="flex items-center gap-3 px-4 py-3 transition-transform bg-secondary border border-secondary active:border-secondary active:bg-secondary group-hover:-translate-x-1 group-hover:-translate-y-1">
                        <GlobeAltIcon className="w-6 h-6" />
                        Website
                      </span>
                    </a>
                  )}
                  {proj.githubLink && (
                    <a
                      className="relative inline-block text-sm font-medium text-secondary dark:text-secondary-50 active:text-secondary group focus:outline-none focus:ring"
                      href={proj.githubLink}
                      target="_blank"
                    >
                      <span className="absolute inset-0 border border-current"></span>
                      <span className="flex flex-row gap-3 items-center px-4 py-3 transition-transform bg-transparent border border-current group-hover:-translate-x-1 group-hover:-translate-y-1">
                        <svg
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-secondary dark:text-secondary-50 fill-current"
                        >
                          <path
                            d="M10.2397 0.517241C4.86796 0.517241 0.51709 4.86811 0.51709 10.2399C0.51709 14.5421 3.30019 18.1759 7.16493 19.4642C7.65106 19.5493 7.83336 19.2576 7.83336 19.0024C7.83336 18.7714 7.8212 18.0058 7.8212 17.1915C5.3784 17.6412 4.74643 16.596 4.55197 16.0491C4.4426 15.7696 3.96862 14.9067 3.55541 14.6758C3.21512 14.4935 2.72898 14.0438 3.54325 14.0317C4.30891 14.0195 4.85581 14.7366 5.03811 15.0282C5.91314 16.4988 7.31077 16.0856 7.86982 15.8304C7.95489 15.1984 8.21011 14.773 8.48963 14.53C6.32635 14.2869 4.06584 13.4483 4.06584 9.72942C4.06584 8.67208 4.4426 7.79705 5.06241 7.11647C4.96519 6.8734 4.62489 5.87683 5.15964 4.53997C5.15964 4.53997 5.97391 4.28475 7.83336 5.53654C8.61117 5.31778 9.43759 5.2084 10.264 5.2084C11.0904 5.2084 11.9169 5.31778 12.6947 5.53654C14.5541 4.2726 15.3684 4.53997 15.3684 4.53997C15.9031 5.87683 15.5628 6.8734 15.4656 7.11647C16.0854 7.79705 16.4622 8.65993 16.4622 9.72942C16.4622 13.4605 14.1895 14.2869 12.0262 14.53C12.3787 14.8338 12.6825 15.4171 12.6825 16.3286C12.6825 17.629 12.6704 18.6742 12.6704 19.0024C12.6704 19.2576 12.8527 19.5614 13.3388 19.4642C15.2689 18.8125 16.946 17.5721 18.1342 15.9173C19.3224 14.2626 19.9617 12.277 19.9623 10.2399C19.9623 4.86811 15.6114 0.517241 10.2397 0.517241Z"
                            fill="current"
                          />
                        </svg>
                        Github
                      </span>
                    </a>
                  )}
                </div>
              </div>
              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center">
                  <span className="uppercase px-2 bg-white text-sm text-gray-500 dark:bg-primary">
                    TECHNOLOGIES USED
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 py-6">
                {proj.html && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.htmlLogo}
                      alt="html logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.css && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.cssLogo}
                      alt="css logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.javascript && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.javascriptLogo}
                      alt="javascript logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.git && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.gitLogo}
                      alt="git logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.github && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.githubLogo}
                      alt="github logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.react && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.reactLogo}
                      alt="react logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.aws && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.awsLogo}
                      alt="aws logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.android && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.androidLogo}
                      alt="android logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.angular && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.angularLogo}
                      alt="angular logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.apachelog4j && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.apacheLog4jLogo}
                      alt="apachelog4j logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.c && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.cLogo}
                      alt="c logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.cplusplus && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.cPlusPlusLogo}
                      alt="cplusplus logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.django && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.djangoLogo}
                      alt="django logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.grails && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.grailsLogo}
                      alt="grails logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.groovy && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.groovyLogo}
                      alt="groovy logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.hibernate && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.hibernateLogo}
                      alt="hibernate logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.java && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.javaLogo}
                      alt="java logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.jenkins && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.jenkinsLogo}
                      alt="jenkins logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.microsoftsqlserver && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.microsoftSqlServerLogo}
                      alt="microsoftsqlserver logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.mongodb && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.mongodbLogo}
                      alt="mongodb logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.mysql && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.mysqlLogo}
                      alt="mysql logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.python && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.pythonLogo}
                      alt="python logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.redux && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.reduxLogo}
                      alt="redux logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.selenium && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.seleniumLogo}
                      alt="selenium logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.spring && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.springLogo}
                      alt="spring logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.sql && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.sqlLogo}
                      alt="sql logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.sqlite && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.sqliteLogo}
                      alt="sqlite logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.typescript && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.typescriptLogo}
                      alt="typescript logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.jdbc && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.jdbcLogo}
                      alt="jdbc logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                

              
                {/* {proj.next && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.htmlLogo}
                      alt="nextJS logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )} */}
                {/* {proj.hubspot && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.hubspotLogo}
                      alt="hubspot logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )} */}
                {/* {proj.tailwind && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.tailwindLogo}
                      alt="tailwind logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )} */}
              </div>
            </div>
            <div className="w-full z-10 relative md:w-1/2">
              {!isLoaded && (
                <div className="absolute bg-primary-400 animate-pulse w-full rounded-lg filter shadow-lg object-cover h-[340px]" />
              )}
              <img
                className="w-full rounded-lg filter shadow-lg object-contain h-auto"
                loading="lazy"
                width={684}
                height={355}
                src={proj.image}
                alt={proj.heading}
                onLoad={() => setIsLoaded(true)}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default CardGrid;
