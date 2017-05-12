import React from 'react';
import { connect } from 'react-redux';
import { restartGame } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onNewGameClick: () => {
      dispatch(restartGame());
    }
  }
};

var NewGameButton = (props) => {
  return (
    <button onClick={() => props.onNewGameClick() }>New Game</button>
  );
}
NewGameButton = connect(undefined, mapDispatchToProps)(NewGameButton);

export default NewGameButton;
