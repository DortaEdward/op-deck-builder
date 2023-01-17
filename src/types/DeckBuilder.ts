export type CardType = {
  name: string;
  cardIndex: string;
  setId: string;
  setNumber: string;
  color: string;
  cost: string;
  traits: string;
  power: string;
  counterPower?: string;
  life?: string;
  artist?: string;
  effect?: string;
  image: string;
  cardTypeId: string;
  rarityId: string;
  cardType?: {
    name:string
  }
}

export type DeckType = {
  cards: CardType[],
}