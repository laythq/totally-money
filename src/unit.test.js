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
  const card1 = new Card('Student Life', 18.9, 0, 6, 1200, true, false)
  const card2 = new Card('Anywhere Card', 33.9, 0, 0, 300, false, false)
  const card3 = new Card('Liquid Card', 33.9, 12, 6, 3000, false, true)
  const cardList = new CardList(card1, card2, card3)

  test('#cards property is an array of available cards', () => {
    expect(cardList.cards).toEqual([card1, card2, card3])
    expect(cardList.cards.length).toEqual(3)
  })

  test('#returnCards returns all three if student with income > 16000', () => {
    expect(cardList.returnCards(true, 20000)).toEqual([card1, card2, card3])
  })

  test('#returnCards returns Student Life and Anywhere if student with income < 16000', () => {
    expect(cardList.returnCards(true, 15000)).toEqual([card1, card2])
  })

  test('#returnCards returns Liquid Card and Anywhere if not student with income < 16000', () => {
    expect(cardList.returnCards(false, 12000)).toEqual([card2])
  })


  test('#returnCards returns Anywhere and Liquid is not student with income > 16000', () => {
    expect(cardList.returnCards(false, 20000)).toEqual([card2, card3])
  })
})
