export type CardType = {
  name: string;
  cardIndex: string;
  setId: string;
  setNumber: string;
  color: string;
  cost: string;
  traits: string;
  power: string;
  couterPower: string;
  life: string;
  artist?: string;
  effect?: string;
  image: string;
  cardTypeId: string;
  rarityId: string;
}

export type DeckType = {
  cards: CardType[],
}

// {
//   "name": "Sadi",
//   "cardIndex": "526",
//   "setId": "clcktjzar000cuartdca8qq65",
//   "setNumber": "OP02-073",
//   "color": "purple",
//   "cost": "3",
//   "traits": "Impel Down",
//   "power": "3000",
//   "counterPower": "2000",
//   "life": null,
//   "artist": "Hashimoto",
//   "effect": "[On Play] Play up to 1 Character card with the {Jailer Beast} type from your hand.",
//   "image": "526.png",
//   "cardTypeId": "clcku3jcg000iuayiqtqmk027",
//   "rarityId": "clcktv0350008uayinmcc49s8"
// },