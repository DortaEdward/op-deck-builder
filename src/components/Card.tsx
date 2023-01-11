import Image from "next/image";
import type { CardType } from "../types/DeckBuilder";
type Props = {
  setActive?: any,
  card: CardType,
  addDeck?: (arg0: CardType) => void,
  className?: string,
  removeFromDeck?: (arg0: string) => void
  width?: number;
  height?: number;
  removeLeader?: any
}

export default function Card({ width, height, card, removeLeader, removeFromDeck = () => { return }, setActive = () => { return }, className, addDeck }: Props) {
  const handleClick = () => {
    if (addDeck) {
      addDeck(card)
    }
    if (removeFromDeck) {
      removeFromDeck(card.setNumber)
    }
    if(removeLeader){
      removeLeader(null)
    }
  };

  return (
    <Image
      onMouseEnter={() => setActive(card)}
      src={`/images/${card.image}`}
      alt={card.setId}
      width={width ? width : 80}
      height={height? height : 180}
      className={`cursor-pointer ${className ? className : `rounded`}`}
      onClick={() => handleClick()}
    />
  )
}