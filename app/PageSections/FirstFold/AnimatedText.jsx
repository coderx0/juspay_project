import React from "react";
import { motion } from "framer-motion";

const globalLetters = [
  {
    key: "1",
    symbols: ["₹", "₹", "₣"],
    finalLetter: "G",
    width: "w-[31.125px] lg:w-[75.175px]",
  },
  {
    key: "2",
    symbols: ["R", "₣", "¥"],
    finalLetter: "L",
    width: "w-[20.525px] lg:w-[49.7375px]",
  },
  {
    key: "3",
    symbols: ["€", "R", "$"],
    finalLetter: "O",
    width: "w-[33.925px] lg:w-[81.9px]",
  },
  {
    key: "4",
    symbols: ["£", "$", "₹"],
    finalLetter: "B",
    width: "w-[26.45px] lg:w-[63.9375px]",
  },
  {
    key: "5",
    symbols: ["₹", "€", "$"],
    finalLetter: "A",
    width: "w-[27.287px] lg:w-[65.9625px]",
  },
  {
    key: "6",
    symbols: ["£", "₣", "£"],
    finalLetter: "L",
    width: "w-[20.525px] lg:w-[49.7375px]",
  },
];

const outcomesLetters = [
  {
    key: "7",
    symbols: ["₣", "R", "£"],
    finalLetter: "O",
    width: "w-[33.925px] lg:w-[81.9px]",
  },
  {
    key: "8",
    symbols: ["R", "₣", "R"],
    finalLetter: "U",
    width: "w-[27.525px] lg:w-[66.5375px]",
  },
  {
    key: "9",
    symbols: ["₣", "$", "₹"],
    finalLetter: "T",
    width: "w-[20.4875px] lg:w-[49.6375px]",
  },
  {
    key: "10",
    symbols: ["$", "$", "R"],
    finalLetter: "C",
    width: "w-[29.7625px] lg:w-[71.9125px]",
  },
  {
    key: "11",
    symbols: ["R", "₹", "R"],
    finalLetter: "O",
    width: "w-[33.925px] lg:w-[81.9px]",
  },
  {
    key: "12",
    symbols: ["£", "R", "R"],
    finalLetter: "M",
    width: "w-[34.525px] lg:w-[83.3375px]",
  },
  {
    key: "13",
    symbols: ["R", "£", "R"],
    finalLetter: "E",
    width: "w-[22.6px] lg:w-[54.725px]",
  },
  {
    key: "14",
    symbols: ["¥", "₹", "€"],
    finalLetter: "S",
    width: "w-[24.6875px] lg:w-[59.7125px]",
  },
];
const AnimatedText = () => {
  return (
    <>
      <div className="flex flex-row h-[90px]">
        <div className=" cursor-pointer pr-2">
          <div className="flex items-center justify-center flex-col sm:flex-row">
            <div className="flex text-center text-[40px] lg:text-[96px] not-italic leading-[120%] tracking-[-1.2px] lg:tracking-[-2.4px] font-[600] max-sm:justify-center max-sm:items-center">
              {globalLetters.map((item, index) => (
                <div
                  key={item.key}
                  className={`overflow-hidden h-[1em] flex items-center relative ${item.width}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: "-76%" }}
                    transition={{
                      opacity: {
                        delay: 1.5 + index * 0.1,
                        duration: 1,
                      },
                      y: {
                        delay: 1 + index * 0.1,
                        duration: 2,
                      },
                      ease: "easeOut",
                    }}
                    className="flex flex-col items-center absolute top-0 left-0 w-full bg-[radial-gradient(75.98%_130.43%_at_18.04%_28.7%,#09f,#188edd_60.59%,#0561e2)] text-transparent bg-clip-text font-bold">
                    {item.symbols.map((symbol, index) => (
                      <span key={index} className="">
                        {symbol}
                      </span>
                    ))}

                    <span className="">{item.finalLetter}</span>
                  </motion.div>
                </div>
              ))}
            </div>
            <div
              className="flex lg:ml-6 text-center text-[40px] lg:text-[96px] not-italic leading-[120%] tracking-[-1.2px] lg:tracking-[-2.4px] font-[600] max-sm:justify-center max-sm:items-center"
              id="text-flex-OUTCOMES">
              {outcomesLetters.map((item, index) => (
                <div
                  key={item.key}
                  className={`overflow-hidden h-[1em] flex items-center relative ${item.width}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: "-76%" }}
                    transition={{
                      opacity: {
                        delay: 1.5 + (outcomesLetters.length - index) * 0.1,
                        duration: 1,
                      },
                      y: {
                        delay: 1 + (outcomesLetters.length - index) * 0.1,
                        duration: 2,
                      },
                      ease: "easeOut",
                    }}
                    className="flex flex-col items-center absolute top-0 left-0 w-full bg-[radial-gradient(75.98%_130.43%_at_18.04%_28.7%,#09f,#188edd_60.59%,#0561e2)] text-transparent bg-clip-text font-bold">
                    {item.symbols.map((symbol, index) => (
                      <span key={index} className="">
                        {symbol}
                      </span>
                    ))}

                    <span className="">{item.finalLetter}</span>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedText;
