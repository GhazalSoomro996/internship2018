import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      player1: "X",
      player2: "0",
      currentTurn: "X",
      board: [
        "", "", "", "", "", "", "", "", ""
      ],
      winner: null,
    }
  }

  handleClick(index) {
    if(this.state.board[index] === "" && !this.state.winner) {
      this.state.board[index] = this.state.currentTurn
      this.setState({
        board: this.state.board,
        currentTurn: this.state.currentTurn === this.state.player1 ? this.state.player2 : this.state.player1,
        winner: this.checkForWinner(),
      })
    }
  }

  checkForWinner() {
    var currentTurn = this.state.currentTurn
    var symbols = this.state.board
    var winninggroup = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    return winninggroup.find(function(combo) {
      console.log(symbols[combo[0]])
      if(symbols[combo[0]] !== "" && symbols[combo[1]] !== ""  && symbols[combo[2]] !== ""  
      && symbols[combo[0]] === symbols[combo[1]] && symbols[combo[1]] === symbols[combo[2]]) {
       console.log(symbols)
        return currentTurn
      } else {
        return false
      }
    })
  }
  render() {
    return (
      <div className="app-container">
        <h3>Tic Tac Toe in React</h3>
        <div className="board">
        {this.state.board.map((cell, index) => {
          return <div key={index} onClick={() => this.handleClick(index)} className="square">{cell}</div>;
        })}
        </div>
        {this.state.winner ? <h2 className="winner">{`you won`}</h2> : null}
      </div>
    );
  }
}

export default App;
