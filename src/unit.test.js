const { Card, CardList } = require('./unit.js')
const availableCards = require('./availableCards.json')
// const SL = availableCards['Student Life']
// const AC = availableCards['Anywhere Card']
// const LC = availableCards['Liquid Card']

// describe('Card#properties', () => {
//   test('test that each card object has specific properties', () => {
//     const card = new Card('Student Life', 18.9, 0, 6, 1200)
//     expect(card.name).toEqual('Student Life')
//     expect(card.apr).toEqual(18.9)
//     expect(card.balanceTransferOfferDuration).toEqual(0)
//     expect(card.purchaseOfferDuration).toEqual(6)
//     expect(card.creditAvailable).toEqual(1200)
//   })
// })

describe('CardList', () => {
  // const card1 = new Card(SL['name'], SL['apr'], SL['Balance Transfer Offer Duration'], SL['Purchase Offer Duration'], SL['Credit Available'], SL['Student Only'], SL['High Income Only'])
  // const card2 = new Card(AC['name'], AC['apr'], AC['Balance Transfer Offer Duration'], AC['Purchase Offer Duration'], AC['Credit Available'], AC['Student Only'], AC['High Income Only'])
  // const card3 = new Card(LC['name'], LC['apr'], LC['Balance Transfer Offer Duration'], LC['Purchase Offer Duration'], LC['Credit Available'], LC['Student Only'], LC['High Income Only'])
  const cardList = new CardList(availableCards)

  test('#cards property is an array of available cards', () => {
    console.log(cardList.cards.includes())
    expect(cardList.cards).toBe(true)
    expect(cardList.cards.length).toEqual(3)
  })

  // test('#returnCards returns all three if student with income > 16000', () => {
  //   expect(cardList.returnCards(true, true)).toEqual([availableCards])
  // })
  //
  // test('#returnCards returns Student Life and Anywhere if student with income < 16000', () => {
  //   expect(cardList.returnCards(true, false)).toEqual([card1, card2])
  // })
  //
  // test('#returnCards returns Anywhere Card if not student with income < 16000', () => {
  //   expect(cardList.returnCards(false, false)).toEqual([card2])
  // })
  //
  // test('#returnCards returns Anywhere and Liquid is not student with income > 16000', () => {
  //   expect(cardList.returnCards(false, true)).toEqual([card2, card3])
  // })
  //
  // test('#availableCredit calculates the total credit available for a card list', () => {
  //   expect(cardList.availableCredit([card1, card2, card3])).toEqual(4500)
  // })

})
