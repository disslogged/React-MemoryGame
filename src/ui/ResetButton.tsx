import { ReactNode } from "react";

type Props = {
  resetGame: () => void;
  children: ReactNode;
};

const ResetButton = ({ resetGame, children }: Props) => {
  return (
    <button
      className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
      onClick={resetGame}
    >
      {children}
    </button>
  );
};

export default ResetButton;
