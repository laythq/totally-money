const { Card, CardList } = require('./unit.js')

describe('Card#properties', () => {
  test('test that each card object has specific properties', () => {
    const card = new Card('Student Life', 18.9, 0, 6, 1200)
    expect(card.name).toEqual('Student Life')
    expect(card.apr).toEqual(18.9)
    expect(card.balanceTransferOfferDuration).toEqual(0)
    expect(card.purchaseOfferDuration).toEqual(6)
    expect(card.creditAvailable).toEqual(1200)
  })
})

describe('CardList', () => {
  test('#cards returns an array of available cards', () => {
    const card1 = new Card('Student Life', 18.9, 0, 6, 1200)
    const card2 = new Card('Anywhere Card', 33.9, 0, 0, 300)
    const card3 = new Card('Liquid Card', 33.9, 12, 6, 3000)
    const cardList = new CardList(card1, card2, card3)
    expect(cardList.cards).toEqual([card1, card2, card3])
    expect(cardList.cards.length).toEqual(3)
  })
})
