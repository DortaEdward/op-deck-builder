import Image from "next/image";

type Props = {
  setActive?: any,
  card: any,
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