import { motion } from "framer-motion";
import { CardType } from "../types/cards";

const variants = {
  init: {
    scale: 0,
    rotate: 180,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    rotate: 0,
  },
};

type CardPropsType = {
  card: CardType;
  handleChoice: (card: CardType) => void;
  flipped: boolean;
  disabled: boolean;
};

const Card = ({ card, handleChoice, flipped, disabled }: CardPropsType) => {
  return (
    <motion.div
      variants={variants}
      initial="init"
      animate="animate"
      transition={{ duration: 0.5 }}
    >
      <div
        className={`card ${flipped ? "card-active" : ""} cursor-pointer`}
        onClick={() => {
          if (!disabled) handleChoice(card);
        }}
      >
        <div className="front flex items-center justify-center text-4xl font-semibold bg-gradient-to-tl from-fuchsia-400 to-fuchsia-800 to-80% border-white border">
          <span className="animate inline-block">?</span>
        </div>
        <div className="back bg-white/10 backdrop-blur-2xl p-2 border border-white">
          <img src={card.image} alt="card" />
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
