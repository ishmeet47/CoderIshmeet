import React from "react";
import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const TwoColumnCard = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="grid grid-cols-1 gap-10 items-center md:grid-cols-2"
    >
      <motion.div
        variants={{
          offscreen: {
            y: 300,
          },
          onscreen: {
            y: 0,
            // rotate: -10,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1.5,
            },
          },
        }}
        whileHover={{ scale: 1.02 }}
        className="bg-gray-50 px-6 py-16 rounded-3xl h-full relative filter shadow-md md:px-10 dark:bg-primary-500"
      >
        <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
          <a
            href="https://www.centene.com/"
            target="_blank"
            className="hover:underline"
          >
            Centene Corporation, Remote, CANADA
          </a>
          <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <CalendarIcon className=" text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
            APR, 2024 - Present
          </span>
          <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <BriefcaseIcon className="text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
            Java Fullstack Developer
          </span>
        </h6>
        <div className="relative mb-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
              duties & responsibilities
            </span>
          </div>
        </div>
        <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
          <li>
            Architected and deployed Spring Boot microservices for eligibility
            checks and claims processing, enhancing scalability and reducing API
            latency by 30%.
          </li>
          <li>
            Developed RESTful microservices for member eligibility, claims, and
            provider search using Spring Boot and Spring MVC, processing
            thousands of daily requests across U.S. healthcare systems.
          </li>
          <li>
            Implemented HIPAA-compliant authentication and authorization using
            Spring Security, JWT, and OAuth2 to ensure secure access to
            sensitive health records.
          </li>
          <li>
            Integrated Oracle databases using JPA and Hibernate; optimized
            complex PL/SQL queries, reducing execution time by 30% and improving
            backend throughput.
          </li>
          <li>
            Built responsive internal and external portals with AngularJS,
            improving data accessibility for patients and providers while
            enhancing UI load speed and system responsiveness.
          </li>
          <li>
            Achieved 90%+ code coverage by writing unit and integration tests
            using JUnit and Mockito, significantly reducing regression bugs in
            production.
          </li>
          <li>
            Automated CI/CD pipelines using Jenkins and Maven, improving release
            frequency by 40% and ensuring fast and error-free deployments.
          </li>
          <li>
            Implemented centralized logging and monitoring using Log4J and
            Kibana, enabling real-time service observability and faster issue
            resolution.
          </li>
          <li>
            Collaborated with cross-functional teams in Agile sprints,
            translating healthcare compliance requirements into scalable and
            production-ready software solutions.
          </li>
          <li>
            Enhanced API performance and resilience through load balancing and
            caching strategies for key eligibility and claims endpoints.
          </li>
        </ul>
      </motion.div>

      <motion.div
        variants={{
          offscreen: {
            y: 300,
          },
          onscreen: {
            y: 0,
            // rotate: -10,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1.5,
            },
          },
        }}
        whileHover={{ scale: 1.02 }}
        className="bg-gray-50 px-6 py-16 rounded-3xl h-full relative filter shadow-md md:px-10 dark:bg-primary-500"
      >
        <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
          <a
            href="https://soti.net/"
            target="_blank"
            className="hover:underline"
          >
            SOTI, Mississauga, CANADA
          </a>
          <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <CalendarIcon className=" text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
            SEP, 2023 - APR, 2024
          </span>
          <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <BriefcaseIcon className="text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
            SOFTWARE DEVELOPER INTERN
          </span>
        </h6>
        <div className="relative mb-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
              duties & responsibilities
            </span>
          </div>
        </div>
        <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
          <li>
            Developed unit tests, injector registry tests using Junit and
            Mockito and executed on-device testing across Android devices
          </li>
          <li>
            Engaged in code refactoring initiatives aimed at eliminating
            deprecated code
          </li>
          <li>
            Participated in agile development processes, attending sprint
            meetings, and providing regular updates on project progress
          </li>
          <li>
            Collaborated with senior developers to gain insights into software
            architecture and design principles
          </li>
          <li>
            Worked primarily on the SOTI MobiControl, maintaining their code and
            solving the MCMR issues reported by the customers
          </li>
          <li>
            Refactored older modules by configuring the Guice bindings and
            migrated the code from Java to Kotlin
          </li>
          <li>
            Used Robolectric unit testing framework to mock the Android
            framework and run tests without an actual device
          </li>
          <li>
            Written the step definitions and updated the feature files to write
            the automated test scenarios for the ART Automation Task
          </li>
        </ul>
      </motion.div>

      <motion.div
        variants={{
          offscreen: {
            y: 150,
          },
          onscreen: {
            y: 0,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1,
            },
          },
        }}
        whileHover={{ scale: 1.02 }}
        className="cursor-pointer bg-gray-50 px-6 py-16 rounded-3xl h-full filter shadow-md relative md:px-10 dark:bg-primary-500"
      >
        <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
          <a
            href="https://www.mphrx.com/"
            target="_blank"
            className="hover:underline"
          >
            My Personal Health Record Express (MPHRX), Gurugram, INDIA
          </a>
          <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <CalendarIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
            JUN, 2020 - AUG, 2022
          </span>
          <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <BriefcaseIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
            SOFTWARE ENGINEER II
          </span>
        </h6>
        <div className="relative mb-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
              duties & responsibilities
            </span>
          </div>
        </div>

        <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
          <li>
            Built Spring Integration Custom Transformers for transforming the DO
            (Domain Object) in to HAPI Object of three different FHIR Standards
            (R4, DSTU2 and DSTU3)
          </li>
          <li>
            Led backend with Groovy on Grail for CHS (Community Health System
            Project) for mapping various patient fields to FHIR related fields
            and contributed to frontend by writing custom directives and custom
            filters for improving search results
          </li>
          <li>
            Organized the CDA Sharing Module to add the capability for a user to
            share clinical documents over an email address to external users via
            2 types of modes (encrypted and un-encrypted)
          </li>
          <li>
            Built the Heartbeat API for a load balancer to check the health of
            Mongo and SQL connections by deep pinging the databases using 3
            types of connections authentications for mongo (GORM, AUDIT, MONGO
            SERVICE (for native mongo queries)) and only 1 type for SQL (GORM)
          </li>
          <li>
            Completed the upgrading of the Audit framework and migrated it from
            Groovy on Grails to Java and Spring, and combined it with other
            independent modules by following microservices architecture
          </li>
          <li>
            Owner of the Audit of Access module which audits all the information
            of the API’S that tries to access the endpoint
          </li>
          <li>
            Contributed to Audit of Change module in which every change made by
            user on the portal is recorded, and improved the Audit UI screen by
            adding the support of new user actions, in which all the recent
            changes made by the user appears on the top in which sorting feature
            is added based on the action date and action performed
          </li>
        </ul>
      </motion.div>
      <motion.div
        variants={{
          offscreen: {
            y: 300,
          },
          onscreen: {
            y: 0,
            // rotate: -10,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1.5,
            },
          },
        }}
        whileHover={{ scale: 1.02 }}
        className="bg-gray-50 px-6 py-16 rounded-3xl h-full relative filter shadow-md md:px-10 dark:bg-primary-500"
      >
        <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
          <a
            href="https://www.iccloyalty.com/"
            target="_blank"
            className="hover:underline"
          >
            ICC Loyalty Card Services LLC, Dubai, UAE
          </a>
          <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <CalendarIcon className=" text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
            SEP, 2019 - FEB, 2020
          </span>
          <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <BriefcaseIcon className="text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
            SOFTWARE ENGINEER
          </span>
        </h6>
        <div className="relative mb-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
              duties & responsibilities
            </span>
          </div>
        </div>
        <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
          <li>
            Built the Cashback Engine for FAB (First Abu Dhabi Bank) in which
            users gets earn based on conditions and a report is generated at the
            end of the day producing 2 types of earns (regulated and
            accelerated) for each user
          </li>
          <li>
            Installed the bank admin project for the EI (Emirates Islamic) Bank
            to control reports of 50,000 active users currently part of the
            bank, by deploying it, bank admin can perform all three operations
            including edit, delete, and view on user reports
          </li>
          <li>
            Executed Airtel Money SSO (single sign-on) project and developed an
            SSO feature for logging in directly through an HTML page which was
            used by 10+ banks
          </li>
          <li>
            Built the automation tool using Java and JDBC which runs through the
            ANT Command line arguments by specifying the number of users and the
            transactions whatever users made e.g.: ant 5 10 by using simple ant
            command, it will automate the 10 transactions per user creating
            total of 50 transactions with different data sets which then
            directly used for testing purposes
          </li>
        </ul>
      </motion.div>

      <motion.div
        variants={{
          offscreen: {
            y: 300,
          },
          onscreen: {
            y: 0,
            // rotate: -10,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1.5,
            },
          },
        }}
        whileHover={{ scale: 1.02 }}
        className="bg-gray-50 px-6 py-16 rounded-3xl h-full relative filter shadow-md md:px-10 dark:bg-primary-500"
      >
        <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
          <a
            href="https://www.mphrx.com/"
            target="_blank"
            className="hover:underline"
          >
            My Personal Health Record Express (MPHRX), Gurugram, INDIA
          </a>
          <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <CalendarIcon className=" text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
            MAY, 2018 - JULY, 2018
          </span>
          <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <BriefcaseIcon className="text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
            SOFTWARE DEVELOPMENT INTERN
          </span>
        </h6>
        <div className="relative mb-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
              duties & responsibilities
            </span>
          </div>
        </div>
        <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
          <li>
            Developed the user job configuration platform similar to existing
            portal known as DICR on two technologies Angular 6 and React JS
          </li>
          <li>
            Used the Route guard service in angular 6 for guarding the
            application in case an outsider tried to access the portal it will
            be redirected to the login page for authentication, otherwise if
            token is stored inside the session storage, then it will approve the
            request for the user without redirecting it to login
          </li>
          <li>
            This portal is used for basic CRUD Operations including viewing user
            reports from the database along with combining, updating, and
            removing the report by running the jobs on it
          </li>
          <li>
            Analyzed the differences between the two and the efficiency of the
            platform by performing load testing and then recorded the
            functionalities by running the application on both Angular 6 and
            React JS
          </li>
        </ul>
      </motion.div>

      <motion.div
        variants={{
          offscreen: {
            y: 300,
          },
          onscreen: {
            y: 0,
            // rotate: -10,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1.5,
            },
          },
        }}
        whileHover={{ scale: 1.02 }}
        className="bg-gray-50 px-6 py-16 rounded-3xl h-full relative filter shadow-md md:px-10 dark:bg-primary-500"
      >
        <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
          <a
            href="https://fable.co.in/"
            target="_blank"
            className="hover:underline"
          >
            Fable, NewDelhi, INDIA
          </a>
          <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <CalendarIcon className=" text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
            Dec 2016 - Jan 2017
          </span>
          <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <BriefcaseIcon className="text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
            SOFTWARE DEVELOPER INTERN
          </span>
        </h6>
        <div className="relative mb-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
              duties & responsibilities
            </span>
          </div>
        </div>
        <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
          <li>
            Engineered the advertisement platform using AngularJS and Angular
            Material, optimizing UI performance and delivering responsive,
            interactive interfaces with real-time data binding.
          </li>
          <li>
            Developed a custom autocomplete component utilizing Angular services
            and RxJS, enhancing search functionality and reducing user input
            errors by 30%, resulting in faster and more accurate user
            selections.
          </li>
          <li>
            Built a dynamic dropdown suggestion system that utilized debouncing
            techniques and API-driven suggestions, reducing server load by 25%
            and improving data input efficiency.
          </li>
          <li>
            Refined the user interface using Google Material Design and
            optimized the rendering pipeline with virtual scrolling and lazy
            loading, decreasing page load times by 40% and improving overall
            user retention.
          </li>
          <li>
            Integrated client-side caching and HTTP interceptors for optimized
            data fetching, reducing redundant API calls by 20% and enhancing
            platform scalability
          </li>
        </ul>
      </motion.div>

      <motion.div
        variants={{
          offscreen: {
            y: 300,
          },
          onscreen: {
            y: 0,
            // rotate: -10,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1.5,
            },
          },
        }}
        whileHover={{ scale: 1.02 }}
        className="bg-gray-50 px-6 py-16 rounded-3xl h-full relative filter shadow-md md:px-10 dark:bg-primary-500"
      >
        <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
          <a
            href="https://www.oceanfilms.in/"
            target="_blank"
            className="hover:underline"
          >
            OceanFilms, NewDelhi, INDIA
          </a>
          <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <CalendarIcon className=" text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
            June 2016 - Jul 2017
          </span>
          <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <BriefcaseIcon className="text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
            SOFTWARE DEVELOPER INTERN
          </span>
        </h6>
        <div className="relative mb-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
              duties & responsibilities
            </span>
          </div>
        </div>
        <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
          <li>
            Designed, developed, and deployed the Ocean Films website, enhancing
            user experience and engagement by 30% with a responsive,
            cross-browser compatible interface
          </li>
          <li>
            Created a custom Content Management System (CMS) using React for the
            front-end and Node.js with Express for the back-end, enabling
            dynamic content updates by the client without developer assistance.
          </li>
          <li>
            Deployed the website using AWS with automated scaling & load
            balancing, ensuring 99% uptime, supporting user traffic
          </li>
          <li>
            Utilized Docker for containerization, streamlining the deployment
            process and ensuring consistent environments across development,
            testing, and production.
          </li>
          <li>
            Enhanced security features by implementing JWT-based authentication
            for admin access to the CMS, protecting the platform from
            unauthorized changes.
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default TwoColumnCard;
