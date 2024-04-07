import Card from "./Card";
import GridContainer from "../ui/GridContainer";
import { CardType } from "../types/cards";

type Props = {
  cards: CardType[];
  handleChoice: (card: CardType) => void;
  firstSelect: CardType | null;
  secondSelect: CardType | null;
  disabled: boolean;
};

const Cards = ({
  cards,
  handleChoice,
  firstSelect,
  secondSelect,
  disabled,
}: Props) => {
  return (
    <div>
      <GridContainer>
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === firstSelect || card === secondSelect || card.find}
            disabled={disabled}
          />
        ))}
      </GridContainer>
    </div>
  );
};

export default Cards;
