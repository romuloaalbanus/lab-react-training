import React, { Component } from 'react';

class Dice extends Component {
  state = {
    dice: '/src/img/dice1.png',
  };

  randomDice = () => {
    const diceArr = [
      '/src/img/dice1.png',
      '/src/img/dice2.png',
      '/src/img/dice3.png',
      '/src/img/dice4.png',
      '/src/img/dice5.png',
      '/src/img/dice6.png',
    ];

    const randomNumber = Math.floor(Math.random() * 5);

    this.setState({
      dice: diceArr[randomNumber],
    });
  };

  handleDiceClick = () => {
    setTimeout(() => {
      this.setState({
        dice: '/src/img/dice-empty.png',
      });
    }, 1);

    setTimeout(() => {
      this.randomDice();
    }, 1000);
  };

  render() {
    return (
      <div>
        <img
          className="image"
          src={this.state.dice}
          alt="dice"
          onClick={this.handleDiceClick}
        />
      </div>
    );
  }
}

export default Dice;
