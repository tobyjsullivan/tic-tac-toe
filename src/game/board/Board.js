import React from 'react';
import { connect } from 'react-redux';
import Square from './Square';
import './Board.css';

const mapStateToProps = (state) => {
  return {
    squares: state.game.squares
  };
};

var Board = (props) => {
  var squares = [];
  for (var i = 0; i < 9; i++) {
    squares[i] = (<Square key={i} squareNum={i} value={props.squares[i] || ""} />);
  }

  return(
    <div className="Board">
      {squares}
    </div>
  );
}
Board = connect(mapStateToProps)(Board);

export default Board;
