export type CardType = {
  name: string;
  cardIndex: string;
  setId: string;
  setNumber: string;
  color: string;
  cost: string;
  traits: string;
  power: string;
  couterPower?: string;
  life?: string;
  artist?: string;
  effect?: string;
  image: string;
  cardTypeId: string;
  rarityId: string;
}

export type DeckType = {
  cards: CardType[],
}