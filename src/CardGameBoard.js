import React, { Component } from 'react'
import { createDeckAndDraw } from './api';
import ButtonsTab from './ButtonsTab';
import { CardLayout } from './Layout.components';
import { drawCardFromDeck } from './api';
import compareValues from './utils';

export default class CardGameBoard extends Component {
  state = {
    cardImageUrl: null,
    cardValue: null,
    deckId: null
  }

  async componentDidMount() {
    const {deckId, value, image} = await createDeckAndDraw();
    this.setState( {
      deckId,
      cardValue: value,
      cardImageUrl: image,
      result: null
    })
  }

  onButtonClick = async ({target: {name: bet}}) => {
    this.setState({
      cardImageUrl: null
    })
    const {deckId, cardValue: previousCardValue} = this.state;
    const {value: currentCardValue, image} = await drawCardFromDeck(deckId);
    const result = compareValues({
      previousCardValue,
      currentCardValue,
      bet
    })

    this.setState({
      result,
      cardValue: currentCardValue,
      cardImageUrl: image
    })
  }

  render() {
    const {result, cardImageUrl} = this.state;
    if(!cardImageUrl) {
      return <h1>Loading...</h1>
    }
    return (
      <CardLayout>
        <img src={this.state.cardImageUrl} alt="This is your card" />
        <ButtonsTab onButtonClick={this.onButtonClick}/>
        {result && <h2>{`You ${result}`}</h2>}
      </CardLayout>
    )
  }
}
