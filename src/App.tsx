import { useEffect, useState } from "react";
import Background from "./components/Background";
import Cards from "./components/Cards";
import GameStatus from "./components/GameStatus";
import { cardsInfo } from "./constants/cardsInfo";
import { CardType } from "./types/cards";
import UserWin from "./components/UserWin";

const App = () => {
  const [cards, setCards] = useState(
    [...cardsInfo].sort(() => Math.random() - 0.5)
  );
  const [disabled, setIsDisabled] = useState(false);
  const [firstSelect, setFirstSelect] = useState<CardType | null>(null);
  const [secondSelect, setSecondSelect] = useState<CardType | null>(null);

  const [turns, setTurns] = useState(0);
  const userWin = cards.every(card => card.find);
  const remaining =
    cards.reduce((acc, cur) => {
      if (cur.find) return acc--;
      return acc;
    }, 16) / 2;

  // reset turn
  const resetTurn = () => {
    setFirstSelect(null);
    setSecondSelect(null);
    setTurns(prv => prv + 1);
    setIsDisabled(false);
  };

  // reset game
  const resetGame = () => {
    setFirstSelect(null);
    setSecondSelect(null);
    setIsDisabled(false);
    setTurns(0);
    setTimeout(() => {
      setCards([...cardsInfo].sort(() => Math.random() - 0.5));
    }, 500);
  };

  // handle choice
  const handleChoice = (card: CardType) => {
    // cannot select founded card
    if (card.find) return;

    // cannot select same card
    if (firstSelect && firstSelect.id === card.id) return;

    // if have first select user can select second select
    firstSelect ? setSecondSelect(card) : setFirstSelect(card);
  };

  // compare selected cards
  useEffect(() => {
    if (firstSelect && secondSelect) {
      setIsDisabled(true);
      // if cards match
      if (firstSelect.image === secondSelect.image) {
        setCards(prvCards => {
          return prvCards.map(card => {
            if (card.image === firstSelect.image)
              return { ...card, find: true };
            return card;
          });
        });
        resetTurn();
      }

      // if cards not match
      const timer = setTimeout(() => {
        resetTurn();
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [firstSelect, secondSelect]);
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-10 w-full overflow-hidden">
      <Background />
      <GameStatus turns={turns} resetGame={resetGame} remaining={remaining} />
      <Cards
        cards={cards}
        disabled={disabled}
        handleChoice={handleChoice}
        firstSelect={firstSelect}
        secondSelect={secondSelect}
      />
      {userWin && <UserWin resetGame={resetGame} turns={turns} />}
    </section>
  );
};

export default App;
