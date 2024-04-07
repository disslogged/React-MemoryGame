import ResetButton from "../ui/ResetButton";
import { motion } from "framer-motion";

const variants = {
  animate: {
    y: [500, -50, 0],
    opacity: 1,
  },
};

type Props = {
  resetGame: () => void;
  turns: number;
};

const UserWin = ({ resetGame, turns }: Props) => {
  return (
    <div className="absolute w-full h-full bg-black/40 backdrop-blur-md z-[177]">
      <motion.div
        variants={variants}
        animate="animate"
        transition={{ duration: 1, ease: "anticipate" }}
        className="flex flex-col items-center justify-center h-full z-[1717]"
      >
        <h2 className="text-3xl font-bold text-green-500">
          Congratulations! You won!
        </h2>
        <p className="text-lg text-blue-300 my-4">
          You completed the game in{" "}
          <span className="font-bold underline underline-offset-4">
            {turns}
          </span>{" "}
          turns!
        </p>
        <p className="text-lg text-white mb-2">Try to beat your record!</p>
        <ResetButton resetGame={resetGame}>New Game</ResetButton>
      </motion.div>
    </div>
  );
};

export default UserWin;
