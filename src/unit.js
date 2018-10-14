const availableCards = require('./availableCards.json')
const SL = availableCards['Student Life']
const AC = availableCards['Anywhere Card']
const LC = availableCards['Liquid Card']


export class Card {
  constructor(name, apr, balanceTransferOfferDuration,
              purchaseOfferDuration, creditAvailable,
              isStudent, highIncome, description) {
    this.name = name;
    this.apr = apr;
    this.balanceTransferOfferDuration = balanceTransferOfferDuration;
    this.purchaseOfferDuration = purchaseOfferDuration;
    this.creditAvailable = creditAvailable;
    this.isStudent = isStudent;
    this.highIncome = highIncome;
    this.description = description;
  }
}

const StudentLife = new Card(SL['name'], SL['apr'], SL['Balance Transfer Offer Duration'], SL['Purchase Offer Duration'], SL['Credit Available'], SL['Student Only'], SL['High Income Only'], SL['Description'])
const AnywhereCard = new Card(AC['name'], AC['apr'], AC['Balance Transfer Offer Duration'], AC['Purchase Offer Duration'], AC['Credit Available'], AC['Student Only'], AC['High Income Only'], AC['Description'])
const LiquidCard = new Card(LC['name'], LC['apr'], LC['Balance Transfer Offer Duration'], LC['Purchase Offer Duration'], LC['Credit Available'], LC['Student Only'], LC['High Income Only'], LC['Description'])

export { StudentLife, AnywhereCard, LiquidCard }

export class CardList {
  constructor(cards) {
    this.cards = [...arguments]
  }

  returnCards(isStudent, highIncome) {
      let firstFilter = this.studentScreen(isStudent)
      return this.incomeScreen(firstFilter, highIncome)
  }

  studentScreen(boolean) {
    if (boolean) {
      return this.cards
    }
    else {
      return this.cards.filter(card => card.isStudent === false)
    }
  }

  incomeScreen(cards, highIncome) {
    if (highIncome === true) {
      return cards
    }
    else {
      return cards.filter(card => card.highIncome === false)
    }
  }

  availableCredit(cards) {
    let credit = 0
    cards.map((card) => { credit += card.creditAvailable })
    return credit
  }

}
