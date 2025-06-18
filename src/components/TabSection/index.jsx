import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import images from "../../constants/image";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
const logos = [
  {
    image: images.htmlLogo,
    title: "HTML5",
  },
  {
    image: images.cssLogo,
    title: "CSS3",
  },
  {
    image: images.javascriptLogo,
    title: "JavaScript",
  },
  {
    image: images.gitLogo,
    title: "Git",
  },
  {
    image: images.githubLogo,
    title: "Github",
  },
  {
    image: images.reactLogo,
    title: "React",
  },
  // {
  //   image: images.nextLogo,
  //   title: "NextJS",
  // },
  // {
  //   image: images.hubspotLogo,
  //   title: "HubSpot",
  // },
  // {
  //   image: images.tailwindLogo,
  //   title: "Tailwind",
  // },
  {
    image: images.awsLogo,
    title: "AmazonWebServices",
  },
  {
    image: images.androidLogo,
    title: "Android",
  },
  {
    image: images.angularLogo,
    title: "AngularJS",
  },
  {
    image: images.apacheLog4jLogo,
    title: "ApacheLog4J",
  },
  {
    image: images.cLogo,
    title: "C",
  },
  {
    image: images.cPlusPlusLogo,
    title: "C++",
  },
  {
    image: images.djangoLogo,
    title: "Django",
  },
  {
    image: images.grailsLogo,
    title: "Grails",
  },
  {
    image: images.groovyLogo,
    title: "Groovy",
  },
  {
    image: images.hibernateLogo,
    title: "Hibernate",
  },
  {
    image: images.javaLogo,
    title: "Java",
  },
  {
    image: images.jenkinsLogo,
    title: "Jenkins",
  },
  {
    image: images.microsoftSqlServerLogo,
    title: "MicrosoftSqlServer",
  },
  {
    image: images.mongodbLogo,
    title: "MongoDB",
  },
  {
    image: images.mysqlLogo,
    title: "MySql",
  },
  {
    image: images.pythonLogo,
    title: "Python",
  },
  {
    image: images.reduxLogo,
    title: "Redux",
  },
  {
    image: images.seleniumLogo,
    title: "Selenium",
  },
  {
    image: images.springLogo,
    title: "Spring",
  },
  {
    image: images.sqlLogo,
    title: "SQL",
  },
  {
    image: images.sqliteLogo,
    title: "SQLite",
  },
  {
    image: images.typescriptLogo,
    title: "TypeScript",
  },
  {
    image: images.jdbcLogo,
    title: "JDBC",
  },
];

const TabSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Tabs defaultIndex={0}>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "linear", duration: 0.5 }}
        >
          <TabList className="bg-primary flex flex-col justify-center items-center mx-auto rounded-xl mb-16 w-full dark:bg-primary-500 md:w-max md:flex-row">
            <Tab className="text-white w-full text-center cursor-pointer px-8 py-4 font-semibold focus-within:bg-secondary-400 md:w-max dark:focus-within:bg-secondary rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
              Know me more
            </Tab>
            <Tab className="text-white w-full text-center cursor-pointer  px-8 py-4 font-semibold focus-within:bg-secondary-400 md:w-max dark:focus-within:bg-secondary rounded-t-none rounded-b-xl md:rounded-l-none md:rounded-r-xl">
              Technical Skills
            </Tab>
          </TabList>
        </motion.div>
        <TabPanel className="flex gap-20 items-center flex-col-reverse md:flex-row-reverse transition-all">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "linear", duration: 0.5 }}
            className="w-full text-primary md:w-1/2 dark:text-white"
          >
            <h2 className="text-2xl font-semibold mb-2">
              Masters Graduate from University of Windsor | Software Development
              Engineer
            </h2>
            <p className="text-base font-normal text-neutral-700 dark:text-neutral-300">
              * Full Stack Software Engineer with 6+ years of experience in
              developing and implementing web applications and providing
              technical support to accountants and relationship managers
              utilizing an array of technology and software programs to automate
              fundamental processes and provide easier tech solutions for 7
              large commercial clients.
              <br />
              * Experience in interaction with international clients in an Agile
              environment, along with writing Software design.
              <br />
              * Proficient in the use of Java, Angular JS, MongoDB, Groovy on
              Grails, SQL and JavaScript.
              <br />
              * Skilled in utilizing modern front-end technologies such as
              React, Redux and AngularJS to deliver exceptional user
              experiences.
              <br />
              * Certified Software Design Developer with a track record of
              successfully completing academic projects utilizing the platform
              and responsible for bug fixing and maintaining current projects.
              <br />* Sharpened communication, teamwork, and problem-solving
              abilities through active collaboration with project teams,
              colleagues, and clients.
            </p>
            <br />
            <h3 className="font-semibold text-xl mb-2">Certifications 📝:</h3>
            <ul className="list-inside list-disc text-neutral-700 dark:text-neutral-300">
              <li>
                <a
                  href="https://www.linkedin.com/learning/certificates/e0ba3a70ceeff03ff3e63f045bfad12650775dac1219b3d64f4d0514364ae198?trk=share_certificate"
                  className="underline"
                  target="_blank"
                >
                  Scrum: Advanced
                  <span className="ml-1 inline-flex align-middle">
                    <ExternalLinkIcon className="h-5 w-5" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/learning/certificates/37409836aee7830612174d8a9e09a9a32bd071ef544c52e74b1593b0b28507c2?trk=share_certificate"
                  className="underline"
                  target="_blank"
                >
                  MongoDB
                </a>
                <span className="ml-1 inline-flex align-middle">
                  <ExternalLinkIcon className="h-5 w-5" />
                </span>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/learning/certificates/88e60aa2c6096409c5ddd385d4d922d7d484eaeeeeadcb4c3d648e272b953cdc?trk=share_certificate"
                  className="underline"
                  target="_blank"
                >
                  Hadoop
                </a>
                <span className="ml-1 inline-flex align-middle">
                  <ExternalLinkIcon className="h-5 w-5" />
                </span>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/learning/certificates/737c18fa4c49bb339be3f90f7aaebce337631841d2e72f9cb18f3e1bb6afc924?trk=share_certificate"
                  className="underline"
                  target="_blank"
                >
                  JavaScript TestDriven Development
                </a>
                <span className="ml-1 inline-flex align-middle">
                  <ExternalLinkIcon className="h-5 w-5" />
                </span>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/learning/certificates/78ca1c4ce7367a95ed824e82b8332d31dd6fa2045ba6af6156d22aa415091af5?trk=share_certificate"
                  className="underline"
                  target="_blank"
                >
                  Spark SQL and Dataframes
                </a>
                <span className="ml-1 inline-flex align-middle">
                  <ExternalLinkIcon className="h-5 w-5" />
                </span>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/learning/certificates/1f796b0993e3a2691b1fc8c9f172b9983527fa6ae3c67dc9c62908e58ce069aa?trk=share_certificate"
                  className="underline"
                  target="_blank"
                >
                  Software Architecture From Developer to Architect
                </a>
                <span className="ml-1 inline-flex align-middle">
                  <ExternalLinkIcon className="h-5 w-5" />
                </span>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/learning/certificates/c195d1e16ac5c4c1d795bf9284143edfca7cc313927b3da01f53702e393df376?trk=share_certificate"
                  className="underline"
                  target="_blank"
                >
                  Software Design From Requirements to Release
                </a>
                <span className="ml-1 inline-flex align-middle">
                  <ExternalLinkIcon className="h-5 w-5" />
                </span>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/learning/certificates/6cfe9c4a5089780798b140c2e4e177bbb8e62bde4683d1cc241c4130ac0bc107?trk=share_certificate"
                  className="underline"
                  target="_blank"
                >
                  Software Testing Foundations Bug Writing and Management
                </a>
                <span className="ml-1 inline-flex align-middle">
                  <ExternalLinkIcon className="h-5 w-5" />
                </span>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/learning/certificates/16e6340c53024350aad4a5b591d58d54505ce3c6828464c67d390c3855367949?trk=share_certificate"
                  className="underline"
                  target="_blank"
                >
                  Unix Essential Training
                </a>
                <span className="ml-1 inline-flex align-middle">
                  <ExternalLinkIcon className="h-5 w-5" />
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "linear", duration: 0.5 }}
            className="w-full relative md:w-1/2 md:h-[450px]"
          >
            {!isLoaded && (
              <div className="absolute top-0 rounded-lg left-0 z-50 bg-primary-400 animate-pulse w-full md:h-[450px]" />
            )}
            <img
              src={images.felixImage}
              className="h-full w-full z-10 object-cover object-top rounded-lg filter shadow-lg"
              alt="Image Felix"
              loading="lazy"
              width={664}
              height={450}
              onLoad={() => setIsLoaded(true)}
            />
          </motion.div>
        </TabPanel>
        <TabPanel className="flex gap-20 items-center flex-col md:flex-row-reverse transition-all">
          <div className="w-full text-center text-white max-w-3xl mx-auto md:h-[450px]">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "linear", duration: 0.5 }}
              className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 lg:mt-8"
            >
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center gap-4 py-8 px-8 bg-gray-50 rounded-xl filter shadow-md dark:bg-primary-400"
                >
                  <img
                    className="h-14 object-contain dark:filter dark:invert"
                    src={logo.image}
                    alt={logo.title}
                    loading="lazy"
                    width={56}
                    height={56}
                  />
                  <h6 className="text-xl font-semibold text-primary dark:text-white">
                    {logo.title}
                  </h6>
                </div>
              ))}
            </motion.div>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default TabSection;
