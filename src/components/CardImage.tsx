import Image from "next/image"
type Props = {
  src: string,
  alt: string,
  width: number,
  height: number,
  setActive?: any,
  // card: any
}
export default function CardImage({src,alt,width,height, setActive, card}: Props) {
  return (
    <Image
      // onMouseEnter={() => setActive(card)}
      src={src}
      width={width}
      height={height}
      alt={alt} />
  )
}