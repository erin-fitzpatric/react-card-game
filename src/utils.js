const cardValues = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'JACK',
  'QUEEN',
  'KING',
  'ACE',
]

const compareValues = ({ previousCardValue, currentCardValue, bet }) => {
  const previousCardValueIndex = cardValues.indexOf(previousCardValue);
  const currentCardValueIndex = cardValues.indexOf(currentCardValue);

  if (previousCardValueIndex === -1 || currentCardValueIndex === -1) {
    throw new Error("Card value not in cardValues array")
  }
  if (bet === "same" && previousCardValueIndex === currentCardValueIndex){
    return "Win"
  }
  if (bet ==="up" && previousCardValueIndex < currentCardValueIndex) {
    return "Win"
  }
  if (bet === "down" && previousCardValueIndex > currentCardValueIndex) {
    return "Win"
  }

  return "Lose"
}

export default compareValues;