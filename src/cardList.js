export class CardList {
  constructor(cards) {
    this.cards = cards;
  }

  returnCards(isStudent, highIncome) {
    const firstFilter = this.studentScreen(isStudent);
    return this.incomeScreen(firstFilter, highIncome);
  }

  studentScreen(boolean) {
    if (boolean) {
      return this.cards;
    }

    return this.cards.filter(card => card['Student Only'] === false);
  }

  incomeScreen(cards, highIncome) {
    if (highIncome === true) {
      return cards;
    }

    return cards.filter(card => card['High Income Only'] === false);
  }

  availableCredit(cards) {
    let credit = 0;
    cards.map(card => credit += card['Credit Available']);
    return credit;
  }
}
