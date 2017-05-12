import React from 'react';
import { connect } from 'react-redux';
import { chooseSquare } from '../../actions';
import './Square.css';

const mapStateToProps = (state) => {
  return {
    player: state.game.currentPlayer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSquareClick: (player, squareNum) => {
      dispatch(chooseSquare(player, squareNum));
    }
  };
};

var Square = (props) => {
  return (
    <div className="Square" onClick={() => props.onSquareClick(props.player, props.squareNum)}>
      <p>{props.value}</p>
    </div>
  );
}
Square = connect(mapStateToProps, mapDispatchToProps)(Square);

export default Square;
