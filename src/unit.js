export class Card {
  constructor(name, apr, balanceTransferOfferDuration,
              purchaseOfferDuration, creditAvailable,
              isStudent, highIncome) {
    this.name = name;
    this.apr = apr;
    this.balanceTransferOfferDuration = balanceTransferOfferDuration;
    this.purchaseOfferDuration = purchaseOfferDuration;
    this.creditAvailable = creditAvailable;
    this.isStudent = isStudent;
    this.highIncome = highIncome;
  }
}

export class CardList {
  constructor(cards) {
    this.cards = [...arguments]
  }

  returnCards(isStudent, income) {
      let firstFilter = this.studentScreen(isStudent)
      return this.incomeScreen(firstFilter, income)
  }

  studentScreen(boolean) {
    if (boolean) {
      return this.cards
    }
    else {
      return this.cards.filter(card => card.isStudent === false)
    }
  }

  incomeScreen(cards, income) {
    if (income > 16000) {
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
