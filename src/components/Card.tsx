import Image from "next/image";
import type { CardType } from "../types/DeckBuilder";
type Props = {
  setActive?: any,
  card: CardType,
  addDeck?: any,
  className?: string,
}

export default function Card({card, setActive= () => {return}, className, addDeck}: Props) {
  return (
    <Image
      onMouseEnter={() => setActive(card)}
      src={`/images/${card.image}`}
      alt={card.setId}
      width={80}
      height={160}
      className={className ? className :`rounded`}
      onClick={() => addDeck(card)}
    />
  )
}