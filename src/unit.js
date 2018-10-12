export class Card {
  constructor(name, apr, balanceTransferOfferDuration,
              purchaseOfferDuration, creditAvailable) {
    this.name = name;
    this.apr = apr;
    this.balanceTransferOfferDuration = balanceTransferOfferDuration;
    this.purchaseOfferDuration = purchaseOfferDuration;
    this.creditAvailable = creditAvailable;
  }
}

export class CardList {
  constructor(cards) {
    this.cards = [...arguments]
  }
}
