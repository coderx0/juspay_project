"use client";

import { useRef, useState } from "react";
import AnimatedText from "./PageSections/FirstFold/AnimatedText";
import Navbar from "./PageSections/Navbar/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const slideFromBottomVariants = {
  hidden: {
    y: "100%",
  },
  visible: {
    y: "0%",
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.3, transition: { duration: 0.2 } },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
      duration: 0.3,
    },
  },
  exit: { opacity: 0, scale: 0.3, transition: { duration: 0.2 } },
};

const cardData = [
  {
    id: "card1",
    title: "125Mn+",
    subtitle: "Daily Txns",
    image: "./general-hover.svg",
  },
  {
    id: "card2",
    title: "99.99%",
    subtitle: "Uptime",
    image: "./global-hover.svg",
  },
  {
    id: "card3",
    title: "$500Bn+",
    subtitle: "Annual TPV",
    image: "./juspay-hover.svg",
  },
];

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - 100;
      const y = e.clientY - rect.top - 100;
      setMousePosition({ x, y });

      const width = rect.width;
      const leftThird = width / 3;
      const rightThird = (width * 2) / 3;

      if (x < leftThird) {
        setActiveCard("card1");
      } else if (x < rightThird) {
        setActiveCard("card2");
      } else {
        setActiveCard("card3");
      }
    }
  };

  const handleMouseEnter = (e) => {
    const isOverText = e.target.closest(
      "nav, h1, h2, p, button,span,a, #text_section"
    );
    if (!isOverText) {
      setIsHovering(true);
    } else {
      setIsHovering(false);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>
      <div
        ref={containerRef}
        onMouseOver={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className="w-full h-[100vh] relative bg-[#121316] overflow-hidden">
        <img
          src="./grid.svg"
          alt="desktop-background"
          className="z-10 absolute top-[50px] hidden lg:block"
        />
        <img
          src="./grid-mobile.svg"
          alt="mobile-background"
          className="z-10 absolute top-[50px] lg:hidden"
        />

        <div className="pt-[12px] px-[20px] lg:pt-[20px] lg:px-[56px]">
          <Navbar />
        </div>
        <div className="flex items-center w-full justify-center">
          <div className="w-full">
            <section className="flex flex-col items-center justify-center relative">
              <div className="flex flex-col gap-8 lg:gap-[0px] items-center justify-center px-4">
                <div className="flex flex-col items-center justify-center z-40 pt-[60px] lg:pt-[12px]">
                  <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={slideFromBottomVariants}
                    className="text-[#F5F5F5] text-center text-[40px] lg:text-[94px] pb-2 font-medium lg:font-[600] not-italic leading-[120%] tracking-[-1.2px] lg:tracking-[-1.4px] animate-slideFromBottom overflow-hidden">
                    Payments designed for
                  </motion.h1>
                  <AnimatedText />
                </div>
                <motion.div
                  id="text_section"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                  }}
                  className="hidden max-w-[642px] justify-center items-center lg:px-14 lg:pt-[115px] animate-delayVisibility text-center cursor-pointer lg:flex z-40">
                  <motion.h2
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 2,
                      ease: "easeOut",
                    }}
                    className="text-[#BCBCBF] text-[19.027px] not-italic font-normal  animate-slideFromBottom leading-[150%]">
                    <span className="font-semibold text-[#FFF] ">Juspay</span>
                    powers leading enterprises around the world, simplifying
                    global coverage, orchestration, conversions, fraud reduction
                    and seamless customer experiences.
                  </motion.h2>
                </motion.div>
                <div className="flex items-center  justify-center max-w-[250px] lg:hidden">
                  <h2 className="text-[#BCBCBF] text-sm not-italic font-normal leading-[150%] text-center">
                    Simplify
                    <span className="font-semibold text-[#FFF] ">
                      global coverage
                    </span>
                    , optimise costs, improve conversions, and minimise payment
                    operations.
                  </h2>
                </div>
              </div>
              <Link href="#" target="" className="z-40">
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "100%" }}
                  transition={{
                    duration: 2,
                    delay: 1,
                  }}
                  style={{ transformOrigin: "right" }}
                  className="inline-flex w-fit h-[65px] justify-center items-center gap-2 shrink-0 py-5 rounded-[86px] z-10 mt-[50px] lg:mt-[64px] px-8  bg-[linear-gradient(105deg,#016fd0_4.61%,#03357c_162.29%)] hover:bg-[linear-gradient(105deg,#016fd0_4.61%,#03357c_98.29%)]">
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: 2,
                      delay: 1,
                    }}
                    style={{ transformOrigin: "right" }}
                    className="text-[#FFF] text-lg not-italic font-semibold leading-[120%] overflow-hidden text-nowrap">
                    Schedule a demo
                  </motion.span>
                  <div className=" flex !max-w-[24px] !h-[24px] justify-center items-center pt-[3px]">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.5 8.13916C11.9619 9.20122 13.2713 10.4462 14.3942 11.8413C14.5353 12.0165 14.5353 12.2618 14.3942 12.437C13.2713 13.8321 11.9619 15.0771 10.5 16.1392"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </motion.div>
              </Link>
            </section>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {isHovering && activeCard && (
            <motion.div
              key={activeCard}
              className="absolute pointer-events-none z-20"
              style={{
                left: mousePosition.x,
                top: mousePosition.y,
                transform: "translate(-50%, -50%)",
              }}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={cardVariants}>
              <div className="h-[212px] w-[212px] rounded-xl relative">
                <Image
                  height={212}
                  width={212}
                  src={cardData.find((card) => card.id === activeCard)?.image}
                  alt={cardData.find((card) => card.id === activeCard)?.title}
                  className="w-full h-[212px] object-cover rounded-md mb-4"
                />
                <div
                  className={`absolute right-[-54px] ${
                    activeCard !== "card3" ? "bottom-3.5" : "top-3.5"
                  }  flex w-[108px] h-[65px] flex-col justify-center items-center gap-2 shrink-0 py-2 px-5 rounded-[22px] border-[0.8px] border-solid border-white bg-[#121316]`}>
                  <span className="text-[#fff] text-xl not-italic font-semibold leading-[120%]">
                    {cardData.find((card) => card.id === activeCard)?.title}
                  </span>
                  <span className="text-[#A6ADB7] text-[11px] not-italic font-medium leading-[normal]">
                    {cardData.find((card) => card.id === activeCard)?.subtitle}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
