import { TbViewfinder } from "react-icons/tb";
import { PiArrowsCounterClockwiseDuotone } from "react-icons/pi";
import ResetButton from "../ui/ResetButton";
import { motion } from "framer-motion";

const variants = {
  init: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

type Props = {
  turns: number;
  remaining: number;
  resetGame: () => void;
};

const GameStatus = ({ turns, remaining, resetGame }: Props) => {
  return (
    <motion.div
      variants={variants}
      initial="init"
      animate="animate"
      transition={{ delay: 1.2, ease: "anticipate" }}
      className="bg-gray-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-between space-x-5 md:space-x-0 md:w-[50%] py-3 px-5 rounded-md text-white shadow-lg uppercase mx-auto"
    >
      <div className="flex items-center">
        <PiArrowsCounterClockwiseDuotone className="text-blue-300 mr-2 text-3xl" />
        <p className="font-bold">
          Turns:{" "}
          <span className="font-bold underline underline-offset-4">
            {turns}
          </span>
        </p>
      </div>
      <div className="flex items-center">
        <TbViewfinder className="text-red-500 mr-2 text-3xl" />
        <p className="font-bold">
          Remaining:{" "}
          <span className="font-bold underline underline-offset-4">
            {remaining}
          </span>
        </p>
      </div>
      <ResetButton resetGame={resetGame}>Reset</ResetButton>
    </motion.div>
  );
};

export default GameStatus;
