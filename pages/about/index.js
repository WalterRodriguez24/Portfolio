import React, { useState } from "react";

/* eslint-disable */


// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
    ],
  },

  {
    title: "experience",
    info: [
      {
        title: "Developer Front-end - Sg3Perú",
        stage: "Mar 2023 - Jun 2023",
        subtitle: "Develop your website design.",
      },
      {
        title: "Developer Front-end - Sg3Perú",
        stage: "Mar 2023 - Jun 2023",
        subtitle:
          "Develop website for data management software.",
      },
      {
        title: "Developer Front-end - Awcrast",
        stage: "Jul 2023 - Agos 2023",
        subtitle: "Interface development (ChatPro)",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Systems Engineer - Autonoma University, Lima, Peru",
        stage: "2019 - 2024",
      },
    ],
  },
];
//framer motion
import { motion } from "framer-motion";

import { fadeIn } from "../../variants";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

//counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar image  */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div
        className="container mt-4 mx-auto h-full flex flex-col items-center xl:flex-row
      gap-x-6"
      >
        {/* text */}
        <div className="flex-1 flex flex-col justify-center ">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mt-4"
          >
            Transforming code<span className="text-accent"> into visual </span> 
            experiences the art of the frontend.
          </motion.h2>
         
          {/* counter  */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experiencie */}
              <div
                className="relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={5} />+
                </div>
                <div
                  className="text-xs uppecarse tracking-[1px] leading-[1.4]
                max-w-[100px]"
                >
                  Years of experience
                </div>
              </div>

              {/* project */}
              <div
                className="relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} />+
                </div>
                <div
                  className="text-xs uppecarse tracking-[1px] leading-[1.4]
                max-w-[100px]"
                >
                  Finished project
                </div>
              </div>
              {/* experiencie */}
              <div
                className="relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} />+
                </div>
                <div
                  className="text-xs uppecarse tracking-[1px] leading-[1.4]
                max-w-[100px]"
                >
                  Satisfied clients
                </div>
              </div>
             
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`  ${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  }  cursor-pointer capitalize xl:text-lg relative after:w-8
                after:h-[2px] after:bg-white after:absolute after:-bottom-1
                after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div
            className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4
          items-center xl:items-start"
          >
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row
                max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="flex-col">
                    <div className="font-light mb-2 md:mb-0">{item.title}</div>
                    <div>{item.stage}</div>
                    <div className="hidden md:flex">-</div>
                    <div>{item.subtitle}</div>
                  </div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div key='' className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
