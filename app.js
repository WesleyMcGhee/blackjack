let dealerSum = 0;
let playerSum = 0;
let dealerDeck = [];
let playerDeck = [];
let gameStatus = true;

function deck() {
  let card = Math.floor(Math.random() * 13) + 1;
  if (card >= 10) {
    return 10;
  } else {
    return card;
  }
}

function aceCheck(deck) {
  const arr = [];
  for (let i = 0; i < deck.length; i++) {
    if (deck[i] === 1) {
      arr.push(11);
    }
  }
  return arr;
}

function deckCheck(deck) {
  let sum = 0;
  for (let i = 0; i < deck.length; i++) {
    sum += deck[i];
  }
  return sum;
}
