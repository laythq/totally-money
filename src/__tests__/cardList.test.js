const { CardList } = require('../cardList.js');
const availableCards = require('../assets/availableCards.json');

describe('CardList', () => {
  const cardList = new CardList(availableCards);

  test('#cards property is an array of all three available cards', () => {
    expect(cardList.cards.length).toEqual(3);
  });

  test('#returnCards returns all three if student with income > 16000', () => {
    expect(cardList.returnCards(true, true).map(card => card.name)).toEqual(['Student Life', 'Anywhere Card', 'Liquid Card']);
  });

  test('#returnCards returns Student Life and Anywhere if student with income < 16000', () => {
    expect(cardList.returnCards(true, false).map(card => card.name)).toEqual(['Student Life', 'Anywhere Card']);
  });

  test('#returnCards returns Anywhere Card if not student with income < 16000', () => {
    expect(cardList.returnCards(false, false).map(card => card.name)).toEqual(['Anywhere Card']);
  });

  test('#returnCards returns Anywhere and Liquid is not student with income > 16000', () => {
    expect(cardList.returnCards(false, true).map(card => card.name)).toEqual(['Anywhere Card', 'Liquid Card']);
  });

  test('#availableCredit calculates the total credit available for a card list', () => {
    expect(cardList.availableCredit(availableCards)).toEqual(4500);
  });
});
