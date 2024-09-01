"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CountryDropDown from "./CountryDropDown";
import MobileMenu from "./MobileMenu";

const slideInVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Adjust the stagger delay as needed
    },
  },
};

const rollInVariants = {
  hidden: {
    opacity: 0,
    x: 30,
    rotate: 360,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 1,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1 + 0.4,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const NAV_ITEM_STYLE =
  "px-[12px] hover:text-[#0B65E3] transition-colors duration-300 hover:font-semibold";

const TEXT = "JUSPAY";
const middleIndex = Math.floor(TEXT.length / 2);
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);

  return (
    <>
      <nav className="p-2 lg:pl-9 lg:px-6 lg:py-[19px] rounded-full w-full flex items-center justify-between relative bg-[#121316] border border-[#211F1F] text-[#F4F4F4] z-50">
        <div className="lg:hidden">
          <img
            src="./juspay-full-logo-dark-mode.svg"
            alt="juspay logo"
            className="h-8"
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="relative lg:hidden">
            <img
              src="./globe-dark.png"
              alt="globe"
              className="w-10 h-10"
              onClick={() => setOpenDropDown((prev) => !prev)}
            />
            {openDropDown ? <CountryDropDown /> : null}
          </div>
          <button
            onClick={() => setOpenMenu((prev) => !prev)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg focus:outline-none focus:ring-2 lg:hidden">
            {!openMenu ? (
              <img
                src="./hamburger-icon.DmpCzxrL.svg"
                alt="navbar"
                className="h-8"
              />
            ) : (
              <img
                src="./close-icon.c2i1fhZv.svg"
                alt="navbar"
                className="h-4"
              />
            )}
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-[8px]">
          <motion.a
            initial="hidden"
            animate="visible"
            variants={rollInVariants}
            className=""
            href="/">
            <img
              src="./juspay-logo.svg"
              alt="JUSPAY Logo"
              className="h-auto w-[40px]"
            />
          </motion.a>
          <div className="text-[30px] font-bold">
            {TEXT.split("").map((char, index) => {
              const offsetIndex = Math.abs(index - middleIndex);
              return (
                <motion.span
                  key={char}
                  custom={offsetIndex}
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  style={{ display: "inline-block" }}>
                  {char}
                </motion.span>
              );
            })}
          </div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hidden lg:flex items-center gap-4 text-lg text-[#F4F4F4] font-semibold">
          <motion.a
            variants={slideInVariants}
            href="/"
            className={NAV_ITEM_STYLE}>
            About us
          </motion.a>
          <motion.a
            variants={slideInVariants}
            href="/"
            className={NAV_ITEM_STYLE}>
            Docs
          </motion.a>
          <motion.a
            variants={slideInVariants}
            href="/"
            className={NAV_ITEM_STYLE}>
            Integrations
          </motion.a>
          <motion.div variants={slideInVariants} href="/">
            <div
              onMouseLeave={() => setOpenDropDown(false)}
              className="relative">
              <img
                src="./globe-dark.png"
                alt="globe"
                className="w-12 h-12"
                onMouseEnter={() => setOpenDropDown(true)}
              />
              {openDropDown ? <CountryDropDown /> : null}
            </div>
          </motion.div>
          <motion.a
            variants={slideInVariants}
            href="/"
            className="px-[12px] flex items-center gap-1 ">
            <span className="text-[#0099ff] hover:text-[#0561E2] transition-colors duration-300">
              Contact us
            </span>
            <img src="./arrow-right-blue.svg" alt="arrow" />
          </motion.a>
        </motion.div>
      </nav>

      {openMenu ? <MobileMenu /> : null}
    </>
  );
};

export default Navbar;
