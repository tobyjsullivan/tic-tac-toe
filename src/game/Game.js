import React from 'react';
import { connect } from 'react-redux';
import Board from './board/Board';
import NewGameButton from './NewGameButton';
import WinnerAnnouncement from './WinnerAnnouncement';

const mapStateToProps = (state) => {
  return {
    winner: state.game.winner
  };
};


var Game = (props) => {
  let announcement = "";
  if (props.winner) {
    announcement = (<WinnerAnnouncement winner={props.winner} />);
  }

  return (
    <div>
      <h1>Welcome to Tic-Tac-Toe</h1>
      <Board />
      {announcement}
      <NewGameButton />
    </div>
  );
}
Game = connect(mapStateToProps)(Game);

export default Game;
